import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import healthRouter from "./routes/healthCheck.route.js";

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

export default app;
