import { Router } from "express";
import {
    createOrganization,
    getOrganization,
    updateOrganization,
    deleteOrganization,
} from "../controllers/organization.controller.js";
import { verifyJWT, authorizeRoles } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
    changeMemberRole,
    getMembers,
    removeMember,
} from "../controllers/membership.controller.js";
import {
    getInvitations,
    inviteUser,
} from "../controllers/invitation.controller.js";

const router = Router();

// Any authorized user can create
router.route("/").post(upload.single("logo"), verifyJWT, createOrganization);

// User for that organization can get info
router
    .route("/:organizationId")
    .get(
        verifyJWT,
        authorizeRoles("owner", "admin", "member"),
        getOrganization
    );

// Only owner can update organization info and delete
router
    .route("/:organizationId")
    .patch(verifyJWT, authorizeRoles("owner"), updateOrganization);
router
    .route("/:organizationId")
    .delete(verifyJWT, authorizeRoles("owner"), deleteOrganization);

// Any org member can fetch members
router
    .route("/:organizationId/members")
    .get(verifyJWT, authorizeRoles("owner", "admin", "member"), getMembers);

// Only owner can
router
    .route("/:organizationId/members/:userId")
    .patch(verifyJWT, authorizeRoles("owner"), changeMemberRole);
router
    .route("/:organizationId/members/:userId")
    .delete(verifyJWT, authorizeRoles("owner"), removeMember);

// Owner & Admin can invite members
router
    .route("/:organizationId/invitations")
    .post(verifyJWT, authorizeRoles("owner", "admin"), inviteUser);
router
    .route("/:organizationId/invitations")
    .get(verifyJWT, authorizeRoles("owner", "admin"), getInvitations);

export default router;
