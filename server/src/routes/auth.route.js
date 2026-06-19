import { Router } from "express";
import {
    signup,
    login,
    logout,
    changePassword,
    verifyMail,
    resendMail,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/signup").post(upload.single("avatar"), signup);
router.route("/login").post(login);
router.route("/logout").post(verifyJWT, logout);
router.route("/change-password").post(verifyJWT, changePassword);
router.route("/verify-email/:token").get(verifyMail);
router.route("/resend-email").post(resendMail);

export default router;
