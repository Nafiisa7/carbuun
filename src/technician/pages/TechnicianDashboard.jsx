import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TechnicianSidebar from "../components/TechnicianSidebar";
import TechnicianTopbar from "../components/TechnicianTopbar";
import { technicianStats } from "../data/technicianData";
import { useTechnician } from "../context/TechnicianContext";

export default function TechnicianDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const { jobs, requests, online, setOnline, acceptRequest, declineRequest } =
    useTechnician();

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <TechnicianSidebar open={sidebarOpen} />

      <div className="flex-1">
        <TechnicianTopbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          {/* availability */}

          <div className="flex justify-end mb-6">
            <button
              onClick={() => setOnline(!online)}
              className={`px-4 py-1 rounded-full text-sm
              ${online ? "bg-green-500 text-white" : "bg-gray-300"}`}
            >
              {online ? "Online" : "Offline"}
            </button>
          </div>

          {/* stats */}

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white border rounded-xl p-6">
              <p className="text-gray-500 text-sm">Total Earnings</p>
              <h2 className="text-2xl font-bold">
                ${technicianStats.earnings}
              </h2>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <p className="text-gray-500 text-sm">Completed Jobs</p>
              <h2 className="text-2xl font-bold">
                {technicianStats.completed}
              </h2>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <p className="text-gray-500 text-sm">Active Jobs</p>
              <h2 className="text-2xl font-bold">{jobs.length}</h2>
            </div>
          </div>

          {/* assigned jobs */}

          <div className="bg-white border rounded-xl p-6 mb-6">
            <h2 className="font-semibold mb-4">Assigned Jobs</h2>

            {jobs.map((job) => (
              <div key={job.id} className="border rounded-lg p-4 mb-4">
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="font-medium">{job.id}</p>
                    <p className="text-gray-500">{job.client}</p>
                  </div>

                  <div>
                    <p className="text-gray-500">Vehicle</p>
                    <p>{job.vehicle}</p>
                  </div>

                  <div>
                    <p className="text-gray-500">Problem</p>
                    <p>{job.problem}</p>
                  </div>

                  <div>
                    <p className="text-gray-500">Distance</p>
                    <p>{job.distance}</p>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/technician/job/${job.id}`)}
                  className="bg-black text-white w-full py-2 rounded mt-4"
                >
                  View Job
                </button>
              </div>
            ))}
          </div>

          {/* incoming */}

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h2 className="font-semibold mb-4">Incoming Service Requests</h2>

            {requests.map((r) => (
              <div key={r.id} className="border rounded-lg p-4 mb-4 bg-white">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium">{r.id}</p>
                    <p>{r.client}</p>
                  </div>

                  <div>
                    <p>{r.vehicle}</p>
                    <p className="text-gray-500">{r.problem}</p>
                  </div>

                  <div>
                    <p>{r.distance}</p>
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => acceptRequest(r)}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Accept Request
                  </button>

                  <button
                    onClick={() => declineRequest(r.id)}
                    className="border px-4 py-2 rounded"
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
