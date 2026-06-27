import api from "@/lib/axios";

export const getOverview = (organizationId) =>
    api.get(`/dashboard/${organizationId}/overview`);

export const getMonthlyRevenue = (organizationId) =>
    api.get(`/dashboard/${organizationId}/monthly-revenue`);

export const getRecentInvoices = (organizationId) =>
    api.get(`/dashboard/${organizationId}/recent-invoices`);

export const getTopClients = (organizationId) =>
    api.get(`/dashboard/${organizationId}/top-clients`);
