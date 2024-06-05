import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard";

const Services = ({ services }) => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard service={service} key={index} />
          ))}
        </div>
        <button className="btn bg-orange-600 text-white mt-10 ">
          <Link to="/ServicesPage">See More</Link>
        </button>
      </div>
    </div>
  );
};

export default Services;
