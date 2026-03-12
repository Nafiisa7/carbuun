import { useState } from "react";

export default function EditTechnicianModal({ technician, onClose, onSave }) {
  const [form, setForm] = useState(technician);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[500px] p-6 shadow-xl">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Edit Technician</h2>

          <button onClick={onClose}>✕</button>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          Update technician information. Leave password blank to keep current
          password.
        </p>

        <div className="space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="specialization"
            value={form.specialization}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 border rounded-lg">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
