import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Invoice from "../models/invoice.model.js";
import Payment from "../models/payment.model.js";
import mongoose from "mongoose";
import recalculateInvoicePaymentStatus from "../utils/recalculatePayment.js";

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

        const updatedInvoice = await recalculateInvoicePaymentStatus(
            invoiceId,
            session
        );

        await session.commitTransaction();

        return res.status(201).json(
            new ApiResponse(
                201,
                {
                    payment,
                    invoice: {
                        _id: updatedInvoice._id,
                        status: updatedInvoice.status,
                        amountPaid: updatedInvoice.amountPaid,
                        balanceDue: updatedInvoice.balanceDue,
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
    const { organizationId, invoiceId, paymentId } = req.params;

    const payment = await Payment.findOne({
        _id: paymentId,
        organization: organizationId,
        invoice: invoiceId,
    })
        .populate("receivedBy", "name email")
        .populate({
            path: "invoice",
            select: "invoiceNumber totalAmount amountPaid balanceDue status",
        })
        .lean();

    if (!payment) {
        throw new ApiError(404, "Payment not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, payment, "Payment fetched successfully"));
});

const updatePayment = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const deletePayment = asyncHandler(async (req, res) => {
    const { organizationId, invoiceId, paymentId } = req.params;

    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        const payment = await Payment.findOne({
            _id: paymentId,
            organization: organizationId,
            invoice: invoiceId,
        }).session(session);

        if (!payment) {
            throw new ApiError(404, "Payment not found");
        }

        await Payment.deleteOne(
            {
                _id: paymentId,
            },
            { session }
        );

        const updatedInvoice = await recalculateInvoicePaymentStatus(
            invoiceId,
            session
        );

        await session.commitTransaction();

        return res.status(200).json(
            new ApiResponse(
                200,
                {
                    invoice: {
                        _id: updatedInvoice._id,
                        status: updatedInvoice.status,
                        amountPaid: updatedInvoice.amountPaid,
                        balanceDue: updatedInvoice.balanceDue,
                    },
                },
                "Payment deleted successfully"
            )
        );
    } catch (error) {
        await session.abortTransaction();
        throw error;
    } finally {
        session.endSession();
    }
});

export { createPayment, getPayments, getPayment, updatePayment, deletePayment };
