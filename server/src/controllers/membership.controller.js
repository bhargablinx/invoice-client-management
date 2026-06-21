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
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const removeMember = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

export { getMembers, changeMemberRole, removeMember };
