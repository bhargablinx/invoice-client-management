import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Membership from "../models/membership.model.js";
import Organization from "../models/organization.model.js";
import Client from "../models/client.model.js";

const createClient = asyncHandler(async (req, res) => {
    const { organizationId, name, email, phone, companyName, address, taxId } =
        req.body;

    if (!organizationId) {
        throw new ApiError(400, "Organization ID is required");
    }

    if (!name?.trim()) {
        throw new ApiError(400, "Client name is required");
    }

    const organization = await Organization.findById(organizationId);

    if (!organization) {
        throw new ApiError(404, "Organization not found");
    }

    const membership = await Membership.findOne({
        organization: organizationId,
        user: req.user._id,
    });

    if (!membership) {
        throw new ApiError(403, "You are not a member of this organization");
    }

    const existingClient = await Client.findOne({
        organization: organizationId,
        email: email?.toLowerCase(),
    });

    if (email && existingClient) {
        throw new ApiError(409, "A client with this email already exists");
    }

    const client = await Client.create({
        organization: organizationId,
        name: name.trim(),
        email: email?.trim().toLowerCase(),
        phone: phone?.trim(),
        companyName: companyName?.trim(),
        address: address?.trim(),
        taxId: taxId?.trim(),
        createdBy: req.user._id,
    });

    return res
        .status(201)
        .json(new ApiResponse(201, client, "Client created successfully"));
});

const getClients = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const getClient = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const updateClient = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const deleteClient = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const getClientInvoices = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

const getClientStats = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

export {
    createClient,
    getClients,
    getClient,
    updateClient,
    deleteClient,
    getClientInvoices,
    getClientStats,
};
