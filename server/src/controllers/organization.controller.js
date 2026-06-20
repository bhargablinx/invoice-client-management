import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Organization from "../models/organization.model.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";
import { generateSlug } from "../utils/generateSlug.js";
import mongoose from "mongoose";

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
    const { organizationId } = req.params;

    const organization = await Organization.findById(organizationId).populate(
        "owner",
        "name email avatar"
    );

    if (!organization) throw new ApiError(404, "Organization not found!");

    res.status(200).json(
        new ApiResponse(200, organization, "Organization fetched successfully!")
    );
});

const updateOrganization = asyncHandler(async (req, res) => {
    const { organizationId } = req.params;

    const organization = await Organization.findById(
        new mongoose.Types.ObjectId(organizationId)
    );

    if (!organization) throw new ApiError(404, "Organization not found!");

    if (organization.owner.toString() !== req.user._id.toString())
        throw new ApiError(
            403,
            "You are not authorized to update this organization!"
        );

    const { name, email, phone, website, address, taxId, currency, timezone } =
        req.body;

    if (name) organization.name = name;
    if (email !== undefined) organization.email = email;
    if (phone !== undefined) organization.phone = phone;
    if (website !== undefined) organization.website = website;
    if (address !== undefined) organization.address = address;
    if (taxId !== undefined) organization.taxId = taxId;
    if (currency) organization.currency = currency;
    if (timezone) organization.timezone = timezone;

    if (req.file) {
        const cloudinaryResponse = await uploadToCloudinary(req.file.path);

        if (!cloudinaryResponse)
            throw new ApiError(500, "Failed to upload company logo!");

        organization.logo = cloudinaryResponse.url;
    }

    await organization.save();

    res.status(200).json(
        new ApiResponse(200, organization, "Organization updated successfully!")
    );
});

const deleteOrganization = asyncHandler(async (req, res) => {
    const { organizationId } = req.params;

    const organization = await Organization.findById(organizationId);

    if (!organization) throw new ApiError(404, "Organization not found!");

    if (organization.owner.toString() !== req.user._id.toString())
        throw new ApiError(
            403,
            "You are not authorized to delete this organization!"
        );

    organization.isActive = false;

    await organization.save();

    res.status(200).json(
        new ApiResponse(200, null, "Organization deleted successfully!")
    );
});

export {
    createOrganization,
    getOrganization,
    updateOrganization,
    deleteOrganization,
};
