export default function HowItWorks() {
  const steps = [
    "Select your vehicle type above",
    "Provide vehicle details and describe the problem",
    "Pay the deposit (calculated based on vehicle and issue)",
    "Get matched with a nearby technician instantly",
  ];

  return (
    <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">How it works</h2>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-semibold">
              {index + 1}
            </div>

            <p className="text-gray-700">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
