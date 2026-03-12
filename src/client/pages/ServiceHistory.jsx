import { useState } from "react";

import DashboardNavbar from "../../components/DashboardNavbar";
import Footer from "../../components/Footer";

import HistoryTable from "../../components/history/HistoryTable";
import HistoryStats from "../../components/history/HistoryStats";
import HistorySearch from "../../components/history/HistorySearch";

import { services } from "../../data/services";

export default function ServiceHistory() {
  const [search, setSearch] = useState("");

  const filteredServices = services.filter(
    (service) =>
      service.vehicle.toLowerCase().includes(search.toLowerCase()) ||
      service.problem.toLowerCase().includes(search.toLowerCase()) ||
      service.technician.toLowerCase().includes(search.toLowerCase()) ||
      service.type.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <DashboardNavbar />

      <main className="flex-1 max-w-7xl mx-auto p-6 md:p-10 w-full">
        <h1 className="text-3xl font-bold mb-2">Service History</h1>

        <p className="text-gray-500 mb-8">
          View all your past service requests and details
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* SEARCH BAR */}
          <div className="lg:col-span-2">
            <HistorySearch search={search} setSearch={setSearch} />
          </div>

          {/* TOTAL SERVICES */}
          <HistoryStats services={filteredServices} />
        </div>

        <HistoryTable services={filteredServices} />
      </main>

      <Footer />
    </div>
  );
}
