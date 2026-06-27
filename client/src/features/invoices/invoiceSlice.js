import { createSlice } from "@reduxjs/toolkit";
import {
    createInvoice,
    getInvoices,
    getInvoice,
    updateInvoice,
    deleteInvoice,
    updateInvoiceStatus,
} from "./invoiceThunk";

const initialState = {
    invoices: [],
    selectedInvoice: null,
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

export const invoiceSlice = createSlice({
    name: "invoices",
    initialState,
    reducers: {
        clearInvoiceState: () => initialState,
        clearSelectedInvoice: (state) => {
            state.selectedInvoice = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createInvoice.pending, pending)
            .addCase(createInvoice.fulfilled, (state, action) => {
                state.loading = false;
                state.invoices.unshift(action.payload);
            })
            .addCase(createInvoice.rejected, rejected)
            .addCase(getInvoices.pending, pending)
            .addCase(getInvoices.fulfilled, (state, action) => {
                state.loading = false;
                state.invoices = action.payload?.invoices ?? [];
                state.pagination = action.payload?.pagination ?? null;
            })
            .addCase(getInvoices.rejected, rejected)
            .addCase(getInvoice.pending, pending)
            .addCase(getInvoice.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedInvoice = action.payload;
            })
            .addCase(getInvoice.rejected, rejected)
            .addCase(updateInvoice.pending, pending)
            .addCase(updateInvoice.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedInvoice = action.payload;
            })
            .addCase(updateInvoice.rejected, rejected)
            .addCase(deleteInvoice.pending, pending)
            .addCase(deleteInvoice.fulfilled, (state, action) => {
                state.loading = false;
                state.invoices = state.invoices.filter(
                    (invoice) => invoice._id !== action.meta.arg.invoiceId,
                );
                if (state.selectedInvoice?._id === action.meta.arg.invoiceId) {
                    state.selectedInvoice = null;
                }
            })
            .addCase(deleteInvoice.rejected, rejected)
            .addCase(updateInvoiceStatus.pending, pending)
            .addCase(updateInvoiceStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedInvoice = {
                    ...state.selectedInvoice,
                    ...action.payload,
                };
            })
            .addCase(updateInvoiceStatus.rejected, rejected);
    },
});

export const { clearInvoiceState, clearSelectedInvoice } =
    invoiceSlice.actions;

export default invoiceSlice.reducer;

