import {
  HiOutlineCreditCard,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export default function DepositSummary() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-600 text-white p-2 rounded-lg">
          <HiOutlineCreditCard className="text-xl" />
        </div>

        <h2 className="text-lg font-semibold">Deposit Required</h2>
      </div>

      <p className="text-gray-600 mb-4">
        A deposit is required to confirm your service request and assign a
        technician.
      </p>

      {/* Deposit Card */}

      <div className="bg-white rounded-lg p-4 mb-4">
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Base deposit (Car)</span>
          <span>$15</span>
        </div>

        <hr className="mb-2" />

        <div className="flex justify-between font-semibold text-lg">
          <span>Total Deposit</span>
          <span className="text-blue-600">$15</span>
        </div>
      </div>

      {/* Info */}

      <div className="flex items-start gap-3 bg-blue-100 p-4 rounded-lg">
        <HiOutlineInformationCircle className="text-blue-600 text-xl" />

        <p className="text-sm text-gray-700">
          This deposit will be deducted from your final service bill. If the
          service is canceled by us, it will be fully refunded.
        </p>
      </div>
    </div>
  );
}
