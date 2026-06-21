import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import healthRouter from "./routes/healthCheck.route.js";
import authRouter from "./routes/auth.route.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";
import organizationRouter from "./routes/organization.route.js";
import invitationRouter from "./routes/invitation.route.js";
import clientRouter from "./routes/client.route.js";

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
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/organizations", organizationRouter);
app.use("/api/v1/invitations", invitationRouter);
app.use("/api/v1/clients", clientRouter);

app.use(errorHandler);

export default app;
