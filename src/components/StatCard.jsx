export default function StatCard({ title, value, icon, color }) {
  return (
    <div
      className={`${color} p-6 rounded-xl flex justify-between items-center`}
    >
      <div>
        <p className="text-gray-600">{title}</p>
        <h2 className="text-3xl font-bold">{value}</h2>
      </div>

      <div className="text-2xl">{icon}</div>
    </div>
  );
}
