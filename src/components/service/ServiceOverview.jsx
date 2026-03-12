import { HiOutlineTruck, HiOutlineLocationMarker } from "react-icons/hi";
import { FiCalendar, FiTool } from "react-icons/fi";

export default function ServiceOverview({ service }) {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h2 className="font-semibold mb-6">Service Overview</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex gap-3">
          <HiOutlineTruck className="text-gray-400 text-xl" />

          <div>
            <p className="text-sm text-gray-500">Vehicle</p>
            <p className="font-medium">{service.vehicle}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <FiCalendar className="text-gray-400 text-xl" />

          <div>
            <p className="text-sm text-gray-500">Date</p>
            <p className="font-medium">{service.date}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <HiOutlineLocationMarker className="text-gray-400 text-xl" />

          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium">{service.location}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <FiTool className="text-gray-400 text-xl" />

          <div>
            <p className="text-sm text-gray-500">Problem</p>
            <p className="font-medium">{service.problem}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
