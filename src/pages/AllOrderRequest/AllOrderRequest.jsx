import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { BsArrowRepeat } from "react-icons/bs";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import Loader from "../../components/Loader";

const AllOrderRequest = () => {
  const [loading, setLoading] = useState(false);
  const [allOrderReq, setAllOrderReq] = useState([]);
  const [searchType, setSearchType] = useState("email");
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://design-world-server.vercel.app/AllOrderList")
      .then((res) => res.json())
      .then((data) => {
        setAllOrderReq(data);
        setLoading(false);
      });
  }, [trigger]);

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;

    setLoading(true);
    fetch(
      `https://design-world-server.vercel.app/AllOrderList?${searchType}=${text}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllOrderReq([]);
        setAllOrderReq(data);
        setLoading(false);
      });
  };

  const acceptOrderHandler = (id) => {
    setLoading(true);
    fetch(`https://design-world-server.vercel.app/AllOrderList/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTrigger(!trigger);
        toast.success("Accepted Order Request!");
      });
  };

  const deleteOrderHandler = (id) => {
    fetch(`https://design-world-server.vercel.app/myOrderList/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setTrigger(!trigger);
        toast.success("Order Deleted Successfully!");
      });
  };

  return (
    <div>
      <div className="mb-10 md:flex items-center justify-between">
        <h1 className="text-2xl mb-10">All Order Request</h1>
        <form onSubmit={handleSearch} className="flex gap-2">
          <select
            name="searchType"
            id="searchType"
            className="select select-sm select-bordered"
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="email">Email</option>
            <option value="serviceName">Service Name</option>
            <option value="location">Location</option>
          </select>
          <input
            type="text"
            name="search"
            className="input input-bordered input-sm"
            placeholder={`Enter the ${searchType}`}
          />
          <button type="submit" className="btn btn-sm bg-sky-700 text-white">
            Search
          </button>
          <button
            type="button"
            className="flex items-center gap-1 btn btn-sm btn-outline"
            onClick={() => setTrigger(!trigger)}
          >
            <BsArrowRepeat className="font-bold text-lg" /> Reload
          </button>
        </form>
      </div>

      {loading ? (
        <Loader />
      ) : (
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
                <th className="text-center">Action</th>
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
                    {item?.status ? (
                      <p className="flex items-center gap-2 text-green-600">
                        <FaRegCheckCircle className="text-xl text-green-100 bg-green-500 rounded-full drop-shadow-xl shadow-green-400" />{" "}
                        Order Accepted
                      </p>
                    ) : (
                      <>
                        <button
                          onClick={() => acceptOrderHandler(item._id)}
                          className="btn btn-sm btn-success text-white"
                        >
                          <FaRegCheckCircle className="text-xl" /> Accept Order
                        </button>
                        <button
                          onClick={() => deleteOrderHandler(item._id)}
                          className="btn btn-sm btn-error text-white"
                        >
                          <FaRegTimesCircle className="text-xl" /> Decline
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllOrderRequest;
