import mongoose, { Schema } from "mongoose";

const membershipSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        organization: {
            type: Schema.Types.ObjectId,
            ref: "Organization",
            required: true,
        },

        role: {
            type: String,
            enum: ["owner", "admin", "member"],
            default: "member",
            required: true,
        },

        status: {
            type: String,
            enum: ["active", "invited", "suspended"],
            default: "active",
        },

        joinedAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

membershipSchema.index({ user: 1, organization: 1 }, { unique: true });

const Membership = mongoose.model("Membership", membershipSchema);

export default Membership;
