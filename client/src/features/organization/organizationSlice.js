import { createSlice } from "@reduxjs/toolkit";
import {
    createOrganization,
    getOrganization,
    getMyOrganizations,
    updateOrganization,
    deleteOrganization,
    getOrganizationInvitations,
} from "./organizationThunk";

const initialState = {
    organization: null,
    organizations: [],
    invitations: [],
    loading: false,
    error: null,
};

const pending = (state) => {
    state.loading = true;
    state.error = null;
};

const rejected = (state, action) => {
    state.loading = false;
    state.error = action.payload?.message;
};

export const organizationSlice = createSlice({
    name: "organization",
    initialState,
    reducers: {
        clearOrganizationState: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrganization.pending, pending)
            .addCase(createOrganization.fulfilled, (state, action) => {
                state.loading = false;
                state.organization = action.payload;
                state.organizations = [action.payload, ...state.organizations];
            })
            .addCase(createOrganization.rejected, rejected)
            .addCase(getOrganization.pending, pending)
            .addCase(getOrganization.fulfilled, (state, action) => {
                state.loading = false;
                state.organization = action.payload;
            })
            .addCase(getOrganization.rejected, rejected)
            .addCase(getMyOrganizations.pending, pending)
            .addCase(getMyOrganizations.fulfilled, (state, action) => {
                state.loading = false;
                state.organizations = action.payload ?? [];
                state.organization = action.payload?.[0] ?? null;
            })
            .addCase(getMyOrganizations.rejected, rejected)
            .addCase(updateOrganization.pending, pending)
            .addCase(updateOrganization.fulfilled, (state, action) => {
                state.loading = false;
                state.organization = action.payload;
            })
            .addCase(updateOrganization.rejected, rejected)
            .addCase(deleteOrganization.pending, pending)
            .addCase(deleteOrganization.fulfilled, (state) => {
                state.loading = false;
                state.organization = null;
            })
            .addCase(deleteOrganization.rejected, rejected)
            .addCase(getOrganizationInvitations.fulfilled, (state, action) => {
                state.invitations = action.payload ?? [];
            });
    },
});

export const { clearOrganizationState } = organizationSlice.actions;

export default organizationSlice.reducer;
