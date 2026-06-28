import { createAsyncThunk } from "@reduxjs/toolkit";
import * as clientAPI from "@/api/client.api";

const getErrorMessage = (error) =>
    error.response?.data ?? { message: "Something went wrong" };

export const createClient = createAsyncThunk(
    "clients/createClient",
    async ({ organizationId, data }, thunkAPI) => {
        try {
            const { data: response } = await clientAPI.createClient(
                organizationId,
                data,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getClients = createAsyncThunk(
    "clients/getClients",
    async ({ organizationId, params }, thunkAPI) => {
        try {
            const { data: response } = await clientAPI.getClients(
                organizationId,
                params,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const getClient = createAsyncThunk(
    "clients/getClient",
    async ({ organizationId, clientId }, thunkAPI) => {
        try {
            const { data: response } = await clientAPI.getClient(
                organizationId,
                clientId,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const updateClient = createAsyncThunk(
    "clients/updateClient",
    async ({ organizationId, clientId, data }, thunkAPI) => {
        try {
            const { data: response } = await clientAPI.updateClient(
                organizationId,
                clientId,
                data,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const deleteClient = createAsyncThunk(
    "clients/deleteClient",
    async ({ organizationId, clientId }, thunkAPI) => {
        try {
            const { data: response } = await clientAPI.deleteClient(
                organizationId,
                clientId,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);
