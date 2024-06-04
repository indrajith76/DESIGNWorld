import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import { toast } from "react-hot-toast";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const googleLoginHandler = () => {
    googleLogin().then((result) => {
      toast.success("Successfully Login!");
    });
  };

  return (
    <button
      onClick={googleLoginHandler}
      className="w-full border py-2 rounded-md flex items-center justify-center gap-1 hover:bg-gray-100"
    >
      <FcGoogle className="text-2xl" />
      Sign with Google
    </button>
  );
};

export default GoogleLogin;
