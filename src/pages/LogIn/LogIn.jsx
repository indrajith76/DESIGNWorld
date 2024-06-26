import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import GoogleLogin from "../../components/GoogleLogin";
import ForgetPassModal from "../../components/ForgetPassModal";

const LogIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        navigate(from);
        toast.success("Successfully Login!");
        form.reset();
      })
      .catch((error) => toast.error(error.message.slice(22, 35)));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold ">
            <span className="text-sky-600">Log</span>
            <span className="text-orange-600 font-normal">In</span>
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="email" className="">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 border rounded-t-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email address"
                defaultValue={"admin@gmail.com"}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 border rounded-b-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
                defaultValue={"123456"}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <label
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="cursor-pointer font-medium text-blue-600 hover:text-blue-500"
              >
                Forget your password?
              </label>
              <ForgetPassModal />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log in
            </button>
          </div>
          <div className="text-sm text-center">
            <p>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default LogIn;
