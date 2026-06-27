import api from "@/lib/axios";

export const login = (data) => api.post("/auth/login", data);

export const register = (data) => api.post("/auth/register", data);

export const logout = () => api.post("/auth/logout");

export const getCurrentUser = () => api.get("/auth/me");

export const resendVerification = () => api.post("/auth/resend-verification");
