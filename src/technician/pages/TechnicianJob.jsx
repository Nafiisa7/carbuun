import { useParams } from "react-router-dom";
import { useTechnician } from "../context/TechnicianContext";
import TechnicianSidebar from "../components/TechnicianSidebar";
import TechnicianTopbar from "../components/TechnicianTopbar";
import { useState } from "react";
import { FaPhone, FaComment, FaLocationArrow } from "react-icons/fa";

export default function TechnicianJob() {
  const { id } = useParams();
  const { jobs } = useTechnician();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return <p className="p-10">Job not found</p>;
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <TechnicianSidebar open={sidebarOpen} />

      <div className="flex-1">
        <TechnicianTopbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="p-6 md:p-8 max-w-6xl mx-auto">
          {/* Page Title */}

          <h1 className="text-2xl font-bold mb-1">Active Job</h1>
          <p className="text-gray-500 mb-6">Job ID: {job.id}</p>

          {/* Client Information */}

          <div className="bg-white border rounded-xl p-6 mb-6">
            <h2 className="font-semibold mb-4">Client Information</h2>

            <div className="mb-4">
              <p className="text-gray-500 text-sm">Name</p>
              <p className="font-medium">{job.client}</p>
            </div>

            <p className="text-gray-500 text-sm mb-4">📍 {job.address}</p>

            {/* Buttons */}

            <div className="grid md:grid-cols-2 gap-3 mb-3">
              <a
                href="tel:+123456789"
                className="border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50"
              >
                <FaPhone />
                Call Client
              </a>

              <a
                href="sms:+123456789"
                className="border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50"
              >
                <FaComment />
                Message
              </a>
            </div>

            {/* Navigate */}

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(job.address)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-blue-700"
            >
              <FaLocationArrow />
              Navigate to Location
            </a>
          </div>

          {/* Job Details */}

          <div className="bg-white border rounded-xl p-6 mb-6">
            <h2 className="font-semibold mb-4">Job Details</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-500 text-sm">Vehicle</p>
                <p className="font-medium">{job.vehicle}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Type</p>
                <p className="font-medium">Sedan</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Problem Category</p>
                <p className="font-medium">{job.problem}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Service Fee</p>
                <p className="font-medium">$25</p>
              </div>
            </div>

            {/* Description */}

            <div className="mt-6">
              <p className="text-gray-500 text-sm mb-2">Problem Description</p>

              <div className="bg-gray-50 border rounded-lg p-3 text-sm">
                Car won't start, making clicking sound
              </div>
            </div>
          </div>

          {/* Next Steps */}

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-blue-700 font-medium mb-3">Next Steps</p>

            <button className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700">
              Submit Inspection Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
