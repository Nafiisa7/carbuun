import { FaBars, FaBell } from "react-icons/fa";
import { HiBell } from "react-icons/hi";

export default function AdminTopbar({ toggleSidebar }) {
  return (
    <header className="bg-white border-b px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-xl" onClick={toggleSidebar}>
          <FaBars />
        </button>

        <h1 className="font-semibold text-lg">Admin Portal</h1>
      </div>
      <div className="flex items-center gap-4">
        <FaBell className="text-gray-500" />

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
            AD
          </div>

          <span className="hidden md:block">Admin</span>
        </div>
      </div>
    </header>
  );
}
