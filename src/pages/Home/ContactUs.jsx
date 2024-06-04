import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., sending data to backend or displaying a confirmation message
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
            <p className="text-gray-600 mb-2">123 Main Street</p>
            <p className="text-gray-600 mb-2">Chittagong, Bangladesh</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-2">Phone: +880 123 456 7890</p>
            <p className="text-gray-600 mb-2">Email: info@example.com</p>
            <p className="text-gray-600 mb-2">Fax: +880 123 456 7890</p>
          </div>
        </div>
        <div className="mt-8">
          <form onSubmit={handleSubmit} className=" mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-32 px-4 py-2 mb-4 rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300"
              required
            ></textarea>
            <button type="submit" className="btn bg-orange-500 text-white">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
