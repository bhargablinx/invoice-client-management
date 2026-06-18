import mongoose, { Schema } from "mongoose";

const invoiceSchema = new Schema({
    organization: {
        type: Schema.Types.ObjectId,
        ref: "Organization",
        required: true,
        index: true,
    },

    client: {
        type: Schema.Types.ObjectId,
        ref: "Client",
        required: true,
    },

    invoiceNumber: {
        type: String,
        required: true,
    },

    issueDate: {
        type: Date,
        required: true,
        default: Date.now,
    },

    dueDate: {
        type: Date,
        required: true,
    },

    status: {
        type: String,
        enum: [
            "draft",
            "sent",
            "viewed",
            "partially_paid",
            "paid",
            "overdue",
            "cancelled",
        ],
        default: "draft",
    },

    currency: {
        type: String,
        default: "INR",
    },

    subtotal: {
        type: Number,
        required: true,
        min: 0,
    },

    taxAmount: {
        type: Number,
        default: 0,
        min: 0,
    },

    discountAmount: {
        type: Number,
        default: 0,
        min: 0,
    },

    totalAmount: {
        type: Number,
        required: true,
        min: 0,
    },

    amountPaid: {
        type: Number,
        default: 0,
        min: 0,
    },

    balanceDue: {
        type: Number,
        required: true,
        min: 0,
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
