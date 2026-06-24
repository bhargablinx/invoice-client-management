import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
    const { isAuthorized } = useSelector((state) => state.auth);

    if (isAuthorized) return <Navigate to="/dashboard" />;

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default AuthLayout;
