import api from "@/lib/axios";

export const createPayment = (organizationId, invoiceId, data) =>
    api.post(
        `/organizations/${organizationId}/invoices/${invoiceId}/payments`,
        data,
    );

export const getPayments = (organizationId, invoiceId) =>
    api.get(`/organizations/${organizationId}/invoices/${invoiceId}/payments`);

export const getPayment = (organizationId, invoiceId, paymentId) =>
    api.get(
        `/organizations/${organizationId}/invoices/${invoiceId}/payments/${paymentId}`,
    );

export const updatePayment = (organizationId, invoiceId, paymentId, data) =>
    api.patch(
        `/organizations/${organizationId}/invoices/${invoiceId}/payments/${paymentId}`,
        data,
    );

export const deletePayment = (organizationId, invoiceId, paymentId) =>
    api.delete(
        `/organizations/${organizationId}/invoices/${invoiceId}/payments/${paymentId}`,
    );
