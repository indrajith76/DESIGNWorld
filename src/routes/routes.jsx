import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import ViewProfile from "../pages/ViewProfile/ViewProfile";
import AdminRoute from "./private/AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LogIn /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    errorElement: <h1 className="text-7xl">ERROR</h1>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "viewProfile",
        element: <ViewProfile />,
      },
    ],
  },
]);

export default router;
