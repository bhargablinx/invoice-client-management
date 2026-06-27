import { createAsyncThunk } from "@reduxjs/toolkit";
import * as invoiceAPI from "@/api/invoice.api";

const getErrorMessage = (error) =>
    error.response?.data ?? { message: "Something went wrong" };

export const createInvoice = createAsyncThunk(
    "invoices/createInvoice",
    async ({ organizationId, data }, thunkAPI) => {
        try {
            const { data: response } = await invoiceAPI.createInvoice(
                organizationId,
                data,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getInvoices = createAsyncThunk(
    "invoices/getInvoices",
    async ({ organizationId, params }, thunkAPI) => {
        try {
            const { data: response } = await invoiceAPI.getInvoices(
                organizationId,
                params,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getInvoice = createAsyncThunk(
    "invoices/getInvoice",
    async ({ organizationId, invoiceId }, thunkAPI) => {
        try {
            const { data: response } = await invoiceAPI.getInvoice(
                organizationId,
                invoiceId,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const updateInvoice = createAsyncThunk(
    "invoices/updateInvoice",
    async ({ organizationId, invoiceId, data }, thunkAPI) => {
        try {
            const { data: response } = await invoiceAPI.updateInvoice(
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

export const deleteInvoice = createAsyncThunk(
    "invoices/deleteInvoice",
    async ({ organizationId, invoiceId }, thunkAPI) => {
        try {
            const { data: response } = await invoiceAPI.deleteInvoice(
                organizationId,
                invoiceId,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const updateInvoiceStatus = createAsyncThunk(
    "invoices/updateInvoiceStatus",
    async ({ organizationId, invoiceId, data }, thunkAPI) => {
        try {
            const { data: response } = await invoiceAPI.updateInvoiceStatus(
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

export const generateInvoicePdf = createAsyncThunk(
    "invoices/generateInvoicePdf",
    async ({ organizationId, invoiceId }, thunkAPI) => {
        try {
            const { data: response } = await invoiceAPI.generateInvoicePdf(
                organizationId,
                invoiceId,
            );
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const sendInvoice = createAsyncThunk(
    "invoices/sendInvoice",
    async ({ organizationId, invoiceId, data }, thunkAPI) => {
        try {
            const { data: response } = await invoiceAPI.sendInvoice(
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

