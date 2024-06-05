import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const AllOrderRequest = () => {
  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-2xl mb-10">All Order Request</h1>
        <form className="flex">
          <input type="text" className="input input-bordered input-sm" />
          <button type="submit" className="btn btn-sm bg-sky-700 text-white">
            Search
          </button>
        </form>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-orange-600 text-white">
              <th>Sl.No</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((service, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td className="flex justify-center">
                  <i className={`${service.icon} fa-3x`}></i>
                </td>
                <td>{service.title}</td>
                <td>{service.description}</td>
                <td className="text-lg">${service.price}</td>
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

export default AllOrderRequest;
