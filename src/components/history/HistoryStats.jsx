import { HiOutlineCurrencyDollar, HiOutlineTruck } from "react-icons/hi";

export default function HistoryStats({ services }) {
  const totalServices = services.length;

  const totalSpent = services.reduce((sum, s) => sum + s.price, 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
      <div className="bg-white border rounded-xl p-4 flex items-center gap-4">
        <div className="bg-blue-100 p-3 rounded-lg">
          <HiOutlineTruck className="text-blue-600 text-xl" />
        </div>

        <div>
          <p className="text-2xl font-bold">{totalServices}</p>
          <p className="text-gray-500 text-sm">Total Services</p>
        </div>
      </div>

      <div className="bg-white border rounded-xl p-6 flex items-center gap-4">
        <div className="bg-green-100 p-3 rounded-lg">
          <HiOutlineCurrencyDollar className="text-green-600 text-xl" />
        </div>

        <div>
          <p className="text-2xl font-bold">${totalSpent}</p>
          <p className="text-gray-500 text-sm">Total Spent</p>
        </div>
      </div>
    </div>
  );
}
