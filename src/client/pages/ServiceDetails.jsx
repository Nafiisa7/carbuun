// import { useParams } from "react-router-dom";
import { services } from "../../data/services";

import DashboardNavbar from "../../components/DashboardNavbar";
import Footer from "../../components/Footer";

import ServiceOverview from "../../components/service/ServiceOverview";
import ServiceTimeline from "../../components/service/ServiceTimeline";
import TechnicianCard from "../../components/service/TechnicianCard";
import PaymentSummary from "../../components/service/PaymentSummary";
import SupportCard from "../../components/service/SupportCard";
import TechnicianReport from "../../components/service/TechnicianReport";

import { HiCheckCircle } from "react-icons/hi";
import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const { id } = useParams();

  const service = services.find((s) => s.id === Number(id));

  // 🔴 IMPORTANT FIX
  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Service not found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <DashboardNavbar />

      <main className="flex-1 max-w-7xl mx-auto p-6 md:p-10 w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Service Details</h1>

            <p className="text-gray-500">Request ID: #{service.id}</p>
          </div>

          <div
            className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm
  ${
    service.status === "Completed"
      ? "bg-green-100 text-green-700"
      : service.status === "On The Way"
        ? "bg-orange-100 text-orange-700"
        : "bg-blue-100 text-blue-700"
  }`}
          >
            <HiCheckCircle className="text-lg" />
            {service.status}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ServiceOverview service={service} />

            <ServiceTimeline />

            <TechnicianReport service={service} />
          </div>

          <div className="space-y-6">
            <TechnicianCard service={service} />

            <PaymentSummary service={service} />

            <SupportCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
