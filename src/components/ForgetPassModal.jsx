import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const ForgetPassModal = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const handleForgetPass = () => {
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((e) => toast.error(e.message.slice(22, 35)));
    document.getElementById("my_modal_3").close();
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Forget password!</h3>
        <div className="my-6">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="input input-bordered w-full mt-2 mb-5"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleForgetPass}
            type="button"
            className="mx-auto flex btn bg-blue-500 text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ForgetPassModal;
