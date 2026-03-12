import { useState } from "react";
import { technicians as initialTechs } from "../data/technicians";

import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import TechnicianTable from "../components/TechnicianTable";

import EditTechnicianModal from "../components/modals/EditTechnicianModal";
import DeleteTechnicianModal from "../components/modals/DeleteTechnicianModal";
import AddTechnicianModal from "../components/modals/AddTechnicianModal";

export default function AdminTechnicians() {
  const [technicians, setTechnicians] = useState(initialTechs);

  const [editingTech, setEditingTech] = useState(null);
  const [deletingTech, setDeletingTech] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  const handleUpdate = (updated) => {
    setTechnicians((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t)),
    );
    setEditingTech(null);
  };

  const handleDelete = (id) => {
    setTechnicians((prev) => prev.filter((t) => t.id !== id));
    setDeletingTech(null);
  };

  const handleAdd = (newTech) => {
    setTechnicians((prev) => [...prev, newTech]);
    setShowAdd(false);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="flex-1">
        <AdminTopbar />

        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Technicians</h1>

            <button
              onClick={() => setShowAdd(true)}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              + Add Technician
            </button>
          </div>

          <TechnicianTable
            data={technicians}
            onEdit={setEditingTech}
            onDelete={setDeletingTech}
          />
        </div>
      </div>

      {editingTech && (
        <EditTechnicianModal
          technician={editingTech}
          onClose={() => setEditingTech(null)}
          onSave={handleUpdate}
        />
      )}

      {deletingTech && (
        <DeleteTechnicianModal
          technician={deletingTech}
          onClose={() => setDeletingTech(null)}
          onDelete={handleDelete}
        />
      )}

      {showAdd && (
        <AddTechnicianModal
          onClose={() => setShowAdd(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}
