import React from "react";

const Clients = () => {
  const clients = [
    { name: "Company A", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9MwvqQSthLWHSPTZI-aLxHlTnHQLFwbXbfg&s" },
    { name: "Company B", logo: "https://seeklogo.com/images/C/chittagong-port-authority-logo-792C03C3F5-seeklogo.com.png" },
    { name: "Company C", logo: "https://gfanasiapacific.org/wp-content/uploads/2022/03/BRAC-Logo-Transparent-16-9.png" },
    { name: "Company D", logo: "https://www.bssnews.net/assets/news_photos/2023/09/25/image-149272-1695649834.jpg" },
    { name: "Company E", logo: "https://epicpl.com/wp-content/uploads/2022/06/epic-logo.png" },
    { name: "Company F", logo: "https://ctgpowernet.ispdigital.cloud/Images/ctgpowernet.ispdigital.cloud/Company/power%20net%20(1)_570df289-af5d-412d-9c82-5bb162435dea.png" },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">Our Clients</h2>
        <p className="mb-10 text-gray-600">We are proud to work with some of the best in the industry.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={client.logo} alt={client.name} className="h-24 w-24 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
