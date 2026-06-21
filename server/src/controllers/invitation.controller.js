import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Invitation from "../models/invitation.model.js";
import User from "../models/user.model.js";
import { invitationTemplate } from "../utils/emailTemplate.js";
import { sendMail } from "../utils/sendMail.js";

const inviteUser = asyncHandler(async (req, res) => {
    const { organizationId } = req.params;
    const { email, role } = req.body;

    if (!email || !role) throw new ApiError(400, "Email or role is missing");

    const allowedRoles = ["admin", "member"];

    if (!allowedRoles.includes(role)) {
        throw new ApiError(400, "Invalid role");
    }

    const organization = await Organization.findById(organizationId);
    if (!organization) throw new ApiError(404, "Organization not found!");

    const normalizedEmail = email.trim().toLowerCase();

    const userToInvite = await User.findOne({
        email: normalizedEmail,
    });
    if (!userToInvite) throw new ApiError(404, "User doesn't exists");

    if (userToInvite._id.equals(req.user._id))
        throw new ApiError(400, "You cannot invite yourself");

    const existingMembership = await Membership.findOne({
        user: userToInvite._id,
        organization: organizationId,
    });

    if (existingMembership) {
        throw new ApiError(
            400,
            "User is already a member of this organization"
        );
    }

    const existingInvitation = await Invitation.findOne({
        user: userToInvite._id,
        organization: organizationId,
        status: "pending",
    });

    if (existingInvitation) {
        throw new ApiError(400, "User already has a pending invitation");
    }

    const invitation = await Invitation.create({
        user: userToInvite._id,
        organization: organizationId,
        role,
        invitedBy: req.user._id,
    });

    const invitationToken = invitation.generateToken();
    await invitation.save({ validateBeforeSave: false });

    // Sending Mail
    // const invitationUrl = `${process.env.CLIENT_URL}/invitations/${invitationToken}`;
    // try {
    //     await sendMail(
    //         userToInvite.email,
    //         `Invitation to join ${organization.name}`,
    //         invitationTemplate(
    //             organization.name,
    //             invitation.role,
    //             invitationUrl
    //         )
    //     );
    // } catch (error) {
    //     await Invitation.findByIdAndDelete(
    //         invitation._id
    //     );

    //     throw new ApiError(
    //         500,
    //         "Invitation email could not be sent"
    //     );
    // }

    res.status(201).json(
        new ApiResponse(
            201,
            invitationToken,
            "Mail is sent and user is invited!!"
        )
    );
});

const acceptInvitation = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, null, "Server is running!!"));
});

export { inviteUser, acceptInvitation };
