import { HiOutlineSearch } from "react-icons/hi";

export default function HistorySearch({ search, setSearch }) {
  return (
    <div className="bg-white border rounded-2xl p-6">
      <div className="flex items-center gap-3 bg-gray-50 border rounded-xl px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
        <HiOutlineSearch className="text-gray-400 text-xl" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by vehicle, problem, or technician..."
          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>
  );
}
