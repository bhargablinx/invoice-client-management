import api from "@/lib/axios";

export const createService = (organizationId, data) =>
    api.post(`/organizations/${organizationId}/services`, data);

export const getServices = (organizationId, params = {}) =>
    api.get(`/organizations/${organizationId}/services`, { params });

export const getService = (organizationId, serviceId) =>
    api.get(`/organizations/${organizationId}/services/${serviceId}`);

export const updateService = (organizationId, serviceId, data) =>
    api.patch(`/organizations/${organizationId}/services/${serviceId}`, data);

export const deleteService = (organizationId, serviceId) =>
    api.delete(`/organizations/${organizationId}/services/${serviceId}`);
