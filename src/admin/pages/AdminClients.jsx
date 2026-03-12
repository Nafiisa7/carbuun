import { useState } from "react";
import { clients as initialClients } from "../data/clients";
import { FaSearch, FaEye } from "react-icons/fa";

import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

export default function AdminClients({ toggleSidebar }) {
  const [clients] = useState(initialClients);
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const filtered = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1">
        <AdminTopbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-6">Clients</h1>

          {/* search */}

          <div className="bg-white border rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3 border rounded-lg px-3">
              <FaSearch className="text-gray-400" />

              <input
                type="text"
                placeholder="Search clients..."
                className="w-full p-3 outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* table */}

          <div className="bg-white rounded-xl border overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b text-gray-600">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Phone</th>
                  <th className="p-4 text-left">Joined</th>
                  <th className="p-4 text-left">Total Services</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((client) => (
                  <tr key={client.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium whitespace-nowrap">
                      {client.name}
                    </td>

                    <td className="p-4 text-gray-600 whitespace-nowrap">
                      {client.email}
                    </td>

                    <td className="p-4 whitespace-nowrap">{client.phone}</td>

                    <td className="p-4 whitespace-nowrap">{client.joined}</td>

                    <td className="p-4">{client.services}</td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          client.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {client.status}
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
      </div>
    </div>
  );
}
