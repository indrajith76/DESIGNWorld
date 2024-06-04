import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import GoogleLogin from "../../components/GoogleLogin";

const SignUp = () => {
  const { createUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(name, email, password)
      .then((result) => {
        toast.success("Successfully Login!");
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold ">
            <span className="text-sky-600">Sign</span>
            <span className="text-orange-600 font-normal">Up</span>
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="">
              <label htmlFor="name" className="">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full mb-4 px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Full Name"
              />
            </div>
            <div className="">
              <label htmlFor="email" className="">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full mb-4 px-3 py-2 border focus: rounded-md focus:border-blue-500"
                placeholder="Email address"
              />
            </div>
            <div className="">
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full mb-4 px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign up
            </button>
          </div>
          <div className="text-sm text-center">
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Log in
              </Link>
            </p>
          </div>
        </form>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default SignUp;
