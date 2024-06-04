import React from "react";

const ClientTestimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      company: "Company A",
      testimonial: "We've been using their printing services for years, and they never disappoint! Excellent quality and fast turnaround times.",
    },
    {
      name: "Jane Smith",
      company: "Company B",
      testimonial: "I was amazed by the attention to detail in their prints. They truly care about delivering the best results for their clients.",
    },
    {
      name: "David Johnson",
      company: "Company C",
      testimonial: "Great customer service! They were responsive to all my inquiries and made sure I was satisfied with the final prints.",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">{testimonial.testimonial}</p>
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg" alt={testimonial.name} />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
