import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useState } from "react";
import { useEffect } from "react";
import AddServiceModal from "../../components/AddServiceModal";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

const AllServices = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [trigger, setTrigger] = useState(true);      

  useEffect(() => {
    setLoading(true);
    fetch("https://design-world-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
        setLoading(false);
      });
  }, [trigger]);

  const deleteHandler = (id) => {
    setLoading(true);
    fetch(`https://design-world-server.vercel.app/services/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then(() => {
        setServices(!trigger);
        toast.success("Deleted Successfully!");
        setLoading(false); 
      });
  };

  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-2xl">AllServices</h1>
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="btn btn-sm bg-sky-700 text-white"
        >
          Add Service
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : (
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
              {services?.map((service, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td className="flex justify-center">
                    <i className={`${service?.icon} fa-3x`}></i>
                  </td>
                  <td>{service?.title}</td>
                  <td>{service?.description}</td>
                  <td className="text-lg">${service?.price}</td>
                  <td className="flex items-center justify-center gap-2">
                    <Link
                      to={`/dashboard/EditService/${service?._id}`}
                      className="btn btn-sm btn-success text-white"
                    >
                      <FaRegEdit />
                    </Link>
                    <button
                      onClick={() => deleteHandler(service?._id)}
                      className="btn btn-sm btn-error text-white"
                    >
                      <RiDeleteBin5Fill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <AddServiceModal trigger={trigger} setTrigger={setTrigger} />
    </div>
  );
};

export default AllServices;
