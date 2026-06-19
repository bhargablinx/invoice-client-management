import { Router } from "express";
import { resendMail } from "../controllers/resendMail.controller.js";

const router = Router();

router.route("/").post(resendMail);

export default router;
