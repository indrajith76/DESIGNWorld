import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const ViewProfile = () => {
  const { user, changePassword } = useAuth();
  const [editStatus, setEditStatus] = useState(true);
  const [pass, setPass] = useState(null);

  const changePasswordHandler = (password) => {
    changePassword(password).then((r) => {
      toast.success("Password changed successfully");
    });
  };

  console.log(pass);

  return (
    <div className="w-96 mx-auto">
      <img
        className="mb-5 w-64 mx-auto rounded-full border"
        src={
          user?.photoURL ||
          "https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"
        }
        alt=""
      />
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="input input-bordered w-full mb-5"
          value={user.displayName}
          disabled={editStatus}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="input input-bordered w-full mb-5"
          value={user.email}
          disabled
        />
        <label htmlFor="password">Change Password</label>
        <input
          id="password"
          className="input input-bordered w-full mb-5"
          placeholder={editStatus ? "********" : "Enter New Password"}
          onChange={(e) => setPass(e.target.value)}
          disabled={editStatus}
        />
        {editStatus && (
          <button
            onClick={() => setEditStatus(!editStatus)}
            className="btn bg-sky-600 text-white w-full"
          >
            Edit
          </button>
        )}
        {!editStatus && (
          <div className="flex justify-center">
            <button
              onClick={() => changePasswordHandler(pass)}
              className="btn text-white bg-sky-600"
            >
              Save
            </button>
            <button
              onClick={() => setEditStatus(!editStatus)}
              className="btn btn-error text-white"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProfile;
