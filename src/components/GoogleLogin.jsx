import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const saveUserInfo = (data) => {
    fetch("https://design-world-server.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const googleLoginHandler = () => {
    googleLogin().then((result) => {
      saveUserInfo({ name: result.user.displayName, email: result.user.email });
      navigate("/");
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
