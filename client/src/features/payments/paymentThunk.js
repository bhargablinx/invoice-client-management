import { createAsyncThunk } from "@reduxjs/toolkit";
import * as paymentAPI from "@/api/payment.api";

const getErrorMessage = (error) =>
    error.response?.data ?? { message: "Something went wrong" };

export const createPayment = createAsyncThunk(
    "payments/createPayment",
    async ({ organizationId, invoiceId, data }, thunkAPI) => {
        try {
            const { data: response } = await paymentAPI.createPayment(
                organizationId,
                invoiceId,
                data,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getPayments = createAsyncThunk(
    "payments/getPayments",
    async ({ organizationId, invoiceId }, thunkAPI) => {
        try {
            const { data: response } = await paymentAPI.getPayments(
                organizationId,
                invoiceId,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getPayment = createAsyncThunk(
    "payments/getPayment",
    async ({ organizationId, invoiceId, paymentId }, thunkAPI) => {
        try {
            const { data: response } = await paymentAPI.getPayment(
                organizationId,
                invoiceId,
                paymentId,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const updatePayment = createAsyncThunk(
    "payments/updatePayment",
    async ({ organizationId, invoiceId, paymentId, data }, thunkAPI) => {
        try {
            const { data: response } = await paymentAPI.updatePayment(
                organizationId,
                invoiceId,
                paymentId,
                data,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const deletePayment = createAsyncThunk(
    "payments/deletePayment",
    async ({ organizationId, invoiceId, paymentId }, thunkAPI) => {
        try {
            const { data: response } = await paymentAPI.deletePayment(
                organizationId,
                invoiceId,
                paymentId,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getOrganizationPayments = createAsyncThunk(
    "payments/getOrganizationPayments",
    async ({ organizationId, params }, thunkAPI) => {
        try {
            const { data: response } = await paymentAPI.getOrganizationPayments(
                organizationId,
                params,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);
