import Sidebar from "@/components/Sidebar";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    console.log(isAuthenticated);

    if (!isAuthenticated) return <Navigate to="/signup" />;

    return (
        <>
            <Sidebar>
                <Outlet />
            </Sidebar>
        </>
    );
};

export default ProtectedLayout;
