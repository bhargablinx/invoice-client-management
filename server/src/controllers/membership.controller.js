import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Membership from "../models/membership.model.js";
import mongoose from "mongoose";

const getMembers = asyncHandler(async (req, res) => {
    const { organizationId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(organizationId)) {
        throw new ApiError(400, "Invalid organization id");
    }

    const members = await Membership.find({
        organization: organizationId,
        status: "active",
    })
        .populate("user", "name email avatar")
        .sort({ createdAt: 1 });

    res.status(200).json(
        new ApiResponse(
            200,
            members,
            "All member of the organization fetched!!"
        )
    );
});

const changeMemberRole = asyncHandler(async (req, res) => {
    const { organizationId, userId } = req.params;
    const { role } = req.body;

    if (!role) throw new ApiError(400, "Role must be provided");

    const allowedRoles = ["admin", "member"];

    if (!allowedRoles.includes(role)) {
        throw new ApiError(400, "Invalid role");
    }

    if (
        !mongoose.Types.ObjectId.isValid(organizationId) ||
        !mongoose.Types.ObjectId.isValid(userId)
    ) {
        throw new ApiError(400, "Invalid organization or user id");
    }

    const membership = await Membership.findOne({
        organization: organizationId,
        user: userId,
    }).populate("user", "name email avatar");

    if (!membership) {
        throw new ApiError(404, "Membership not found");
    }

    // Prevent changing owner's role
    if (membership.role === "owner")
        throw new ApiError(400, "Owner role cannot be modified");

    if (membership.role === role)
        throw new ApiError(400, `User is already a ${role}`);

    membership.role = role;
    await membership.save();

    res.status(200).json(
        new ApiResponse(200, membership, "Member role updated successfully")
    );
});

const removeMember = asyncHandler(async (req, res) => {
    const { organizationId, userId } = req.params;

    if (
        !mongoose.Types.ObjectId.isValid(organizationId) ||
        !mongoose.Types.ObjectId.isValid(userId)
    ) {
        throw new ApiError(400, "Invalid organization or user id");
    }

    const membership = await Membership.findOne({
        organization: organizationId,
        user: userId,
    });

    if (!membership) {
        throw new ApiError(404, "Membership not found");
    }

    // Prevent removing the owner
    if (membership.role === "owner") {
        throw new ApiError(400, "Organization owner cannot be removed");
    }

    membership.status = "suspended";
    await membership.save();

    res.status(200).json(
        new ApiResponse(200, null, "Member suspended / removed successfully")
    );
});

export { getMembers, changeMemberRole, removeMember };
