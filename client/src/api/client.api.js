import api from "@/lib/axios";

export const createClient = (organizationId, data) =>
    api.post(`/organizations/${organizationId}/clients`, data);

export const getClients = (organizationId, params = {}) =>
    api.get(`/organizations/${organizationId}/clients`, { params });

export const getClient = (organizationId, clientId) =>
    api.get(`/organizations/${organizationId}/clients/${clientId}`);

export const updateClient = (organizationId, clientId, data) =>
    api.patch(`/organizations/${organizationId}/clients/${clientId}`, data);

export const deleteClient = (organizationId, clientId) =>
    api.delete(`/organizations/${organizationId}/clients/${clientId}`);

export const getClientInvoices = (organizationId, clientId) =>
    api.delete(`/organizations/${organizationId}/clients/${clientId}/invoices`);

export const getClientStats = (organizationId, clientId) =>
    api.delete(`/organizations/${organizationId}/clients/${clientId}/stats`);
