export default function DeleteTechnicianModal({
  technician,
  onClose,
  onDelete,
}) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-[420px] shadow-xl">
        <h2 className="text-lg font-semibold mb-2">Delete Technician</h2>

        <p className="text-gray-500 mb-6">
          Are you sure you want to delete {technician.name}? This action cannot
          be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="border px-4 py-2 rounded-lg">
            Cancel
          </button>

          <button
            onClick={() => onDelete(technician.id)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
