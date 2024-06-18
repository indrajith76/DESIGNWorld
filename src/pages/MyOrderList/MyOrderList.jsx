import {
  BsCheckCircleFill,
  BsExclamationCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import React from "react";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrderList = () => {
  const { user } = useAuth();
  const [orderList, setOrderList] = useState([]);
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    fetch(`https://design-world-server.vercel.app/myOrderList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, [user, trigger]);

  const deleteServiceHandler = (id) => {
    fetch(`https://design-world-server.vercel.app/myOrderList/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setTrigger(!trigger));
  };

  return (
    <div>
      <h1 className="text-3xl mb-10">My Order List</h1>

      {orderList.length !== 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-orange-600 text-white">
                <th>Sl.No</th>
                <th>Service Name</th>
                <th>Price</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>

                  <td>{item.serviceName}</td>
                  <td className="text-lg">${item.price}</td>
                  <td>
                    {item?.status ? (
                      <p className="flex items-center justify-center gap-2">
                        <BsCheckCircleFill className="text-green-500 text-xl" />
                        Order Accepted
                      </p>
                    ) : (
                      <p className="flex items-center justify-center gap-2">
                        <BsExclamationCircleFill className="text-red-500 text-xl" />
                        Pending
                      </p>
                    )}
                  </td>
                  <td className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => deleteServiceHandler(item._id)}
                      className="btn btn-sm btn-error text-white"
                    >
                      <BsFillXCircleFill />
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2>Orders Not Found!</h2>
      )}
    </div>
  );
};

export default MyOrderList;
