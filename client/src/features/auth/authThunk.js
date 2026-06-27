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

export const signupUser = createAsyncThunk(
    "auth/signup",
    async (userData, thunkAPI) => {
        try {
            const { data } = await authAPI.signup(userData);
            return data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data ?? { message: "Something went wrong" },
            );
        }
    },
);

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            await authAPI.logout();
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data ?? { message: "Something went wrong" },
            );
        }
    },
);

export const changePassword = createAsyncThunk(
    "auth/changePassword",
    async (passwordData, thunkAPI) => {
        try {
            const { data } = await authAPI.changePassword(passwordData);
            return data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data ?? { message: "Something went wrong" },
            );
        }
    },
);

export const forgotPassword = createAsyncThunk(
    "auth/forgotPassword",
    async (emailData, thunkAPI) => {
        try {
            const { data } = await authAPI.forgotPassword(emailData);
            return data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data ?? { message: "Something went wrong" },
            );
        }
    },
);

export const getCurrentUser = createAsyncThunk(
    "auth/getCurrentUser",
    async (_, thunkAPI) => {
        try {
            const { data } = await authAPI.getCurrentUser();
            return data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data ?? { message: "Something went wrong" },
            );
        }
    },
);

export const refreshAuthToken = createAsyncThunk(
    "auth/refreshToken",
    async (_, thunkAPI) => {
        try {
            const { data } = await authAPI.getAuthToken();
            return data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data ?? { message: "Something went wrong" },
            );
        }
    },
);

export const resendVerification = createAsyncThunk(
    "auth/resendVerification",
    async (data, thunkAPI) => {
        try {
            const res = await authAPI.resendVerification(data);
            return res;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data ?? { message: "Something went wrong" },
            );
        }
    },
);

export const deleteUser = createAsyncThunk(
    "auth/deleteUser",
    async (_, thunkAPI) => {
        try {
            await authAPI.deleteUser();
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data ?? { message: "Something went wrong" },
            );
        }
    },
);
