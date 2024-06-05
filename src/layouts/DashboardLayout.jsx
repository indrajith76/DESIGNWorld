import React from "react";
import Navbar from "../components/Navbar";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";

const DashboardLayout = () => {
  const { user } = useAuth();
  const [isUser, isUserLoading] = useUserRole(user?.email);

  return (
    <div>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5 border-t">
          {/* Page content here */}
          <Outlet /> 
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            {/* Admin  */}
            {isUser === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/AllServices">All Services</Link>
                </li>
                <li>
                  <Link to="/dashboard/AllClients">All Clients</Link>
                </li>
                <li>
                  <Link to="/dashboard/AllOrderRequest">
                    All Order Requests
                  </Link>
                </li>
                <li>
                  <Link to="/">Sales</Link>
                </li>
              </>
            )}
            {isUser === "user" && (
              <>
                <li>
                  <Link to="/dashboard/myOrderList">My Order List</Link>
                </li>
                <li>
                  <Link to="/dashboard/viewProfile">View Profile</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
