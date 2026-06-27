import { createSlice } from "@reduxjs/toolkit";
import {
    createClient,
    getClients,
    getClient,
    updateClient,
    deleteClient,
} from "./clientThunk";

const initialState = {
    clients: [],
    selectedClient: null,
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

export const clientSlice = createSlice({
    name: "clients",
    initialState,
    reducers: {
        clearClientState: () => initialState,
        clearSelectedClient: (state) => {
            state.selectedClient = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createClient.pending, pending)
            .addCase(createClient.fulfilled, (state, action) => {
                state.loading = false;
                state.clients.unshift(action.payload);
            })
            .addCase(createClient.rejected, rejected)

            .addCase(getClients.pending, pending)
            .addCase(getClients.fulfilled, (state, action) => {
                state.loading = false;
                state.clients = action.payload?.clients ?? [];
                state.pagination = action.payload?.pagination ?? null;
            })
            .addCase(getClients.rejected, rejected)

            .addCase(getClient.pending, pending)
            .addCase(getClient.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedClient = action.payload;
            })
            .addCase(getClient.rejected, rejected)

            .addCase(updateClient.pending, pending)
            .addCase(updateClient.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedClient = action.payload;
                state.clients = state.clients.map((client) =>
                    client._id === action.payload._id ? action.payload : client,
                );
            })
            .addCase(updateClient.rejected, rejected)

            .addCase(deleteClient.pending, pending)
            .addCase(deleteClient.fulfilled, (state, action) => {
                state.loading = false;
                state.clients = state.clients.filter(
                    (client) => client._id !== action.meta.arg.clientId,
                );
                if (state.selectedClient?._id === action.meta.arg.clientId) {
                    state.selectedClient = null;
                }
            })
            .addCase(deleteClient.rejected, rejected);
    },
});

export const { clearClientState, clearSelectedClient } =
    clientSlice.actions;

export default clientSlice.reducer;

