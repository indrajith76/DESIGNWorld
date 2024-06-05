import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useState } from "react";
import { useEffect } from "react";

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-2xl">AllServices</h1>
        <button className="btn btn-sm bg-sky-700 text-white">
          Add Service
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-orange-600 text-white">
              <th>Sl.No</th>
              <th>Service Icon/Image</th>
              <th>Service Name</th>
              <th>description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td className="flex justify-center">
                  <i className={`${service.icon} fa-3x`}></i>
                </td>
                <td>{service.title}</td>
                <td>{service.description}</td>
                <td className="text-lg">${service.price}</td>
                <td className="flex items-center justify-center gap-2">
                  <button className="btn btn-sm btn-success text-white">
                    <FaRegEdit />
                  </button>
                  <button className="btn btn-sm btn-error text-white">
                    <RiDeleteBin5Fill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllServices;