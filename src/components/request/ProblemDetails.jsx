import { HiOutlineUpload } from "react-icons/hi";

export default function ProblemDetails() {
  return (
    <div className="bg-white border rounded-xl p-6 md:p-8 mb-6">
      <h2 className="text-xl font-semibold mb-6">Problem Details</h2>

      {/* Category */}

      <label className="text-sm font-medium text-gray-700">
        Problem Category *
      </label>

      <select className="w-full border rounded-lg p-3 mt-2 mb-6 bg-gray-50">
        <option>Select problem type</option>
        <option>Engine Problem</option>
        <option>Flat Tire</option>
        <option>Battery Dead</option>
        <option>Brake Issue</option>
      </select>

      {/* Description */}

      <label className="text-sm font-medium text-gray-700">
        Describe the Problem *
      </label>

      <textarea
        placeholder="Please provide detailed information about the issue..."
        className="w-full border rounded-lg p-3 mt-2 h-28 bg-gray-50"
      />

      <p className="text-sm text-gray-500 mt-2 mb-6">
        Be as specific as possible to help our technicians prepare
      </p>

      {/* Upload Photo */}

      <label className="text-sm font-medium text-gray-700">
        Upload Photo (Optional)
      </label>

      <div className="border-2 border-dashed rounded-xl p-8 mt-3 text-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
        <HiOutlineUpload className="text-4xl mx-auto text-gray-400 mb-3" />

        <p className="text-gray-700 font-medium">
          Click to upload or drag and drop
        </p>

        <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>

        <input type="file" className="hidden" />
      </div>
    </div>
  );
}
