import DashboardNavbar from "../../components/DashboardNavbar";
import Footer from "../../components/Footer";

import ServiceCard from "../../components/ServiceCard";
import ActivityCard from "../../components/ActivityCard";
import StatCard from "../../components/StatCard";
import { services } from "../../data/services";

import { FaPlus, FaClock, FaCheck, FaWrench } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <DashboardNavbar />

      <main className="flex-1 p-6 sm:p-10 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Dashboard</h1>

        <p className="text-gray-600 mb-10">
          Manage your vehicle service requests
        </p>

        {/* SERVICE CARDS */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<FaPlus />}
            title="Request Service"
            description="Get immediate roadside assistance"
            color="bg-blue-600"
          >
            <button
              onClick={() => navigate("/request")}
              className="mt-4 hover:underline"
            >
              Start request →
            </button>
          </ServiceCard>

          <ServiceCard
            icon={<FaClock />}
            title="Active Request"
            description="Toyota Camry 2020"
            color="bg-orange-500"
          >
            <div
              onClick={() => navigate("/status")}
              className="cursor-pointer group"
            >
              <p className="text-sm">Engine overheating</p>

              <p className="text-sm mb-4">ETA: 15 minutes</p>

              <div className="flex justify-between items-center">
                <span className="bg-orange-300 text-black px-3 py-1 rounded text-sm">
                  ON THE WAY
                </span>

                <HiArrowRight className="text-xl transition group-hover:translate-x-1" />
              </div>
            </div>
          </ServiceCard>

          <ServiceCard
            icon={<FaCheck />}
            title="Recent Services"
            description="3 completed services"
            color="bg-green-600"
          >
            <p className="mb-4">Last service: March 5, 2026</p>

            <button
              onClick={() => navigate("/history")}
              className="flex items-center gap-2 mt-4 group"
            >
              View History
              <HiArrowRight className="transition group-hover:translate-x-1" />
            </button>
          </ServiceCard>
        </div>

        {/* RECENT ACTIVITY */}

        <div className="flex justify-between items-center mt-16 mb-6">
          <h2 className="text-2xl font-bold">Recent Activity</h2>

          <button
            onClick={() => navigate("/history")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            View All →
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ActivityCard key={service.id} service={service} />
          ))}
        </div>

        {/* STATS */}

        <div className="grid gap-6 md:grid-cols-3 mt-10">
          <StatCard
            title="Total Requests"
            value="3"
            icon={<FaWrench />}
            color="bg-blue-100"
          />

          <StatCard
            title="Total Spent"
            value="$245"
            icon={<FaCheck />}
            color="bg-green-100"
          />

          <StatCard
            title="Avg Response"
            value="8 min"
            icon={<FaClock />}
            color="bg-orange-100"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
