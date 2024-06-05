import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isUser] = useUserRole(user?.email);
  const navigate = useNavigate();

  const navData = [
    { text: "Home", link: "/" },
    {
      text: "Services",
      link: "/ServicesPage",
    },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navData.map((data, idx) => (
              <li key={idx}>
                <Link to={data.link}>{data.text}</Link>
              </li>
            ))}
            {!user && (
              <>
                <li>
                  <Link
                    to="/login"
                    className="btn btn-sm bg-orange-500 text-white"
                  >
                    LogIn
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="btn btn-sm bg-orange-500 text-white"
                  >
                    SignUp
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    onClick={() => logOut().then(() => navigate("/"))}
                    className="btn btn-sm bg-error text-white"
                  >
                    Log Out
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <p className="flex flex-col items-center gap-0 leading-none">
            <span>
              <strong className="text-sky-600">DESIGN</strong>
              <span className="text-orange-500">World</span>
            </span>
            <small className="leading-none text-gray-400 font-light">
              Limited
            </small>
          </p>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu items-center menu-horizontal px-1">
          {navData.map((data, idx) => (
            <li key={idx}>
              <Link to={data.link}>{data.text}</Link>
            </li>
          ))}
          {isUser === "admin" && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          {!user && (
            <>
              <li>
                <Link
                  to="/login"
                  className="btn btn-sm bg-orange-500 text-white"
                >
                  LogIn
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="btn btn-sm bg-orange-500 text-white"
                >
                  SignUp
                </Link>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <div className="dropdown dropdown-end dropdown-bottom rounded-full hover:bg-white">
                  <div tabIndex={0} className="avatar">
                    <div className="w-10 rounded-full ring ring-sky-600 ring-offset-base-100 ring-offset-2">
                      <img
                        className="hover:opacity-70"
                        src={
                          user?.photoURL ||
                          "https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"
                        }
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/dashboard/viewProfile">View Profile</Link>
                    </li>
                    <li>
                      <button
                        onClick={() => logOut()}
                        className="btn btn-sm bg-error text-white"
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
      <label htmlFor="my-drawer-2" className="btn absolute right-1 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
