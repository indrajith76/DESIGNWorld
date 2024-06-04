import React from "react";

const ProjectDelivery = () => {
  const deliveries = [
    {
      company: "Company A",
      image:
        "https://vertexmedia.com.au/wp-content/uploads/2022/01/Qualilty-Business-Cards-Discount-Printing-Australia-Express-Delivery-Australia-Wide-Premium-Quality-Accountants-cards.jpg",
      title: "Business Cards Delivery",
      description:
        "Delivery of high-quality business cards to Company A's headquarters.",
    },
    {
      company: "Company B",
      image:
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/180072493/original/c653ca6ca3dd57f4a66b7d02f08e54c08eb5a397/design-professional-and-unique-flyer-or-brochure.jpg",
      title: "Brochures & Flyers Delivery",
      description:
        "Delivery of promotional brochures and flyers to Company B's office.",
    },
    {
      company: "Company C",
      image:
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/193765624/original/694de2b810784d394ce968eecba85b96ad9dc7ad/design-food-flyer-poster-or-banner-for-restaurant.jpg",
      title: "Posters & Banners Delivery",
      description:
        "Delivery of event posters and banners to Company C's event venue.",
    },
    {
      company: "Company D",
      image:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/308470097/original/765dbe71b17e7726d55afcc2fcf8ab22917ceb11/do-custom-and-typography-t-shirt-design.png",
      title: "Custom T-Shirts Delivery",
      description:
        "Delivery of custom-printed t-shirts to Company D's marketing team.",
    },
    {
      company: "Company E",
      image:
        "https://www.sendbestgift.com/blog/wp-content/uploads/List-of-Occasion-When-Personalized-Gifts-Delivery-in-Pune-are-Helpful-to-Win-Heart.jpg",
      title: "Personalized Gifts Delivery",
      description:
        "Delivery of personalized gifts to Company E's loyal customers.",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Project Delivery Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliveries.map((delivery, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <img
                src={delivery.image}
                alt={delivery.title}
                className="object-cover w-full h-64"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{delivery.title}</h3>
                <p className="text-gray-600 mb-4">{delivery.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDelivery;
