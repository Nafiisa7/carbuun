import DashboardNavbar from "../../components/DashboardNavbar";
import Footer from "../../components/Footer";

import StatusTimeline from "../../components/status/StatusTimeline";
import TechnicianPanel from "../../components/status/TechnicianPanel";
import RequestDetails from "../../components/status/RequestDetails";

export default function ServiceStatus({ service }) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <DashboardNavbar />

      <main className="flex-1 max-w-7xl mx-auto p-6 md:p-10 w-full">
        <h1 className="text-3xl font-bold mb-2">Service Status</h1>

        <p className="text-gray-500 mb-8">
          Track your service request in real-time
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <StatusTimeline service={service} />
          </div>

          <div className="space-y-6">
            <TechnicianPanel service={service} />
            <RequestDetails service={service} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
