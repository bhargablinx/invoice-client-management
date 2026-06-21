import { Router } from "express";
import {
    createOrganization,
    getOrganization,
    updateOrganization,
    deleteOrganization,
} from "../controllers/organization.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
    changeMemberRole,
    getMembers,
    removeMember,
} from "../controllers/membership.controller.js";
import { inviteUser } from "../controllers/invitation.controller.js";

const router = Router();

router.route("/").post(upload.single("logo"), verifyJWT, createOrganization);
router.route("/:organizationId").get(verifyJWT, getOrganization);
router.route("/:organizationId").patch(verifyJWT, updateOrganization);
router.route("/:organizationId").delete(verifyJWT, deleteOrganization);

router.route("/:organizationId/members").get(verifyJWT, getMembers);
router
    .route("/:organizationId/members/:userId")
    .patch(verifyJWT, changeMemberRole);
router
    .route("/:organizationId/members/:userId")
    .delete(verifyJWT, removeMember);

router.route("/:organizationId/invitation").post(verifyJWT, inviteUser);

export default router;
