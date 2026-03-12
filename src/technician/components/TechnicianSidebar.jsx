import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaHistory, FaUser } from "react-icons/fa";

export default function TechnicianSidebar({ open }) {
  const link =
    "flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition";

  const active = "bg-blue-800";

  return (
    <aside
      className={`fixed md:static z-40 w-64 bg-blue-700 text-white min-h-screen p-6 transform transition-transform
      ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      <h1 className="text-xl font-bold mb-10">🔧 RepairConnect</h1>

      <nav className="space-y-2">
        <NavLink
          to="/technician/dashboard"
          className={({ isActive }) => `${link} ${isActive ? active : ""}`}
        >
          <FaTachometerAlt />
          Dashboard
        </NavLink>

        <NavLink
          to="/technician/history"
          className={({ isActive }) => `${link} ${isActive ? active : ""}`}
        >
          <FaHistory />
          History
        </NavLink>

        <NavLink
          to="/technician/profile"
          className={({ isActive }) => `${link} ${isActive ? active : ""}`}
        >
          <FaUser />
          Profile
        </NavLink>
      </nav>
    </aside>
  );
}
