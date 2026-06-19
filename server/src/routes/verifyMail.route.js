import { Router } from "express";
import { verifyMail } from "../controllers/verifyMail.controller.js";

const router = Router();

router.route("/:token").get(verifyMail);

export default router;
