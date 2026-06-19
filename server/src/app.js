import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import healthRouter from "./routes/healthCheck.route.js";
import userRouter from "./routes/auth.route.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";
import verifyMailRouter from "./routes/verifyMail.route.js";
import resendMailRouter from "./routes/resendMail.route.js";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
    })
);
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/api/v1/healthcheck", healthRouter);
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/verify-email", verifyMailRouter);
app.use("/api/v1/resend-email", resendMailRouter);

app.use(errorHandler);

export default app;
