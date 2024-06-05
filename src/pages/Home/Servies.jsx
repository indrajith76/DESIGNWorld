import React from "react";

const Services = ({ services }) => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 text-gray-600">
                <i className={`${service.icon} fa-6x`}></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-xl font-bold mb-4">Price: ${service.price}</p>
              <div className="flex justify-center space-x-4">
                <button className="btn bg-orange-600 text-white">
                  Order Now
                </button>
                <button className="btn bg-slate-500 text-white">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
