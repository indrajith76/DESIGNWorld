import React from "react";
import Banner from "../../components/Banner";
import Clients from "./Clients";
import ClientTestimonials from "./ClientTestimonials";
import ContactUs from "./ContactUs";
import ProjectDelivery from "./ProjectDelivery";
import Services from "./Servies";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Clients />
      <ProjectDelivery />
      <ClientTestimonials />
      <WhyUs />
      <ContactUs />
      
    </div>
  );
};

export default Home;
