import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";

const MyOrderList = () => {
  const { user } = useAuth();
  const [orderList, setOrderList] = useState([]);
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/myOrderList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, [user, trigger]);

  const deleteServiceHandler = (id) => {
    fetch(`http://localhost:3000/myOrderList/${id}`, {
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
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>

                  <td>{item.serviceName}</td>
                  <td className="text-lg">${item.price}</td>
                  <td className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => deleteServiceHandler(item._id)}
                      className="btn btn-sm btn-error text-white"
                    >
                      <RiDeleteBin5Fill />
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
