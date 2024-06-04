import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/">Add Services</Link>
            </li>
            <li>
              <Link to="/">All Clients</Link>
            </li>
            <li>
              <Link to="/">All Order Requests</Link>
            </li>
            <li>
              <Link to="/">Sales</Link>
            </li>

            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
