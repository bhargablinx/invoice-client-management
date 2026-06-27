import { createSlice } from "@reduxjs/toolkit";
import {
    createPayment,
    getPayments,
    getPayment,
    updatePayment,
    deletePayment,
} from "./paymentThunk";

const initialState = {
    payments: [],
    selectedPayment: null,
    invoiceSummary: null,
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

export const paymentSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {
        clearPaymentState: () => initialState,
        clearSelectedPayment: (state) => {
            state.selectedPayment = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPayment.pending, pending)
            .addCase(createPayment.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedPayment = action.payload?.payment ?? null;
                state.invoiceSummary = action.payload?.invoice ?? null;
            })
            .addCase(createPayment.rejected, rejected)
            .addCase(getPayments.pending, pending)
            .addCase(getPayments.fulfilled, (state, action) => {
                state.loading = false;
                state.payments = action.payload?.payments ?? [];
                state.invoiceSummary = action.payload?.invoice ?? null;
            })
            .addCase(getPayments.rejected, rejected)
            .addCase(getPayment.pending, pending)
            .addCase(getPayment.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedPayment = action.payload;
            })
            .addCase(getPayment.rejected, rejected)
            .addCase(updatePayment.pending, pending)
            .addCase(updatePayment.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedPayment = action.payload;
            })
            .addCase(updatePayment.rejected, rejected)
            .addCase(deletePayment.pending, pending)
            .addCase(deletePayment.fulfilled, (state, action) => {
                state.loading = false;
                state.payments = state.payments.filter(
                    (payment) => payment._id !== action.meta.arg.paymentId,
                );
                state.invoiceSummary = action.payload?.invoice ?? state.invoiceSummary;
                if (state.selectedPayment?._id === action.meta.arg.paymentId) {
                    state.selectedPayment = null;
                }
            })
            .addCase(deletePayment.rejected, rejected);
    },
});

export const { clearPaymentState, clearSelectedPayment } =
    paymentSlice.actions;

export default paymentSlice.reducer;

