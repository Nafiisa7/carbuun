import { useNavigate } from "react-router-dom";

import {
  HiOutlineTruck,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineEye,
} from "react-icons/hi";

export default function HistoryTable({ services }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border rounded-xl overflow-x-auto">
      <table className="w-full text-left">
        <thead className="border-b text-gray-500 text-sm">
          <tr>
            <th className="p-4">DATE</th>
            <th>VEHICLE</th>
            <th>PROBLEM</th>
            <th>TECHNICIAN</th>
            <th>STATUS</th>
            <th>AMOUNT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {services.map((service) => (
            <tr key={service.id} className="border-b hover:bg-gray-50">
              <td className="p-4 flex items-center gap-2">
                <HiOutlineCalendar />
                {service.date}
              </td>

              <td>
                <div className="flex items-center gap-2">
                  <HiOutlineTruck />
                  <div>
                    <p className="font-medium">{service.type}</p>
                    <p className="text-sm text-gray-500">{service.vehicle}</p>
                  </div>
                </div>
              </td>

              <td>{service.problem}</td>

              <td className="flex items-center gap-2">
                <HiOutlineUser />
                {service.technician}
              </td>

              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  COMPLETED
                </span>
              </td>

              <td className="font-medium">${service.price}</td>

              <td>
                <button
                  onClick={() => navigate(`/service/${service.id}`)}
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
                >
                  <HiOutlineEye />
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
