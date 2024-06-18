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
import Loader from "../../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://design-world-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Banner />
          <Services services={services} />
          <Clients />
          <ProjectDelivery />
          <ClientTestimonials />
          <WhyUs />
          <ContactUs />
        </div>
      )}
    </>
  );
};

export default Home;
