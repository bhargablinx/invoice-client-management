import api from "@/lib/axios";

export const getInvitations = (organizationId, params = {}) =>
    api.get(`/organizations/${organizationId}/invitations`, { params });

export const acceptInvitation = (token) =>
    api.post(`/invitations/${token}/accept`);

export const rejectInvitation = (token) =>
    api.post(`/invitations/${token}/reject`);
