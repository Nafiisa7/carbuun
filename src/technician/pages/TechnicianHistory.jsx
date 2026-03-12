import { useState } from "react";
import TechnicianSidebar from "../components/TechnicianSidebar";
import TechnicianTopbar from "../components/TechnicianTopbar";
import { historyJobs } from "../data/historyData";
import { FaSearch } from "react-icons/fa";

export default function TechnicianHistory() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = historyJobs.filter(
    (job) =>
      job.client.toLowerCase().includes(search.toLowerCase()) ||
      job.vehicle.toLowerCase().includes(search.toLowerCase()) ||
      job.id.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <TechnicianSidebar open={sidebarOpen} />

      <div className="flex-1">
        <TechnicianTopbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="p-6 md:p-8 max-w-6xl mx-auto">
          {/* Title */}

          <h1 className="text-2xl font-bold mb-6">Job History</h1>

          {/* Search */}

          <div className="relative mb-6">
            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-xl bg-white"
            />
          </div>

          {/* Job Cards */}

          <div className="space-y-4">
            {filtered.map((job) => (
              <div key={job.id} className="bg-white border rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* ID + Status */}

                  <div className="flex items-center gap-3">
                    <h2 className="font-semibold">{job.id}</h2>

                    <span
                      className={`text-xs px-3 py-1 rounded-full whitespace-nowrap
                      ${
                        job.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {job.status}
                    </span>
                  </div>

                  {/* Grid Info */}

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm w-full">
                    <div>
                      <p className="text-gray-500">Client</p>
                      <p className="font-medium">{job.client}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Vehicle</p>
                      <p className="font-medium">{job.vehicle}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Date</p>
                      <p className="font-medium">{job.date}</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Earnings</p>

                      <p
                        className={`font-medium
                        ${
                          job.earnings === "Pending"
                            ? "text-green-600"
                            : "text-gray-900"
                        }`}
                      >
                        {job.earnings}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="text-center text-gray-500 py-10">
                No jobs found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
