import { Router } from "express";
import {
    acceptInvitation,
    rejectInvitation,
} from "../controllers/invitation.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/:token/accept").post(verifyJWT, acceptInvitation);
router.route("/:token/reject").post(verifyJWT, rejectInvitation);

export default router;
