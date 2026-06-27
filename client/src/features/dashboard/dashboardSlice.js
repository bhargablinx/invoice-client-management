import { createSlice } from "@reduxjs/toolkit";
import {
    getOverview,
    getMonthlyRevenue,
    getRecentInvoices,
    getTopClients,
} from "./dashboardThunk";

const initialState = {
    overview: null,
    monthlyRevenue: [],
    recentInvoices: [],
    topClients: [],
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

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        clearDashboardState: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOverview.pending, pending)
            .addCase(getOverview.fulfilled, (state, action) => {
                state.loading = false;
                state.overview = action.payload;
            })
            .addCase(getOverview.rejected, rejected)
            .addCase(getMonthlyRevenue.fulfilled, (state, action) => {
                state.monthlyRevenue = action.payload ?? [];
            })
            .addCase(getRecentInvoices.fulfilled, (state, action) => {
                state.recentInvoices = action.payload ?? [];
            })
            .addCase(getTopClients.fulfilled, (state, action) => {
                state.topClients = action.payload ?? [];
            });
    },
});

export const { clearDashboardState } = dashboardSlice.actions;

export default dashboardSlice.reducer;

