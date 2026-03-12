import { FaStar, FaEdit, FaTrash } from "react-icons/fa";

export default function TechnicianTable({ data, onEdit, onDelete }) {
  const statusColor = (status) => {
    if (status === "Online") return "bg-green-500 text-white";
    return "bg-gray-200 text-gray-700";
  };

  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm table-auto">
          <thead className="bg-gray-50 border-b text-gray-600">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Specialization</th>
              <th className="p-4 text-left">Rating</th>
              <th className="p-4 text-left">Jobs</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((tech) => (
              <tr key={tech.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium whitespace-nowrap">
                  {tech.name}
                </td>

                <td className="p-4 whitespace-nowrap text-gray-600">
                  {tech.email}
                </td>

                <td className="p-4 whitespace-nowrap">{tech.phone}</td>

                <td className="p-4 whitespace-nowrap  ">
                  {tech.specialization}
                </td>

                <td className="p-4 flex items-center gap-1">
                  <FaStar className="text-yellow-400" />

                  {tech.rating}
                </td>

                <td className="p-4">{tech.jobs}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${statusColor(
                      tech.status,
                    )}`}
                  >
                    {tech.status}
                  </span>
                </td>

                <td className="p-4 flex gap-4">
                  <button
                    onClick={() => onEdit(tech)}
                    className="text-gray-600 hover:text-black"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => onDelete(tech)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
