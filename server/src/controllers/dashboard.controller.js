import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Client from "../models/client.model.js";
import Invoice from "../models/invoice.model.js";
import mongoose from "mongoose";

const getOverview = asyncHandler(async (req, res) => {
    const { organizationId } = req.params;

    const objectId = new mongoose.Types.ObjectId(organizationId);

    const [clientStats, summary, invoiceStats] = await Promise.all([
        Client.aggregate([
            {
                $match: {
                    organization: objectId,
                },
            },
            {
                $count: "totalClients",
            },
        ]),

        Invoice.aggregate([
            {
                $match: {
                    organization: objectId,
                    status: {
                        $ne: "cancelled",
                    },
                },
            },
            {
                $group: {
                    _id: null,

                    totalInvoices: {
                        $sum: 1,
                    },

                    totalRevenue: {
                        $sum: "$totalAmount",
                    },

                    paidAmount: {
                        $sum: "$amountPaid",
                    },

                    outstandingAmount: {
                        $sum: "$balanceDue",
                    },
                },
            },
            {
                $project: {
                    _id: 0,
                    totalInvoices: 1,
                    totalRevenue: 1,
                    paidAmount: 1,
                    outstandingAmount: 1,
                },
            },
        ]),

        Invoice.aggregate([
            {
                $match: {
                    organization: objectId,
                },
            },
            {
                $group: {
                    _id: null,

                    draft: {
                        $sum: {
                            $cond: [{ $eq: ["$status", "draft"] }, 1, 0],
                        },
                    },

                    sent: {
                        $sum: {
                            $cond: [{ $eq: ["$status", "sent"] }, 1, 0],
                        },
                    },

                    viewed: {
                        $sum: {
                            $cond: [{ $eq: ["$status", "viewed"] }, 1, 0],
                        },
                    },

                    partiallyPaid: {
                        $sum: {
                            $cond: [
                                { $eq: ["$status", "partially_paid"] },
                                1,
                                0,
                            ],
                        },
                    },

                    paid: {
                        $sum: {
                            $cond: [{ $eq: ["$status", "paid"] }, 1, 0],
                        },
                    },

                    overdue: {
                        $sum: {
                            $cond: [{ $eq: ["$status", "overdue"] }, 1, 0],
                        },
                    },

                    cancelled: {
                        $sum: {
                            $cond: [{ $eq: ["$status", "cancelled"] }, 1, 0],
                        },
                    },
                },
            },
            {
                $project: {
                    _id: 0,
                    draft: 1,
                    sent: 1,
                    viewed: 1,
                    partiallyPaid: 1,
                    paid: 1,
                    overdue: 1,
                    cancelled: 1,
                },
            },
        ]),
    ]);

    const overview = {
        summary: {
            totalClients: clientStats[0]?.totalClients || 0,
            totalInvoices: summary[0]?.totalInvoices || 0,
            totalRevenue: summary[0]?.totalRevenue || 0,
            paidAmount: summary[0]?.paidAmount || 0,
            outstandingAmount: summary[0]?.outstandingAmount || 0,
        },

        invoiceStats: {
            draft: invoiceStats[0]?.draft || 0,
            sent: invoiceStats[0]?.sent || 0,
            viewed: invoiceStats[0]?.viewed || 0,
            partiallyPaid: invoiceStats[0]?.partiallyPaid || 0,
            paid: invoiceStats[0]?.paid || 0,
            overdue: invoiceStats[0]?.overdue || 0,
            cancelled: invoiceStats[0]?.cancelled || 0,
        },
    };

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                overview,
                "Dashboard overview fetched successfully"
            )
        );
});

const getMonthlyRevenue = asyncHandler(async (req, res) => {
    const { organizationId } = req.params;

    const revenue = await Invoice.aggregate([
        {
            $match: {
                organization: new mongoose.Types.ObjectId(organizationId),
                status: {
                    $nin: ["draft", "cancelled"],
                },
            },
        },
        {
            $group: {
                _id: {
                    year: { $year: "$issueDate" },
                    month: { $month: "$issueDate" },
                },
                revenue: {
                    $sum: "$totalAmount",
                },
            },
        },
        {
            $sort: {
                "_id.year": 1,
                "_id.month": 1,
            },
        },
        {
            $project: {
                _id: 0,
                year: "$_id.year",
                month: "$_id.month",
                revenue: 1,
            },
        },
    ]);

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                revenue,
                "Monthly revenue fetched successfully"
            )
        );
});

const getRecentInvoices = asyncHandler(async (req, res) => {
    const { organizationId } = req.params;

    const invoices = await Invoice.find({
        organization: organizationId,
    })
        .populate("client", "name companyName")
        .sort({ createdAt: -1 })
        .limit(5)
        .select(
            "invoiceNumber totalAmount amountPaid balanceDue status dueDate createdAt"
        )
        .lean();

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                invoices,
                "Recent invoices fetched successfully"
            )
        );
});

const getTopClients = asyncHandler(async (req, res) => {
    const { organizationId } = req.params;

    const clients = await Invoice.aggregate([
        {
            $match: {
                organization: new mongoose.Types.ObjectId(organizationId),
                status: {
                    $ne: "cancelled",
                },
            },
        },
        {
            $group: {
                _id: "$client",

                totalRevenue: {
                    $sum: "$totalAmount",
                },

                totalInvoices: {
                    $sum: 1,
                },

                amountPaid: {
                    $sum: "$amountPaid",
                },
            },
        },
        {
            $sort: {
                totalRevenue: -1,
            },
        },
        {
            $limit: 5,
        },
        {
            $lookup: {
                from: "clients",
                localField: "_id",
                foreignField: "_id",
                as: "client",
            },
        },
        {
            $unwind: "$client",
        },
        {
            $project: {
                _id: 0,

                clientId: "$client._id",

                name: "$client.name",

                company: "$client.companyName",

                totalRevenue: 1,

                totalInvoices: 1,

                amountPaid: 1,
            },
        },
    ]);

    return res
        .status(200)
        .json(
            new ApiResponse(200, clients, "Top clients fetched successfully")
        );
});

export { getOverview, getMonthlyRevenue, getRecentInvoices, getTopClients };
