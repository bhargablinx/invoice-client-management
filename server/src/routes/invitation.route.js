import { Router } from "express";
import { acceptInvitation } from "../controllers/invitation.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/:token/accept").get(verifyJWT, acceptInvitation);

export default router;
