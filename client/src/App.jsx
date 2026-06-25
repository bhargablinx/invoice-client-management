import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Dashboard from "./pages/Dashboard";
import MyOrganizations from "./pages/MyOrganizations";

function App() {
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
                    path: "/dashboard",
                    element: <Dashboard />,
                },
                {
                    path: "/organizations",
                    element: <MyOrganizations />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
