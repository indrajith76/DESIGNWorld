import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mx-auto ">
      <h2 className="text-3xl mt-5 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        {services.map((service, idx) => (
          <ServiceCard service={service} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
