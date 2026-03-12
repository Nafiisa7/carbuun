import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import RequestsTable from "../components/RequestsTable";
import { requests } from "../data/requests";
import { FaSearch } from "react-icons/fa";

export default function AdminRequests() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = requests.filter((r) => {
    const searchMatch =
      r.id.toLowerCase().includes(search.toLowerCase()) ||
      r.client.toLowerCase().includes(search.toLowerCase());

    const statusMatch = status === "All" || r.status === status;

    return searchMatch && statusMatch;
  });

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="flex-1">
        <AdminTopbar />

        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Service Requests</h1>

          <div className="flex gap-4 mb-6 flex-wrap">
            <div className="flex items-center bg-white border rounded-lg px-3 flex-1">
              <FaSearch className="text-gray-400" />

              <input
                type="text"
                placeholder="Search by ID, client, or technician..."
                className="p-3 outline-none w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              className="border rounded-lg px-4 py-3"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>

            <button className="bg-black text-white px-6 py-3 rounded-lg">
              Filter
            </button>
          </div>

          <RequestsTable data={filtered} />
        </div>
      </div>
    </div>
  );
}
