import mongoose, { Schema } from "mongoose";

const invitationSchema = new Schema({
    organization: {
        type: Schema.Types.ObjectId,
        ref: "Organization",
        required: true,
        index: true,
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },

    role: {
        type: String,
        enum: ["admin", "member"],
        default: "member",
        required: true,
    },

    status: {
        type: String,
        enum: ["pending", "accepted", "expired", "revoked"],
        default: "pending",
    },

    invitedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    expiresAt: {
        type: Date,
        required: true,
    },

    acceptedAt: {
        type: Date,
        default: null,
    },
});

const Invitation = mongoose.model("Invitation", invitationSchema);

export default Invitation;
