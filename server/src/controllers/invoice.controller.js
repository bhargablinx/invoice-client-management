import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Client from "../models/client.model.js";
import Invoice from "../models/invoice.model.js";
import InvoiceItem from "../models/invoiceItem.model.js";

const createInvoice = asyncHandler(async (req, res) => {
    const { organizationId } = req.params;

    const {
        clientId,
        dueDate,
        currency = "INR",
        taxAmount = 0,
        discountAmount = 0,
        items,
    } = req.body;

    if (!clientId) {
        throw new ApiError(400, "Client is required");
    }

    if (!dueDate) {
        throw new ApiError(400, "Due date is required");
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
        throw new ApiError(400, "At least one invoice item is required");
    }

    const client = await Client.findOne({
        _id: clientId,
        organization: organizationId,
        isActive: true,
    });

    if (!client) {
        throw new ApiError(404, "Client not found");
    }

    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        // Calculate subtotal
        let subtotal = 0;

        const processedItems = items.map((item) => {
            const quantity = Number(item.quantity);
            const unitPrice = Number(item.unitPrice);
            const itemDiscount = Number(item.discountAmount || 0);

            const lineTotal = quantity * unitPrice - itemDiscount;

            subtotal += lineTotal;

            return {
                description: item.description,
                quantity,
                unitPrice,
                taxRate: item.taxRate || 0,
                discountAmount: itemDiscount,
                lineTotal,
            };
        });

        const totalAmount =
            subtotal + Number(taxAmount) - Number(discountAmount);

        // Temporary invoice number generation
        const invoiceCount = await Invoice.countDocuments({
            organization: organizationId,
        });

        const invoiceNumber = `INV-${String(invoiceCount + 1).padStart(
            4,
            "0"
        )}`;

        const [invoice] = await Invoice.create(
            [
                {
                    organization: organizationId,
                    client: clientId,
                    invoiceNumber,
                    dueDate,
                    currency,
                    subtotal,
                    taxAmount,
                    discountAmount,
                    totalAmount,
                    amountPaid: 0,
                    balanceDue: totalAmount,
                    createdBy: req.user._id,
                },
            ],
            { session }
        );

        const invoiceItems = processedItems.map((item) => ({
            ...item,
            invoice: invoice._id,
        }));

        await InvoiceItem.insertMany(invoiceItems, {
            session,
        });

        await session.commitTransaction();

        return res
            .status(201)
            .json(
                new ApiResponse(201, invoice, "Invoice created successfully")
            );
    } catch (error) {
        await session.abortTransaction();
        throw error;
    } finally {
        session.endSession();
    }
});

const getInvoices = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const getInvoices = asyncHandler(async (req, res) => {
    const { organizationId } = req.params;

    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.max(1, Number(req.query.limit) || 10);
    const skip = (page - 1) * limit;

    const { status, clientId, search } = req.query;

    const filter = {
        organization: organizationId,
    };

    if (status) {
        filter.status = status;
    }

    if (clientId) {
        filter.client = clientId;
    }

    if (search) {
        filter.invoiceNumber = {
            $regex: search,
            $options: "i",
        };
    }

    const [invoices, totalInvoices] = await Promise.all([
        Invoice.find(filter)
            .populate("client", "name companyName email")
            .populate("createdBy", "name email")
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean(),

        Invoice.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(totalInvoices / limit);

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                invoices,
                pagination: {
                    page,
                    limit,
                    totalInvoices,
                    totalPages,
                },
            },
            "Invoices fetched successfully"
        )
    );
});

const updateInvoice = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const deleteInvoice = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const updateInvoiceStatus = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const generateInvoicePdf = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const sendInvoice = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const duplicateInvoice = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const downloadInvoice = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

export {
    createInvoice,
    getInvoices,
    getInvoice,
    updateInvoice,
    deleteInvoice,
    updateInvoiceStatus,
    generateInvoicePdf,
    sendInvoice,
    duplicateInvoice,
    downloadInvoice,
};
