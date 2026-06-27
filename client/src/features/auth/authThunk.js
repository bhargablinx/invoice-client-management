import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from "@/api/auth.api";

export const loginUser = createAsyncThunk(
    "auth/login",
    async (data, thunkAPI) => {
        try {
            const res = await authAPI.login(data);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    },
);
