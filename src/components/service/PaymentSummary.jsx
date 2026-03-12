import { jsPDF } from "jspdf";
import { HiCurrencyDollar } from "react-icons/hi";

export default function PaymentSummary({ service }) {
  const downloadReceipt = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("AutoFix Pro - Service Receipt", 20, 20);

    doc.setFontSize(12);

    doc.text(`Vehicle: ${service.vehicle}`, 20, 40);
    doc.text(`Problem: ${service.problem}`, 20, 50);
    doc.text(`Technician: ${service.technician}`, 20, 60);

    doc.text(`Deposit: $${service.deposit}`, 20, 80);
    doc.text(`Service Charge: $${service.serviceCharge}`, 20, 90);
    doc.text(`Parts: $${service.parts}`, 20, 100);

    doc.text(`Total Paid: $${service.price}`, 20, 120);

    doc.save(`receipt-${service.id}.pdf`);
  };

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
      <h2 className="font-semibold mb-4 flex items-center gap-2">
        <HiCurrencyDollar className="text-blue-500 mt-1" />
        Payment Summary
      </h2>

      <div className="space-y-2 text-gray-600">
        <div className="flex justify-between">
          <span>Deposit</span>
          <span>${service.deposit}</span>
        </div>

        <div className="flex justify-between">
          <span>Service Charge</span>
          <span>${service.serviceCharge}</span>
        </div>

        <div className="flex justify-between">
          <span>Parts</span>
          <span>${service.parts}</span>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between font-semibold text-lg">
        <span>Total Paid</span>

        <span className="text-blue-600">${service.price}</span>
      </div>
      <button
        onClick={downloadReceipt}
        className="mt-4 border w-full py-2 rounded-lg hover:bg-white transition"
      >
        Download Receipt
      </button>
    </div>
  );
}
