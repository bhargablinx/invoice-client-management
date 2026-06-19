import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";
import crypto from "crypto";

const resendMail = asyncHandler(async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) throw new ApiError(400, null, "Invalid Email");

    const unHashedEmailToken = crypto.randomBytes(32).toString("hex");
    const hashedEmailToken = crypto
        .createHash("sha256")
        .update(unHashedEmailToken)
        .digest("hex");
    user.emailVerificationToken = hashedEmailToken;
    user.emailVerificationTokenExpiry = Date.now() + 1000 * 60 * 60; // 1 hour

    await user.save({ validateBeforeSave: false });

    res.status(200).json(
        new ApiResponse(200, unHashedEmailToken, "New Verification Mail Sent!!")
    );
});

export { resendMail };
