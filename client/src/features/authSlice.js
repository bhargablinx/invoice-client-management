import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthorized: true,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthorized = true;
        },
        signup: (state, action) => {
            state.user = action.payload;
            state.isAuthorized = true;
        },
        logout: (state, action) => {
            state.user = null;
            state.isAuthorized = false;
        },
    },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;
