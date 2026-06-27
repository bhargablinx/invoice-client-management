import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Dashboard from "./pages/Dashboard";
import MyOrganizations from "./pages/MyOrganizations";
import Invitations from "./pages/Invitations";
import ViewMembers from "./pages/ViewMembers";
import ManageMembers from "./pages/ManageMembers";
import AllClients from "./pages/AllClients";
import ManageClients from "./pages/ManageClients";
import ViewInvoices from "./pages/ViewInvoices";
import ManageInvoices from "./pages/ManageInvoices";
import Payments from "./pages/Payments";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./features/auth/authThunk";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUser = async () => {
            await dispatch(getCurrentUser());
        };

        fetchUser();
    }, []);

    const router = createBrowserRouter([
        // Un-Protected Routes
        {
            path: "/",
            element: <AuthLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/signup",
                    element: <Signup />,
                },
            ],
        },
        // Protected Routes
        {
            path: "/",
            element: <ProtectedLayout />,
            children: [
                {
                    path: "dashboard",
                    element: <Dashboard />,
                },
                {
                    path: "organizations",
                    element: <MyOrganizations />,
                },
                {
                    path: "organizations/invitations",
                    element: <Invitations />,
                },
                {
                    path: "members",
                    element: <ViewMembers />,
                },
                {
                    path: "members/manage",
                    element: <ManageMembers />,
                },
                {
                    path: "clients",
                    element: <AllClients />,
                },
                {
                    path: "clients/manage",
                    element: <ManageClients />,
                },
                {
                    path: "invoices",
                    element: <ViewInvoices />,
                },
                {
                    path: "invoices/manage",
                    element: <ManageInvoices />,
                },
                {
                    path: "payments",
                    element: <Payments />,
                },
            ],
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
