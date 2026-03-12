import { HiPhone, HiChat } from "react-icons/hi";
import { services } from "../../data/services";

export default function TechnicianPanel() {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h3 className="font-semibold mb-6">Technician</h3>

      <div className="flex flex-col items-center text-center">
        <img
          src="https://i.pravatar.cc/100"
          className="w-16 h-16 rounded-full mb-3"
        />
        <p className="font-semibold">John Smith</p>
        <p className="text-sm text-gray-500 mb-4">(555) 123-4567</p>
        <div className="bg-blue-100 text-blue-700 text-sm px-3 py-2 rounded-lg mb-4">
          Estimated Arrival 15 minutes
        </div>

        <a
          href={`tel:${services.phone}`}
          className="w-full bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 mb-2 hover:bg-green-700 transition"
        >
          <HiPhone className="text-lg" />
          Call Technician
        </a>
        <a
          href={`sms:${services.phone}`}
          className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50"
        >
          <HiChat />
          Send Message
        </a>
      </div>
    </div>
  );
}
