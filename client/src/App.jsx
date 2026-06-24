import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Dashboard from "./pages/Dashboard";

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
            path: "/dashboard",
            element: <ProtectedLayout />,
            children: [
                {
                    path: "/dashboard",
                    element: <Dashboard />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
