import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";
import crypto from "crypto";

const cookieOption = {
    httpOnly: true,
    secure: true,
};

const generateToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        console.log("Server error: Generating token", error);
        throw error;
    }
};

const signup = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
        throw new ApiError(400, "Required Filed is Missing!");

    if (!req.file) throw new ApiError(400, "Avatar is required!");

    const existingUser = await User.findOne({ email: email });

    if (existingUser)
        throw new ApiError(400, "User already exists with this email!");

    const avatarPath = req.file.path;
    const cloudinaryResponse = await uploadToCloudinary(avatarPath);
    if (!cloudinaryResponse) {
        throw new ApiError(500, "Failed to upload avatar");
    }
    const avatar = cloudinaryResponse.url;

    const user = await User.create({
        name,
        email,
        password,
        avatar,
    });

    const verificationToken = user.generateEmailToken();
    await user.save({ validateBeforeSave: false });

    res.status(200).json(
        new ApiResponse(
            200,
            verificationToken,
            "User registered successfully and verification url sent to your email!"
        )
    );
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user.isEmailVerified)
        throw new ApiError(403, "Please verify your email before logging in");

    if (!user) throw new ApiError(401, "Invalid Email or Password!!");

    const isPassValid = await user.isPasswordCorrect(password); // user not User to access its methods
    if (!isPassValid) throw new ApiError(401, "Invalid email or password!!");

    const { accessToken, refreshToken } = await generateToken(user._id);

    const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    res.status(200)
        .cookie("accessToken", accessToken, cookieOption)
        .cookie("refreshToken", refreshToken, cookieOption)
        .json(new ApiResponse(200, loggedInUser, "Login successful"));
});

const logout = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        { $set: { refreshToken: undefined } },
        { returnDocument: "after" }
    );

    res.status(200)
        .clearCookie("accessToken", cookieOption)
        .clearCookie("refreshToken", cookieOption)
        .json(new ApiResponse(200, "User logged out!!", req.user));
});

const changePassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
        throw new ApiError(400, "All fields are required");
    }

    const user = await User.findById(req.user._id);

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Incorrect current password");
    }

    user.password = newPassword;

    await user.save();

    res.status(200).json(
        new ApiResponse(200, null, "Password changed successfully")
    );
});

const resendMail = asyncHandler(async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) throw new ApiError(400, null, "Invalid Email");

    const newVerificationToken = user.generateEmailToken();
    await user.save({ validateBeforeSave: false });

    res.status(200).json(
        new ApiResponse(
            200,
            newVerificationToken,
            "New Verification Mail Sent!!"
        )
    );
});

const verifyMail = asyncHandler(async (req, res) => {
    const hashedToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        emailVerificationToken: hashedToken,
        emailVerificationTokenExpiry: {
            $gt: Date.now(),
        },
    });

    if (!user) {
        throw new ApiError(400, "Invalid or expired verification token");
    }

    user.isEmailVerified = true;

    user.emailVerificationToken = undefined;
    user.emailVerificationTokenExpiry = undefined;

    await user.save();

    res.status(200).json(new ApiResponse(200, user, "Email Verified!!"));
});

export { signup, login, logout, changePassword, resendMail, verifyMail };
