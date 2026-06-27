import api from "@/lib/axios";

export const createOrganization = (data) =>
    api.post("/organizations", data, {
        headers: { "Content-Type": "multipart/form-data" },
    });

export const getOrganization = (organizationId) =>
    api.get(`/organizations/${organizationId}`);

export const updateOrganization = (organizationId, data) =>
    api.patch(`/organizations/${organizationId}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
    });

export const deleteOrganization = (organizationId) =>
    api.delete(`/organizations/${organizationId}`);

export const getMembers = (organizationId) =>
    api.get(`/organizations/${organizationId}/members`);

export const changeMemberRole = (organizationId, userId, data) =>
    api.patch(`/organizations/${organizationId}/members/${userId}`, data);

export const removeMember = (organizationId, userId) =>
    api.delete(`/organizations/${organizationId}/members/${userId}`);

export const inviteUser = (organizationId, data) =>
    api.post(`/organizations/${organizationId}/invitations`, data);

export const getInvitations = (organizationId) =>
    api.get(`/organizations/${organizationId}/invitations`);
