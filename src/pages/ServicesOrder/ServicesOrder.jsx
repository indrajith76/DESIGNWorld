import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";

const ServicesOrder = () => {
  const { user } = useAuth();
  const ServiceData = useLoaderData();
  const navigate = useNavigate();

  const orderSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!user) {
      return navigate("/login");
    }

    const userName = form.userName.value;
    const email = form.email.value;
    const serviceId = ServiceData._id;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const deliveryLocation = form.deliveryLocation.value;

    const data = {
      userName,
      email,
      serviceName,
      serviceId,
      price,
      deliveryLocation,
    };

    fetch("http://localhost:3000/AllOrderList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        navigate("/dashboard/myOrderList");
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-center">Order Details</h1>
      <form onSubmit={orderSubmitHandler} className="mt-10 mb-28">
        <div className="grid grid-cols-2 w-[50%] mx-auto gap-5 mb-7 ">
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              value={user?.displayName}
              disabled
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              value={user?.email}
              disabled
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="serviceName"
              className="block text-sm font-medium text-gray-700"
            >
              Service Name
            </label>
            <input
              type="text"
              id="serviceName"
              name="serviceName"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              value={ServiceData?.title}
              disabled
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              id="price"
              name="price"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              value={ServiceData.price}
              disabled
            />
          </div>

          <div>
            <label
              htmlFor="deliveryLocation"
              className="block text-sm font-medium text-gray-700"
            >
              Delivery Location
            </label>
            <input
              type="text"
              id="deliveryLocation"
              name="deliveryLocation"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              required
            />
          </div>
        </div>
        <div className="w-[25%] mx-auto">
          <button
            type="submit"
            className="w-full bg-orange-600 text-white p-2 rounded-md shadow-md hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServicesOrder;
