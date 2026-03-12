import { FaEye, FaUserPlus } from "react-icons/fa";

export default function RequestsTable({ data }) {
  const statusColor = (status) => {
    if (status === "Pending") return "bg-yellow-400 text-white";
    if (status === "In Progress") return "bg-blue-500 text-white";
    if (status === "Completed") return "bg-green-500 text-white";
  };

  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          {/* HEADER */}

          <thead className="bg-gray-50 border-b text-gray-600">
            <tr>
              <th className="p-4 text-left">Request ID</th>
              <th className="p-4 text-left">Client</th>
              <th className="p-4 text-left">Technician</th>
              <th className="p-4 text-left">Vehicle</th>
              <th className="p-4 text-left">Problem</th>
              <th className="p-4 text-left">Deposit</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          {/* BODY */}

          <tbody>
            {data.map((req) => (
              <tr key={req.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4 font-medium">{req.id}</td>

                <td className="p-4">{req.client}</td>

                <td className="p-4">
                  {req.technician ? (
                    <div className="flex items-center gap-2">
                      <span>{req.technician}</span>

                      <button className="text-blue-600 text-sm hover:underline">
                        Change
                      </button>
                    </div>
                  ) : (
                    <button className="flex items-center gap-2 border px-3 py-1.5 rounded-lg hover:bg-gray-100">
                      <FaUserPlus />
                      Assign Technician
                    </button>
                  )}
                </td>

                <td className="p-4">{req.vehicle}</td>

                <td className="p-4">{req.problem}</td>

                <td className="p-4 font-medium">${req.deposit}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-xs whitespace-nowrap rounded-full ${statusColor(
                      req.status,
                    )}`}
                  >
                    {req.status}
                  </span>
                </td>

                <td className="p-4">
                  <button className="text-gray-600 hover:text-black">
                    <FaEye />
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
