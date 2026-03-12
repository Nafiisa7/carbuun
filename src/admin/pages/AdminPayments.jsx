import { useState } from "react";
import { payments as initialPayments } from "../data/payments";
import { FaSearch } from "react-icons/fa";

import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

export default function AdminPayments() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [payments] = useState(initialPayments);

  const filtered = payments.filter((p) =>
    p.id.toLowerCase().includes(search.toLowerCase()),
  );

  const totalCarb = payments.reduce((a, b) => a + b.carbunFee, 0);
  const totalRepair = payments.reduce((a, b) => a + b.repairCost, 0);
  const revenue = totalCarb + totalRepair;

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1">
        <AdminTopbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-6">Payments</h1>

          {/* search */}

          <div className="bg-white border rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3 border rounded-lg px-3">
              <FaSearch className="text-gray-400" />

              <input
                type="text"
                placeholder="Search payments..."
                className="w-full p-3 outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* cards */}

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white border rounded-xl p-6">
              <p className="text-gray-500 text-sm">Total Carbun Fees</p>
              <h2 className="text-2xl font-bold mt-2">${totalCarb}</h2>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <p className="text-gray-500 text-sm">Total Repair Payments</p>
              <h2 className="text-2xl font-bold mt-2">${totalRepair}</h2>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <p className="text-gray-500 text-sm">Platform Revenue</p>
              <h2 className="text-2xl font-bold mt-2 text-green-600">
                ${revenue}
              </h2>
            </div>
          </div>

          {/* table */}

          <div className="bg-white rounded-xl border overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b text-gray-600">
                <tr>
                  <th className="p-4 text-left">Payment ID</th>
                  <th className="p-4 text-left">Request ID</th>
                  <th className="p-4 text-left">Carbun Fee</th>
                  <th className="p-4 text-left">Repair Cost</th>
                  <th className="p-4 text-left">Total Amount</th>
                  <th className="p-4 text-left">Method</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((p) => (
                  <tr key={p.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 whitespace-nowrap font-medium">
                      {p.id}
                    </td>

                    <td className="p-4 whitespace-nowrap">{p.requestId}</td>

                    <td className="p-4">${p.carbunFee}</td>

                    <td className="p-4">${p.repairCost}</td>

                    <td className="p-4 font-medium">
                      ${p.carbunFee + p.repairCost}
                    </td>

                    <td className="p-4">{p.method}</td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          p.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>

                    <td className="p-4 whitespace-nowrap">{p.date}</td>
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
