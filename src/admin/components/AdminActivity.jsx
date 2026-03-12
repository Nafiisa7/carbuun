import { HiClock } from "react-icons/hi";

export default function AdminActivity({ activities }) {
  return (
    <div className="bg-white border rounded-xl p-6 mt-8">
      <h3 className="font-semibold mb-6">Recent Activity</h3>

      <div className="space-y-6">
        {activities.map((item) => (
          <div key={item.id} className="flex gap-4 items-start">
            <div className="bg-gray-100 p-2 rounded-full">
              <HiClock className="text-gray-500" />
            </div>

            <div>
              <p>{item.text}</p>
              <p className="text-sm text-gray-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
