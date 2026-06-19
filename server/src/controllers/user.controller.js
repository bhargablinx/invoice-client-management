import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";

const signup = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const avatarPath = req.file.path;

    if (!name || !email || !password)
        throw new ApiError(400, "Required Filed is Missing!");

    const existingUser = await User.findOne({ email: email });

    if (existingUser)
        throw new ApiError(400, "User already exists with this email!");

    const cloudinaryResponse = await uploadToCloudinary(avatarPath);
    const avatar = cloudinaryResponse.url;

    const user = await User.create({
        name,
        email,
        password,
        avatar,
    });

    res.status(200).json(
        new ApiResponse(200, user, "User registered successfully!")
    );
});

export { signup };
