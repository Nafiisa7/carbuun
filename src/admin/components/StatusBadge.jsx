export default function StatusBadge({ status }) {
  const colors = {
    "In Progress": "bg-blue-500",
    Pending: "bg-yellow-500",
    Completed: "bg-green-500",
  };

  return (
    <span
      className={`px-3 py-1 text-white text-xs rounded-full ${colors[status]}`}
    >
      {status}
    </span>
  );
}
