import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import Membership from "../models/membership.model.js";

const verifyJWT = asyncHandler(async (req, res, next) => {
    const token =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");

    if (!token) throw new ApiError(401, "Unauthorized (token not found)!");

    const decodedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedData._id).select(
        "-password -refreshToken"
    );
    if (!user || user.isDeleted)
        throw new ApiError(403, "Invalid access token");

    req.user = user;
    next();
});

const authorizeRoles = (...allowedRoles) => {
    return asyncHandler(async (req, res, next) => {
        const { organizationId } = req.params;

        const membership = await Membership.findOne({
            user: req.user._id,
            organization: organizationId,
        });

        if (!membership) {
            throw new ApiError(
                403,
                "You are not a member of this organization"
            );
        }

        if (!allowedRoles.includes(membership.role)) {
            throw new ApiError(
                403,
                "You are not authorized to perform this action"
            );
        }

        req.membership = membership;

        next();
    });
};

export { verifyJWT, authorizeRoles };
