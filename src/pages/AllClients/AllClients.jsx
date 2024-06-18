import React from "react";
import { useState, useEffect } from "react";
import { FaUserCircle, FaBan } from "react-icons/fa";
import {toast} from 'react-hot-toast';

const AllClients = () => {
  const [users, setUsers] = useState([]);
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    fetch("https://design-world-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [trigger]);

  const userBanHandler = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then(() => {
        setTrigger(!trigger);
        toast.success("User Banned!")
      });
  };

  return (
    <div>
      <h1 className="text-2xl mb-10">All Clients</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-orange-600 text-white">
              <th>Sl.No</th>
              <th>Image</th>
              <th>Name</th>
              <th>email</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>
                  <FaUserCircle className="text-3xl" />
                </td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => userBanHandler(users._id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    Ban User
                    <FaBan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClients;
