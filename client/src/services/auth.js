import api from "@/lib/axios";

// ====================
// Auth
// ====================

export const signup = async (formData) => {
    const { data } = await api.post("/auth/signup", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return data;
};

export const login = async (credentials) => {
    const { data } = await api.post("/auth/login", credentials);

    return data;
};

export const logout = async () => {
    const { data } = await api.post("/auth/logout");

    return data;
};

// ====================
// Account
// ====================

export const getCurrentUser = async () => {
    const { data } = await api.get("/auth/me");

    return data;
};

export const deleteAccount = async () => {
    const { data } = await api.delete("/auth/delete");

    return data;
};

// ====================
// Password
// ====================

export const changePassword = async (passwords) => {
    const { data } = await api.post("/auth/change-password", passwords);

    return data;
};

export const forgotPassword = async (email) => {
    const { data } = await api.post("/auth/forgot-password", { email });

    return data;
};

export const resetPassword = async (token, passwordData) => {
    const { data } = await api.post(
        `/auth/reset-password/${token}`,
        passwordData,
    );

    return data;
};

// ====================
// Email Verification
// ====================

export const verifyEmail = async (token) => {
    const { data } = await api.get(`/auth/verify-email/${token}`);

    return data;
};

export const resendVerificationEmail = async (payload) => {
    const { data } = await api.post("/auth/resend-email", payload);

    return data;
};

// ====================
// Token Refresh
// ====================

export const refreshToken = async () => {
    const { data } = await api.post("/auth/refresh-token");

    return data;
};
