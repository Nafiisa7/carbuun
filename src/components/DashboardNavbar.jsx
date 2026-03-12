import { FaBell, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DashboardNavbar() {
  const navigate = useNavigate();

  function logout() {
    navigate("/");
  }

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white border-b">
      {/* Logo */}

      <div className="flex items-center gap-2">
        <span className="text-blue-600 text-xl">🔧</span>

        <h1 className="text-xl font-bold">AutoFix Pro</h1>
      </div>

      {/* Right side */}

      <div className="flex items-center gap-6">
        <div className="relative">
          <FaBell className="text-xl" />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded">
            3
          </span>
        </div>

        <button onClick={() => navigate("/profile")}>
          <FaUser className="text-xl text-blue-500" />
        </button>

        <button
          onClick={logout}
          className="border px-4 py-1 rounded hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
