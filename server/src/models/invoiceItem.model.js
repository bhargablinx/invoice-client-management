import mongoose, { Schema } from "mongoose";

const invoiceItemSchema = new Schema({}, { timestamps: true });

const Invoiceitem = mongoose.model("Invoiceitem", invoiceItemSchema);

export default Invoiceitem;
