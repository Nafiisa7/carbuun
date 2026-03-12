import { useNavigate } from "react-router-dom";
import { FaCar, FaMotorcycle } from "react-icons/fa";
import { HiOutlineTruck, HiArrowRight } from "react-icons/hi";

export default function ActivityCard({ service }) {
  const navigate = useNavigate();

  const getVehicleIcon = () => {
    if (service.type === "Car")
      return <FaCar className="text-blue-500 text-xl" />;

    if (service.type === "Motorcycle")
      return <FaMotorcycle className="text-purple-500 text-xl" />;

    if (service.type === "Truck")
      return <HiOutlineTruck className="text-orange-500 text-xl" />;
  };

  const getStatusColor = () => {
    if (service.status === "Completed") return "bg-green-100 text-green-700";

    if (service.status === "On The Way") return "bg-orange-100 text-orange-700";

    if (service.status === "In Progress") return "bg-blue-100 text-blue-700";
  };

  return (
    <div
      onClick={() => navigate(`/service/${service.id}`)}
      className="bg-white p-6 rounded-xl border hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer group"
    >
      <div className="flex justify-between items-center mb-4">
        {getVehicleIcon()}

        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor()}`}>
          {service.status}
        </span>
      </div>

      <p className="font-semibold text-lg">{service.type}</p>

      <p className="text-gray-500 text-sm">{service.vehicle}</p>

      <p className="mt-6 text-gray-700">{service.problem}</p>

      <hr className="my-4" />

      <div className="flex justify-between items-center">
        <span className="text-gray-500 text-sm">{service.date}</span>

        <div className="flex items-center gap-2 font-semibold">
          ${service.price}
          <HiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
        </div>
      </div>
    </div>
  );
}
