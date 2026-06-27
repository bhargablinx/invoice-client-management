import { createSlice } from "@reduxjs/toolkit";
import {
    loginUser,
    signupUser,
    getCurrentUser,
    logoutUser,
    changePassword,
    forgotPassword,
    refreshAuthToken,
    resendVerification,
    deleteUser,
} from "./authThunk";

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        updateUser: (state, action) => {
            state.user = {
                ...state.user,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder

            // ================= LOGIN =================
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message;
            })

            // ================= SIGNUP =================
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message;
            })

            // ================= CURRENT USER =================
            .addCase(getCurrentUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(getCurrentUser.rejected, (state) => {
                state.loading = false;
                state.user = null;
                state.isAuthenticated = false;
            })

            // ================= LOGOUT =================
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = null;
            })

            // ================= CHANGE PASSWORD =================
            .addCase(changePassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message;
            })

            // ================= FORGOT PASSWORD =================
            .addCase(forgotPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message;
            })

            // ================= REFRESH TOKEN =================
            .addCase(refreshAuthToken.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
            })

            // ================= RESEND VERIFICATION =================
            .addCase(resendVerification.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(resendVerification.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(resendVerification.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message;
            })

            // ================= DELETE USER =================
            .addCase(deleteUser.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = null;
            });
    },
});

export const { login, logout, setLoading, updateUser } = authSlice.actions;
export default authSlice.reducer;
