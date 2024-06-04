import React from "react";

const WhyUs = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-check-circle text-3xl text-green-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-4">High-Quality Prints</h3>
            <p className="text-gray-600">We use the latest printing technology and top-quality materials to ensure crisp, vibrant prints that exceed your expectations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-stopwatch text-3xl text-blue-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-4">Fast Turnaround</h3>
            <p className="text-gray-600">We understand the importance of deadlines. With our efficient printing process, we ensure quick turnaround times for your projects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-handshake text-3xl text-yellow-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-4">Exceptional Service</h3>
            <p className="text-gray-600">Our dedicated team provides personalized service, guiding you through every step of the printing process and ensuring your satisfaction.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-lock text-3xl text-purple-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-4">Secure Packaging</h3>
            <p className="text-gray-600">We take care of your prints from production to delivery. Our secure packaging ensures your prints arrive safely and in pristine condition.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
