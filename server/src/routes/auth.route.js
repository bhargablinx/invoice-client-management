import { Router } from "express";
import {
    signup,
    login,
    logout,
    changePassword,
    forgotPassword,
    verifyMail,
    resendMail,
    resetPassword,
    getCurrentUser,
    refreshAccessToken,
    deleteUsr,
} from "../controllers/auth.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/signup").post(upload.single("avatar"), signup);
router.route("/login").post(login);
router.route("/logout").post(verifyJWT, logout);
router.route("/change-password").post(verifyJWT, changePassword);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:token").post(resetPassword);
router.route("/verify-email/:token").get(verifyMail);
router.route("/resend-email").post(resendMail);
router.route("/me").get(verifyJWT, getCurrentUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/delete").delete(verifyJWT, deleteUsr);

export default router;
