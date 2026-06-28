import { createAsyncThunk } from "@reduxjs/toolkit";
import * as organizationAPI from "@/api/organization.api";

const getErrorMessage = (error) =>
    error.response?.data ?? { message: "Something went wrong" };

export const createOrganization = createAsyncThunk(
    "organization/createOrganization",
    async (data, thunkAPI) => {
        try {
            const { data: response } =
                await organizationAPI.createOrganization(data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getOrganization = createAsyncThunk(
    "organization/getOrganization",
    async (organizationId, thunkAPI) => {
        try {
            const { data: response } =
                await organizationAPI.getOrganization(organizationId);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getMyOrganizations = createAsyncThunk(
    "organization/getMyOrganizations",
    async (_, thunkAPI) => {
        try {
            const { data: response } =
                await organizationAPI.getMyOrganizations();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const updateOrganization = createAsyncThunk(
    "organization/updateOrganization",
    async ({ organizationId, data }, thunkAPI) => {
        try {
            const { data: response } = await organizationAPI.updateOrganization(
                organizationId,
                data,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const deleteOrganization = createAsyncThunk(
    "organization/deleteOrganization",
    async (organizationId, thunkAPI) => {
        try {
            const { data: response } =
                await organizationAPI.deleteOrganization(organizationId);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getOrganizationMembers = createAsyncThunk(
    "organization/getOrganizationMembers",
    async (organizationId, thunkAPI) => {
        try {
            const { data: response } =
                await organizationAPI.getMembers(organizationId);

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getOrganizationInvitations = createAsyncThunk(
    "organization/getOrganizationInvitations",
    async (organizationId, thunkAPI) => {
        try {
            const { data: response } =
                await organizationAPI.getInvitations(organizationId);
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const inviteMemberToOrganization = createAsyncThunk(
    "organization/inviteMemberToOrganization",
    async ({ organizationId, data }, thunkAPI) => {
        try {
            const { data: response } = await organizationAPI.inviteUser(
                organizationId,
                data,
            );
            return response.message;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);
