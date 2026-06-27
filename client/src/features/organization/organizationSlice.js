import { createSlice } from "@reduxjs/toolkit";
import {
    createOrganization,
    getOrganization,
    updateOrganization,
    deleteOrganization,
} from "./organizationThunk";

const initialState = {
    organization: null,
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
            })
            .addCase(createOrganization.rejected, rejected)
            .addCase(getOrganization.pending, pending)
            .addCase(getOrganization.fulfilled, (state, action) => {
                state.loading = false;
                state.organization = action.payload;
            })
            .addCase(getOrganization.rejected, rejected)
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
            .addCase(deleteOrganization.rejected, rejected);
    },
});

export const { clearOrganizationState } = organizationSlice.actions;

export default organizationSlice.reducer;

