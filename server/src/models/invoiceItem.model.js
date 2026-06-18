import mongoose, { Schema } from "mongoose";

const invoiceItemSchema = new Schema({
    invoice: {
        type: Schema.Types.ObjectId,
        ref: "Invoice",
        required: true,
        index: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500,
    },

    quantity: {
        type: Number,
        required: true,
        min: 1,
    },

    unitPrice: {
        type: Number,
        required: true,
        min: 0,
    },

    taxRate: {
        type: Number,
        default: 0,
        min: 0,
    },

    discountAmount: {
        type: Number,
        default: 0,
        min: 0,
    },

    lineTotal: {
        type: Number,
        required: true,
        min: 0,
    },
});

const Invoiceitem = mongoose.model("Invoiceitem", invoiceItemSchema);

export default Invoiceitem;
