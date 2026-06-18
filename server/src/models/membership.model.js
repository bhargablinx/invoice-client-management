import mongoose, { Schema } from "mongoose";

const membershipSchema = new Schema({}, { timestamps: true });

const Membership = mongoose.model("Membership", membershipSchema);

export default Membership;
