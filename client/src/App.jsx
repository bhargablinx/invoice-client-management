import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import AppRoute from "./routes/AppRoute";
import Login from "./pages/auth/Login";
import Home from "./pages/auth/Home";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppRoute />,
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
    ]);

    return <RouterProvider router={router} />;
}

export default App;
