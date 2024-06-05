import React from "react";
import { useState, useEffect } from "react";
import { FaUserCircle, FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const AllClients = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
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
                  <button className="btn btn-sm btn-success text-white">
                    <FaRegEdit />
                  </button>
                  <button className="btn btn-sm btn-error text-white">
                    <RiDeleteBin5Fill />
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
