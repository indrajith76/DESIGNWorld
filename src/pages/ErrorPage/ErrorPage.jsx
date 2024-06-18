import React from "react";
import ERRORAnimation from "../../assets/ERRORAnimation.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen my-auto flex flex-col justify-center">
      <Player
        autoplay
        loop
        src={ERRORAnimation}
        style={{ height: "300px", width: "300px" }}
      />
      <Link to="/" className="text-orange-600 text-center underline text-2xl ">
        Back to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
