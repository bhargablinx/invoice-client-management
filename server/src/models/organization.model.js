import mongoose, { Schema } from "mongoose";

const organizationSchema = new Schema({}, { timestamps: true });

const Organization = mongoose.model("Organization", organizationSchema);

export default Organization;
