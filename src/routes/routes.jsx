import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import AllClients from "../pages/AllClients/AllClients";
import AllOrderRequest from "../pages/AllOrderRequest/AllOrderRequest";
import AllServices from "../pages/AllServices/AllServices";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import MyOrderList from "../pages/MyOrderList/MyOrderList";
import ServicesOrder from "../pages/ServicesOrder/ServicesOrder";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import SignUp from "../pages/SignUp/SignUp";
import ViewProfile from "../pages/ViewProfile/ViewProfile";
import AdminRoute from "./private/AdminRoute";
import UserRoute from "./private/UserRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LogIn /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/ServicesPage",
        element: <ServicesPage />,
      },
      {
        path: "/Services/:id",
        element: <ServicesOrder />,
        loader: async ({ params }) =>
          await fetch(`http://localhost:3000/services/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <h1 className="text-7xl">ERROR</h1>,
    children: [
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <DashboardPage />
          </AdminRoute>
        ),
      },
      {
        path: "viewProfile",
        element: (
          <UserRoute>
            <ViewProfile />
          </UserRoute>
        ),
      },
      {
        path: "AllServices",
        element: (
          <AdminRoute>
            <AllServices />
          </AdminRoute>
        ),
      },
      {
        path: "AllClients",
        element: (
          <AdminRoute>
            <AllClients />
          </AdminRoute>
        ),
      },
      {
        path: "AllOrderRequest",
        element: (
          <AdminRoute>
            <AllOrderRequest /> 
          </AdminRoute>
        ),
      },
      {
        path: "MyOrderList",
        element: (
          <UserRoute>
            <MyOrderList />
          </UserRoute>
        ),
      },
    ],
  },
]);

export default router;
