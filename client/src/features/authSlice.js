import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    accessToken: null,
    loading: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        login: (state, action) => {
            state.user = action.payload;
            state.isAuthorized = true;
        },

        signup: (state, action) => {
            state.user = action.payload;
            state.isAuthorized = true;
        },

        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.isAuthenticated = false;
            state.loading = false;
        },

        updateUser: (state, action) => {
            state.user = {
                ...state.user,
                ...action.payload,
            };
        },

        updateAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
    },
});

export const {
    login,
    signup,
    logout,
    setLoading,
    updateAccessToken,
    updateUser,
} = authSlice.actions;
export default authSlice.reducer;
