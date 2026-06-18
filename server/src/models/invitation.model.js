import mongoose, { Schema } from "mongoose";

const invitationSchema = new Schema({}, { timestamps: true });

const Invitation = mongoose.model("Invitation", invitationSchema);

export default Invitation;
