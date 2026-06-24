import Sidebar from "@/components/Sidebar";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
    const { isAuthorized } = useSelector((state) => state.auth);

    if (!isAuthorized) return <Navigate to="/signup" />;

    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
};

export default ProtectedLayout;
