import React from "react";

const Services = () => {
  const services = [
    {
      title: "Business Cards",
      description:
        "High-quality business cards that leave a lasting impression. Customize with your logo and brand colors.",
      icon: "fas fa-id-card",
      price: "$50 for 100 cards",
    },
    {
      title: "Brochures & Flyers",
      description:
        "Beautifully designed brochures and flyers to promote your business. Available in various sizes and finishes.",
      icon: "fas fa-file-alt",
      price: "Starting at $100",
    },
    {
      title: "Posters & Banners",
      description:
        "Vibrant posters and banners for events, promotions, and advertising. Large format printing available.",
      icon: "fas fa-image",
      price: "Starting at $75",
    },
    {
      title: "Custom T-Shirts",
      description:
        "Personalized t-shirts with your designs. Perfect for events, teams, and promotional giveaways.",
      icon: "fas fa-tshirt",
      price: "$20 per shirt",
    },
    {
      title: "Personalized Gifts",
      description:
        "Unique, custom-printed gifts for special occasions. Mugs, photo books, and more.",
      icon: "fas fa-gift",
      price: "Starting at $25",
    },
    {
      title: "Signage",
      description:
        "Professional signage for businesses and events. Durable materials for indoor and outdoor use.",
      icon: "fas fa-sign",
      price: "Starting at $150",
    },
  ];

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
              <p className="text-xl font-bold mb-4">{service.price}</p>
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
