import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaWrench,
  FaUsers,
  FaCreditCard,
  FaCog,
} from "react-icons/fa";

export default function AdminSidebar({ open, setOpen }) {
  const link =
    "flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition";

  const active = "bg-blue-800";

  return (
    <>
      {/* Mobile Overlay */}

      {open && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
        fixed md:static z-40
        bg-blue-700 text-white
        w-64 min-h-screen p-6
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <h1 className="text-xl font-bold mb-10 flex items-center gap-2">
          🔧 RepairConnect
        </h1>

        <nav className="space-y-2">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            <FaTachometerAlt />
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/requests"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            <FaClipboardList />
            Requests
          </NavLink>

          <NavLink
            to="/admin/technicians"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            <FaWrench />
            Technicians
          </NavLink>

          <NavLink
            to="/admin/clients"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            <FaUsers />
            Clients
          </NavLink>

          <NavLink
            to="/admin/payments"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            <FaCreditCard />
            Payments
          </NavLink>

          <NavLink
            to="/admin/settings"
            className={({ isActive }) => `${link} ${isActive ? active : ""}`}
          >
            <FaCog />
            Settings
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
