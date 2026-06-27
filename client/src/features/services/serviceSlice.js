import { createSlice } from "@reduxjs/toolkit";
import {
    createService,
    getServices,
    getService,
    updateService,
    deleteService,
} from "./serviceThunk";

const initialState = {
    services: [],
    selectedService: null,
    pagination: null,
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

export const serviceSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        clearServiceState: () => initialState,
        clearSelectedService: (state) => {
            state.selectedService = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createService.pending, pending)
            .addCase(createService.fulfilled, (state, action) => {
                state.loading = false;
                state.services.unshift(action.payload);
            })
            .addCase(createService.rejected, rejected)
            .addCase(getServices.pending, pending)
            .addCase(getServices.fulfilled, (state, action) => {
                state.loading = false;
                state.services = action.payload?.services ?? [];
                state.pagination = action.payload?.pagination ?? null;
            })
            .addCase(getServices.rejected, rejected)
            .addCase(getService.pending, pending)
            .addCase(getService.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedService = action.payload;
            })
            .addCase(getService.rejected, rejected)
            .addCase(updateService.pending, pending)
            .addCase(updateService.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedService = action.payload;
                state.services = state.services.map((service) =>
                    service._id === action.payload._id ? action.payload : service,
                );
            })
            .addCase(updateService.rejected, rejected)
            .addCase(deleteService.pending, pending)
            .addCase(deleteService.fulfilled, (state, action) => {
                state.loading = false;
                state.services = state.services.filter(
                    (service) => service._id !== action.meta.arg.serviceId,
                );
                if (state.selectedService?._id === action.meta.arg.serviceId) {
                    state.selectedService = null;
                }
            })
            .addCase(deleteService.rejected, rejected);
    },
});

export const { clearServiceState, clearSelectedService } =
    serviceSlice.actions;

export default serviceSlice.reducer;

