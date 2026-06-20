import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Organization from "../models/organization.model.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";
import { generateSlug } from "../utils/generateSlug.js";

const createOrganization = asyncHandler(async (req, res) => {
    const { name, email, phone, website, address, taxId, currency, timezone } =
        req.body;

    let logo = "";

    if (website) {
        try {
            new URL(website);
        } catch {
            throw new ApiError(400, "Invalid website URL");
        }
    }

    if (!name) throw new ApiError(400, "Organization name is required!");

    const slug = generateSlug(name);

    if (req.file) {
        const logoPath = req.file.path;
        const cloudinaryResponse = await uploadToCloudinary(logoPath);
        if (!cloudinaryResponse) {
            throw new ApiError(500, "Failed to upload company logo");
        }
        logo = cloudinaryResponse.url;
    }

    const organization = await Organization.create({
        name,
        slug,
        logo,
        email,
        phone,
        website,
        address,
        taxId,
        currency,
        timezone,
        owner: req.user._id,
    });

    const createdOrganization = await Organization.findById(
        organization._id
    ).populate("owner", "name email avatar");

    res.status(201).json(
        new ApiResponse(
            201,
            createdOrganization,
            "Organization created successfully!"
        )
    );
});

const getOrganization = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const updateOrganization = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const deleteOrganization = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

export {
    createOrganization,
    getOrganization,
    updateOrganization,
    deleteOrganization,
};
