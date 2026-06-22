import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Invoice from "../models/invoice.model.js";
import Payment from "../models/payment.model.js";
import mongoose from "mongoose";

const createPayment = asyncHandler(async (req, res) => {
    const { organizationId, invoiceId } = req.params;

    const { amount, paymentDate, paymentMethod, referenceNumber } = req.body;

    if (!amount || amount <= 0) {
        throw new ApiError(400, "Payment amount must be greater than 0");
    }

    if (!paymentMethod) {
        throw new ApiError(400, "Payment method is required");
    }

    const invoice = await Invoice.findOne({
        _id: invoiceId,
        organization: organizationId,
    });

    if (!invoice) {
        throw new ApiError(404, "Invoice not found");
    }

    if (invoice.status === "cancelled") {
        throw new ApiError(
            400,
            "Cannot record payment for a cancelled invoice"
        );
    }

    if (invoice.balanceDue <= 0) {
        throw new ApiError(400, "Invoice has already been fully paid");
    }

    if (amount > invoice.balanceDue) {
        throw new ApiError(
            400,
            `Payment amount cannot exceed balance due (${invoice.balanceDue})`
        );
    }

    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        const [payment] = await Payment.create(
            [
                {
                    organization: organizationId,
                    invoice: invoiceId,
                    amount,
                    paymentDate,
                    paymentMethod,
                    referenceNumber,
                    receivedBy: req.user._id,
                },
            ],
            { session }
        );

        invoice.amountPaid += amount;
        invoice.balanceDue -= amount;

        if (invoice.balanceDue === 0) {
            invoice.status = "paid";
        } else {
            invoice.status = "partially_paid";
        }

        await invoice.save({ session });

        await session.commitTransaction();

        return res.status(201).json(
            new ApiResponse(
                201,
                {
                    payment,
                    invoice: {
                        amountPaid: invoice.amountPaid,
                        balanceDue: invoice.balanceDue,
                        status: invoice.status,
                    },
                },
                "Payment recorded successfully"
            )
        );
    } catch (error) {
        await session.abortTransaction();
        throw error;
    } finally {
        session.endSession();
    }
});

const getPayments = asyncHandler(async (req, res) => {
    const { organizationId, invoiceId } = req.params;

    const invoice = await Invoice.findOne({
        _id: invoiceId,
        organization: organizationId,
    });

    if (!invoice) {
        throw new ApiError(404, "Invoice not found");
    }

    const payments = await Payment.find({
        organization: organizationId,
        invoice: invoiceId,
    })
        .populate("receivedBy", "name email")
        .sort({ paymentDate: -1 })
        .lean();

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                invoice: {
                    _id: invoice._id,
                    invoiceNumber: invoice.invoiceNumber,
                    totalAmount: invoice.totalAmount,
                    amountPaid: invoice.amountPaid,
                    balanceDue: invoice.balanceDue,
                    status: invoice.status,
                },
                payments,
            },
            "Payments fetched successfully"
        )
    );
});

const getPayment = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const updatePayment = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const deletePayment = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

export { createPayment, getPayments, getPayment, updatePayment, deletePayment };
