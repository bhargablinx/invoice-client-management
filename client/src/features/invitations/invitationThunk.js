import { createAsyncThunk } from "@reduxjs/toolkit";
import * as invitationAPI from "@/api/invitation.api";

const getErrorMessage = (error) =>
    error.response?.data ?? { message: "Something went wrong" };

export const getInvitations = createAsyncThunk(
    "invitations/getInvitations",
    async ({ organizationId, params }, thunkAPI) => {
        try {
            const { data: response } = await invitationAPI.getInvitations(
                organizationId,
                params,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const acceptInvitation = createAsyncThunk(
    "invitations/acceptInvitation",
    async (token, thunkAPI) => {
        try {
            const { data: response } = await invitationAPI.acceptInvitation(
                token,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);

export const rejectInvitation = createAsyncThunk(
    "invitations/rejectInvitation",
    async (token, thunkAPI) => {
        try {
            const { data: response } = await invitationAPI.rejectInvitation(
                token,
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(getErrorMessage(error));
        }
    },
);
