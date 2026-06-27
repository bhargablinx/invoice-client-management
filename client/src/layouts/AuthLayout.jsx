import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    if (isAuthenticated) return <Navigate to="/dashboard" />;

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default AuthLayout;
