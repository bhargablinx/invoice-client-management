import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
    const { isLogin } = useSelector((state) => state.auth);

    if (!isLogin) return <Navigate to="/login" replace />;

    return <Outlet />;
}

export default ProtectedRoute;
