import { useParams } from "react-router-dom";
import DashboardNavbar from "../../components/DashboardNavbar";
import Footer from "../../components/Footer";

import VehicleInfoForm from "../../components/request/VehicleInfoForm";
import ProblemDetails from "../../components/request/ProblemDetails";
import LocationContact from "../../components/request/LocationContact";
import DepositSummary from "../../components/request/DepositSummary";

export default function ServiceRequest() {
  const { type } = useParams();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <DashboardNavbar />

      <main className="flex-1 max-w-5xl mx-auto p-6 md:p-10 w-full">
        <button className="mb-6 text-sm">← Back to vehicle selection</button>

        <h1 className="text-3xl font-bold">Service Request Details</h1>

        <p className="text-gray-600 mb-8">Vehicle Type: {type}</p>

        <VehicleInfoForm />

        <ProblemDetails />

        <LocationContact />

        <DepositSummary />

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button className="flex-1 border rounded-lg py-3 hover:bg-gray-50">
            ← Back
          </button>

          <button className="flex-1 bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700">
            Continue to Payment
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
