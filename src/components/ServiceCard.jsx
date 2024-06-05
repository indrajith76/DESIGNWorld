import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="mb-4 text-gray-600">
          <i className={`${service.icon} fa-6x`}></i>
        </div>
        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <p className="text-xl font-bold mb-4">Price: ${service.price}</p>
        <div className="flex justify-center space-x-4">
          <Link
            className="btn bg-orange-600 text-white"
            to={`/Services/${service._id}`}
          >
            Order Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
