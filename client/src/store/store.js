import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import clientReducer from "@/features/clients/clientSlice";
import invoiceReducer from "@/features/invoices/invoiceSlice";
import paymentReducer from "@/features/payments/paymentSlice";
import serviceReducer from "@/features/services/serviceSlice";
import organizationReducer from "@/features/organization/organizationSlice";
import dashboardReducer from "@/features/dashboard/dashboardSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        clients: clientReducer,
        invoices: invoiceReducer,
        payments: paymentReducer,
        services: serviceReducer,
        organization: organizationReducer,
        dashboard: dashboardReducer,
    },
});
