import api from "@/lib/axios";

export const login = (data) => api.post("/auth/login", data);

export const signup = (data) => api.post("/auth/signup", data);

export const logout = () => api.post("/auth/logout");

export const changePassword = (data) => api.post("/auth/change-password", data);

export const forgotPassword = (data) => api.post("/auth/forgot-password", data);

export const getCurrentUser = () => api.get("/auth/me");

export const getAuthToken = () => api.post("/auth/refresh-token");

export const resendVerification = (data) =>
    api.post("/auth/resend-email", data);

export const deleteUser = () => api.delete("/auth/delete");
