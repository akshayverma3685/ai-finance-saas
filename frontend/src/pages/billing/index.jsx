import { useEffect, useState } from "react";
import { createCheckoutSession, getReportPdf } from "@/utils/api";

export default function BillingPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const session = await createCheckoutSession("price_12345"); // replace with real priceId
      window.location.href = session.url;
    } catch (err) {
      console.error("Checkout failed", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadReport = async () => {
    try {
      const pdfBlob = await getReportPdf();
      const url = window.URL.createObjectURL(new Blob([pdfBlob]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "report.pdf";
      a.click();
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Billing</h2>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded mr-3"
      >
        {loading ? "Loading..." : "Subscribe"}
      </button>
      <button
        onClick={handleDownloadReport}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Download Report
      </button>
    </div>
  );
       }
