import { useState } from "react";

export default function AddTechnicianModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    rating: 0,
    jobs: 0,
    status: "Online",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onAdd({
      ...form,
      id: Date.now(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl p-6 w-[500px] shadow-xl">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Add New Technician</h2>

          <button onClick={onClose}>✕</button>
        </div>

        <div className="space-y-3">
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="specialization"
            placeholder="Specialization"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="border px-4 py-2 rounded-lg">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Add Technician
          </button>
        </div>
      </div>
    </div>
  );
}
