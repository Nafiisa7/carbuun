import { FaSearch } from "react-icons/fa";

export default function RequestsFilter({
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      {/* search */}

      <div className="flex items-center bg-gray-100 rounded-lg px-3 flex-1">
        <FaSearch className="text-gray-400" />

        <input
          type="text"
          placeholder="Search by ID, client, or technician..."
          className="bg-transparent p-3 w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* filter */}

      <select
        className="border rounded-lg px-4 py-3"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <button className="bg-black text-white px-6 py-3 rounded-lg">
        Filter
      </button>
    </div>
  );
}
