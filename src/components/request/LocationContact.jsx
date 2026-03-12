import { HiOutlineLocationMarker } from "react-icons/hi";

export default function LocationContact() {
  return (
    <div className="bg-white border rounded-xl p-6 md:p-8 mb-6">
      <h2 className="text-xl font-semibold mb-6">Location & Contact</h2>

      {/* Location */}

      <label className="text-sm font-medium text-gray-700">
        Current Location *
      </label>

      <div className="flex items-center border rounded-lg p-3 mt-2 bg-gray-50">
        <HiOutlineLocationMarker className="text-gray-400 mr-2" />

        <input
          placeholder="Enter your exact location"
          className="bg-transparent outline-none w-full"
        />
      </div>

      <button className="text-blue-600 text-sm mt-2 hover:underline">
        Use my current location
      </button>

      {/* Phone */}

      <label className="text-sm font-medium text-gray-700 mt-6 block">
        Contact Number *
      </label>

      <input
        placeholder="(555) 123-4567"
        className="border rounded-lg p-3 mt-2 w-full bg-gray-50"
      />

      <p className="text-sm text-gray-500 mt-1">
        Auto-filled from your profile
      </p>
    </div>
  );
}
