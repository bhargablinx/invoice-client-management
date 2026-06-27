import { Router } from "express";
import {
    createOrganization,
    getOrganization,
    getMyOrganizations,
    updateOrganization,
    deleteOrganization,
} from "../controllers/organization.controller.js";
import { verifyJWT, authorizeRoles } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
    changeMemberRole,
    getMembers,
    removeMember,
} from "../controllers/membership.controller.js";
import {
    getInvitations,
    inviteUser,
} from "../controllers/invitation.controller.js";
import {
    createClient,
    deleteClient,
    getClient,
    getClientInvoices,
    getClients,
    getClientStats,
    updateClient,
} from "../controllers/client.controller.js";
import {
    createInvoice,
    deleteInvoice,
    generateInvoicePdf,
    getInvoice,
    getInvoices,
    sendInvoice,
    updateInvoice,
    updateInvoiceStatus,
} from "../controllers/invoice.controller.js";
import {
    createPayment,
    getPayments,
    getPayment,
    updatePayment,
    deletePayment,
} from "../controllers/payment.controller.js";
import {
    createService,
    getServices,
    getService,
    updateService,
    deleteService,
} from "../controllers/serviceCatalog.controller.js";

const router = Router();

// Any authorized user can create
router.route("/").post(upload.single("logo"), verifyJWT, createOrganization);
router
    .route("/")
    .get(verifyJWT, authorizeRoles("owner", "admin", "member"), getMyOrganizations);

// User for that organization can get info
router
    .route("/:organizationId")
    .get(
        verifyJWT,
        authorizeRoles("owner", "admin", "member"),
        getOrganization
    );

// Only owner can update organization info and delete
router
    .route("/:organizationId")
    .patch(verifyJWT, authorizeRoles("owner"), updateOrganization);
router
    .route("/:organizationId")
    .delete(verifyJWT, authorizeRoles("owner"), deleteOrganization);

// Any org member can fetch members
router
    .route("/:organizationId/members")
    .get(verifyJWT, authorizeRoles("owner", "admin", "member"), getMembers);

// Only owner can
router
    .route("/:organizationId/members/:userId")
    .patch(verifyJWT, authorizeRoles("owner"), changeMemberRole);
router
    .route("/:organizationId/members/:userId")
    .delete(verifyJWT, authorizeRoles("owner"), removeMember);

// Owner & Admin can invite members
router
    .route("/:organizationId/invitations")
    .post(verifyJWT, authorizeRoles("owner", "admin"), inviteUser);
router
    .route("/:organizationId/invitations")
    .get(verifyJWT, authorizeRoles("owner", "admin"), getInvitations);

// CLIENTS MANAGEMENT
router.route("/:organizationId/clients").post(verifyJWT, createClient);
router.route("/:organizationId/clients").get(verifyJWT, getClients);
router.route("/:organizationId/clients/:clientId").get(verifyJWT, getClient);
router
    .route("/:organizationId/clients/:clientId")
    .patch(verifyJWT, updateClient);
router
    .route("/:organizationId/clients/:clientId")
    .delete(verifyJWT, authorizeRoles("owner", "admin"), deleteClient);

router
    .route("/:organizationId/clients/:clientId/invoices")
    .get(verifyJWT, getClientInvoices);

router
    .route("/:organizationId/clients/:clientId/stats")
    .get(verifyJWT, getClientStats);

// INVOICE MANAGEMENT
router
    .route("/:organizationId/invoices")
    .post(verifyJWT, authorizeRoles("owner", "admin", "member"), createInvoice);

router
    .route("/:organizationId/invoices")
    .get(verifyJWT, authorizeRoles("owner", "admin", "member"), getInvoices);

router
    .route("/:organizationId/invoices/:invoiceId")
    .get(verifyJWT, authorizeRoles("owner", "admin", "member"), getInvoice);

router
    .route("/:organizationId/invoices/:invoiceId")
    .patch(verifyJWT, authorizeRoles("owner", "admin"), updateInvoice);

router
    .route("/:organizationId/invoices/:invoiceId")
    .delete(verifyJWT, authorizeRoles("owner", "admin"), deleteInvoice);

router
    .route("/:organizationId/invoices/:invoiceId/status")
    .patch(verifyJWT, authorizeRoles("owner", "admin"), updateInvoiceStatus);

router
    .route("/:organizationId/invoices/:invoiceId/pdf")
    .get(
        verifyJWT,
        authorizeRoles("owner", "admin", "member"),
        generateInvoicePdf
    );

router
    .route("/:organizationId/invoices/:invoiceId/send")
    .post(verifyJWT, authorizeRoles("owner", "admin", "member"), sendInvoice);

// PAYMENT MANAGEMENT
router
    .route("/:organizationId/invoices/:invoiceId/payments")
    .post(verifyJWT, authorizeRoles("owner", "admin"), createPayment);

router
    .route("/:organizationId/invoices/:invoiceId/payments")
    .get(verifyJWT, authorizeRoles("owner", "admin", "member"), getPayments);

router
    .route("/:organizationId/invoices/:invoiceId/payments/:paymentId")
    .get(verifyJWT, authorizeRoles("owner", "admin", "member"), getPayment);

// router
//     .route("/:organizationId/invoices/:invoiceId/payments/:paymentId")
//     .patch(verifyJWT, authorizeRoles("owner", "admin"), updatePayment);

router
    .route("/:organizationId/invoices/:invoiceId/payments/:paymentId")
    .delete(verifyJWT, authorizeRoles("owner", "admin"), deletePayment);

// SERVICE CATALOG MANAGEMENT
router
    .route("/:organizationId/services")
    .post(verifyJWT, authorizeRoles("owner", "admin"), createService);

router
    .route("/:organizationId/services")
    .get(verifyJWT, authorizeRoles("owner", "admin", "member"), getServices);

router
    .route("/:organizationId/services/:serviceId")
    .get(verifyJWT, authorizeRoles("owner", "admin", "member"), getService);

router
    .route("/:organizationId/services/:serviceId")
    .patch(verifyJWT, authorizeRoles("owner", "admin"), updateService);

router
    .route("/:organizationId/services/:serviceId")
    .delete(verifyJWT, authorizeRoles("owner", "admin"), deleteService);

export default router;
