import { createAsyncThunk } from "@reduxjs/toolkit";
import * as serviceAPI from "@/api/service.api";

const getErrorMessage = (error) =>
    error.response?.data ?? { message: "Something went wrong" };

export const createService = createAsyncThunk(
    "services/createService",
    async ({ organizationId, data }, thunkAPI) => {
        try {
            const { data: response } = await serviceAPI.createService(
                organizationId,
                data,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getServices = createAsyncThunk(
    "services/getServices",
    async ({ organizationId, params }, thunkAPI) => {
        try {
            const { data: response } = await serviceAPI.getServices(
                organizationId,
                params,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getService = createAsyncThunk(
    "services/getService",
    async ({ organizationId, serviceId }, thunkAPI) => {
        try {
            const { data: response } = await serviceAPI.getService(
                organizationId,
                serviceId,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const updateService = createAsyncThunk(
    "services/updateService",
    async ({ organizationId, serviceId, data }, thunkAPI) => {
        try {
            const { data: response } = await serviceAPI.updateService(
                organizationId,
                serviceId,
                data,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const deleteService = createAsyncThunk(
    "services/deleteService",
    async ({ organizationId, serviceId }, thunkAPI) => {
        try {
            const { data: response } = await serviceAPI.deleteService(
                organizationId,
                serviceId,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

