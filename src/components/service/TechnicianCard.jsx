import { HiPhone } from "react-icons/hi";

export default function TechnicianCard() {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="font-semibold mb-4">Technician</h2>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full">
          JS
        </div>

        <div>
          <p className="font-medium">John Smith</p>
          <p className="text-sm text-gray-500">⭐ 4.9 · 248 jobs</p>
        </div>
      </div>

      <p className="text-gray-600 mb-4">(555) 123-4567</p>

      <button className="border rounded-lg w-full py-2 flex justify-center items-center gap-2">
        <HiPhone /> Call Technician
      </button>
    </div>
  );
}
