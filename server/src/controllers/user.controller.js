import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";

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

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    res.status(200).json(
        new ApiResponse(200, createdUser, "User registered successfully!")
    );
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    const user = await User.findOne({ email: email.toLowerCase() });

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
        { new: true }
    );

    res.status(200)
        .clearCookie("accessToken", cookieOption)
        .clearCookie("refreshToken", cookieOption)
        .json(new ApiResponse(200, "User logged out!!", req.user));
});

export { signup, login, logout };
