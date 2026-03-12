import { HiOutlineTruck, HiOutlineLocationMarker } from "react-icons/hi";
import { FiTool } from "react-icons/fi";

export default function RequestDetails() {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h3 className="font-semibold mb-4">Request Details</h3>

      <div className="space-y-4">
        <div className="flex gap-3 items-center">
          <HiOutlineTruck className="text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Vehicle</p>
            <p className="font-medium">Toyota Camry</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <FiTool className="text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Problem</p>
            <p className="font-medium">Engine overheating</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <HiOutlineLocationMarker className="text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium">123 Main Street</p>
          </div>
        </div>
      </div>
    </div>
  );
}
