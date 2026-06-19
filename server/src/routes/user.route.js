import { Router } from "express";
import { signup, login } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/signup").post(upload.single("avatar"), signup);
router.route("/login").post(login);

export default router;
