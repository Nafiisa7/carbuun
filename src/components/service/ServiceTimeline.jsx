import { HiCheck } from "react-icons/hi";

const steps = [
  "Request Submitted",
  "Technician Assigned",
  "On The Way",
  "Arrived",
  "Service In Progress",
  "Completed",
  "Payment Done",
];

export default function ServiceTimeline() {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="font-semibold mb-6">Service Timeline</h2>

      <div className="space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="bg-green-100 p-2 rounded-full">
              <HiCheck className="text-green-600" />
            </div>

            <p>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
