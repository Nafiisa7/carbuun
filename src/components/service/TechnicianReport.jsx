import { jsPDF } from "jspdf";

export default function TechnicianReport({ service }) {
  const downloadReport = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("AutoFix Pro - Technician Report", 20, 20);

    doc.setFontSize(12);

    doc.text(`Vehicle: ${service.vehicle}`, 20, 40);
    doc.text(`Problem: ${service.problem}`, 20, 50);
    doc.text(`Technician: ${service.technician}`, 20, 60);
    doc.text(`Date: ${service.date}`, 20, 70);

    doc.text("Report:", 20, 90);
    doc.text(service.report, 20, 100, { maxWidth: 170 });

    doc.save(`technician-report-${service.id}.pdf`);
  };

  return (
    <div className="bg-white border rounded-xl p-6">
      <h2 className="font-semibold mb-4">Technician Report</h2>

      <p className="text-gray-700 mb-4">{service.report}</p>

      <button
        onClick={downloadReport}
        className="border rounded-lg px-4 py-2 hover:bg-gray-50 transition"
      >
        Download Full Report
      </button>
    </div>
  );
}
