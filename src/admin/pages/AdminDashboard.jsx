import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import AdminStatCard from "../components/AdminStatCard";
import AdminActivity from "../components/AdminActivity";

import { adminStats, adminActivity } from "../data/adminData";

import {
  FaUsers,
  FaWrench,
  FaClock,
  FaFileAlt,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";
import { Navigate } from "react-router-dom";

export default function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  // protect admin page
  if (!user || user.role !== "admin") {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="flex-1">
        <AdminTopbar />

        <main className="p-8">
          <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AdminStatCard
              title="Total Clients"
              value={adminStats.clients}
              icon={<FaUsers />}
              color="bg-blue-100 text-blue-600"
            />

            <AdminStatCard
              title="Total Technicians"
              value={adminStats.technicians}
              icon={<FaWrench />}
              color="bg-green-100 text-green-600"
            />

            <AdminStatCard
              title="Active Requests"
              value={adminStats.activeRequests}
              icon={<FaClock />}
              color="bg-yellow-100 text-yellow-600"
            />

            <AdminStatCard
              title="Completed Services"
              value={adminStats.completedServices}
              icon={<FaFileAlt />}
              color="bg-purple-100 text-purple-600"
            />

            <AdminStatCard
              title="Total Revenue"
              value={`$${adminStats.revenue}`}
              icon={<FaDollarSign />}
              color="bg-green-100 text-green-600"
            />

            <AdminStatCard
              title="Completion Rate"
              value={`${adminStats.completionRate}%`}
              icon={<FaChartLine />}
              color="bg-indigo-100 text-indigo-600"
            />
          </div>

          <AdminActivity activities={adminActivity} />
        </main>
      </div>
    </div>
  );
}
