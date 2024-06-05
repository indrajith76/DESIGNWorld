import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const AllOrderRequest = () => {
  const [allOrderReq, setAllOrderReq] = useState([]);

  useEffect(() => {
    fetch("https://design-world-server.vercel.app/AllOrderList")
      .then((res) => res.json())
      .then((data) => setAllOrderReq(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
  };

  return (
    <div>
      <div className="mb-10 md:flex items-center justify-between">
        <h1 className="text-2xl mb-10">All Order Request</h1>
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            name="search"
            className="input input-bordered input-sm"
          />
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
              <th>Location</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrderReq.map((item, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>

                <td>{item?.userName}</td>
                <td>{item?.email}</td>
                <td>{item?.serviceName}</td>
                <td>{item?.deliveryLocation}</td>
                <td className="text-lg">${item?.price}</td>
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
