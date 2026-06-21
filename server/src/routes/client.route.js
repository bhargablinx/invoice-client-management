import { Router } from "express";
import {
    createClient,
    deleteClient,
    getClient,
    getClientInvoices,
    getClients,
    getClientStats,
    updateClient,
} from "../controllers/client.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(verifyJWT, createClient);
router.route("/").get(verifyJWT, getClients);
router.route("/:clientId").get(verifyJWT, getClient);
router.route("/:clientId").patch(verifyJWT, updateClient);
router.route("/:clientId").delete(verifyJWT, deleteClient);

router.route("/:clientId/invoices").get(verifyJWT, getClientInvoices);
router.route("/:clientId/stats").get(verifyJWT, getClientStats);

export default router;
