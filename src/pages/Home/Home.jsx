import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Banner from "../../components/Banner";
import Clients from "./Clients";
import ClientTestimonials from "./ClientTestimonials";
import ContactUs from "./ContactUs";
import ProjectDelivery from "./ProjectDelivery";
import Services from "./Servies";
import WhyUs from "./WhyUs";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://design-world-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner />
      <Services services={services} />
      <Clients />
      <ProjectDelivery />
      <ClientTestimonials />
      <WhyUs />
      <ContactUs />
    </div>
  );
};

export default Home;
