import { Router } from "express";
import {
    getMonthlyRevenue,
    getOverview,
    getRecentInvoices,
    getTopClients,
} from "../controllers/dashboard.controller.js";
import { authorizeRoles, verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/:organizationId/overview").get(verifyJWT, getOverview);
router
    .route("/:organizationId/monthly-revenue")
    .get(verifyJWT, getMonthlyRevenue);
router
    .route("/:organizationId/recent-invoices")
    .get(verifyJWT, getRecentInvoices);
router.route("/:organizationId/top-clients").get(verifyJWT, getTopClients);

export default router;
