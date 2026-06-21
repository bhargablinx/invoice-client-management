import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

const inviteUser = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const acceptInvitation = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

export { inviteUser, acceptInvitation };
