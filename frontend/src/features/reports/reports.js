import DashboardLayout from "../../layouts/dashboardLayout";
import { getReportPdf } from "../../utils/api";

export default function Reports() {
  const download = async () => {
    const blob = await getReportPdf();
    const url = URL.createObjectURL(new Blob([blob], { type: "application/pdf" }));
    const a = document.createElement("a");
    a.href = url; a.download = "expense-report.pdf"; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-2xl p-6 shadow-sm border max-w-xl">
        <h1 className="text-xl font-semibold mb-3">Reports</h1>
        <p className="text-gray-600 mb-4">Generate and download detailed spending reports.</p>
        <button onClick={download} className="px-4 py-2 rounded-lg bg-black text-white">Download PDF</button>
      </div>
    </DashboardLayout>
  );
}
