export default function VehicleInfoForm() {
  return (
    <div className="bg-white border rounded-xl p-6 mb-6">
      <h2 className="font-semibold mb-6">Vehicle Information</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <input
          placeholder="e.g., Toyota, Honda"
          className="border rounded p-3"
        />

        <input
          placeholder="e.g., Camry, Civic"
          className="border rounded p-3"
        />

        <input placeholder="Year e.g., 2020" className="border rounded p-3" />
      </div>
    </div>
  );
}
