import { createAsyncThunk } from "@reduxjs/toolkit";
import * as dashboardAPI from "@/api/dashboard.api";

const getErrorMessage = (error) =>
    error.response?.data ?? { message: "Something went wrong" };

export const getOverview = createAsyncThunk(
    "dashboard/getOverview",
    async (organizationId, thunkAPI) => {
        try {
            const { data: response } = await dashboardAPI.getOverview(
                organizationId,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getMonthlyRevenue = createAsyncThunk(
    "dashboard/getMonthlyRevenue",
    async (organizationId, thunkAPI) => {
        try {
            const { data: response } = await dashboardAPI.getMonthlyRevenue(
                organizationId,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getRecentInvoices = createAsyncThunk(
    "dashboard/getRecentInvoices",
    async (organizationId, thunkAPI) => {
        try {
            const { data: response } = await dashboardAPI.getRecentInvoices(
                organizationId,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getTopClients = createAsyncThunk(
    "dashboard/getTopClients",
    async (organizationId, thunkAPI) => {
        try {
            const { data: response } = await dashboardAPI.getTopClients(
                organizationId,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

