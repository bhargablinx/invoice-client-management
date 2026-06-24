import Sidebar from "@/components/Sidebar";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
    const isAuthorized = false;

    if (!isAuthorized) return <Navigate to="/signup" />;

    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
};

export default ProtectedLayout;
