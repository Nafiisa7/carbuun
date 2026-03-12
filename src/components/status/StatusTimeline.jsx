import { HiCheck } from "react-icons/hi";

export default function StatusTimeline({ service }) {
  const steps = [
    {
      title: "Request Submitted",
      time: "2:30 PM",
      description: "Deposit paid successfully",
    },
    {
      title: "Admin Review",
      description:
        "Admin is reviewing your request and will assign a technician soon",
    },
    {
      title: "Technician Assigned",
      description: "Waiting for technician assignment",
    },
    {
      title: "Technician On The Way",
      description: "Technician is on the way to your location",
    },
    {
      title: "Technician Arrived",
      description: "Technician has arrived at your location",
    },
    {
      title: "Service In Progress",
      description: "Technician is currently working on your vehicle",
    },
    {
      title: "Service Completed",
      description: "Service has been completed and your vehicle is ready",
    },
    {
      title: "Payment Completed",
      description: "Payment has been processed and your service is finalized",
    },
  ];

  // Decide which step is current
  const getCurrentIndex = () => {
    if (!service?.status) return 1;

    if (service.status === "On The Way") return 3;

    if (service.status === "In Progress") return 5;

    if (service.status === "Completed") return 7;

    return 1;
  };

  const currentStep = getCurrentIndex();

  return (
    <div className="bg-white border rounded-xl p-6">
      <h2 className="font-semibold mb-6">Service Progress</h2>

      <div className="relative">
        {steps.map((step, index) => {
          const completed = index < currentStep;
          const current = index === currentStep;

          return (
            <div key={index} className="flex gap-4 pb-8 relative">
              {/* vertical line */}

              {index !== steps.length - 1 && (
                <div className="absolute left-4 top-6 w-[2px] h-full bg-gray-200"></div>
              )}

              {/* circle */}

              <div className="z-10">
                {completed && (
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <HiCheck className="text-green-600" />
                  </div>
                )}

                {current && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                )}

                {!completed && !current && (
                  <div className="w-8 h-8 rounded-full border-2 border-gray-300"></div>
                )}
              </div>

              {/* text */}

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p
                    className={`font-medium ${
                      completed || current ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </p>

                  {current && (
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                      Current
                    </span>
                  )}
                </div>

                {step.time && (
                  <p className="text-xs text-gray-500">{step.time}</p>
                )}

                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
