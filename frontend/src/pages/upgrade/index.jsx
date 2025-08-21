import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { createCheckoutSession } from "../../utils/api";

export default function Upgrade() {
  const [loading, setLoading] = useState(false);
  const PRICE_ID = import.meta.env.VITE_STRIPE_PRICE_ID || ""; // <-- set in .env

  const goPro = async () => {
    if (!PRICE_ID) { alert("Stripe price ID missing"); return; }
    setLoading(true);
    try {
      const { url } = await createCheckoutSession(PRICE_ID);
      window.location.href = url;
    } catch (e) {
      alert(e?.response?.data?.message || "Failed to create checkout session");
    } finally { setLoading(false); }
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-2xl p-6 shadow-sm border max-w-2xl">
        <h1 className="text-2xl font-semibold mb-2">Upgrade to Pro</h1>
        <p className="text-gray-600 mb-4">Unlock AI insights, OCR receipt scan, smart notifications, and exportable reports.</p>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1 mb-6">
          <li>AI-powered budgeting & category suggestions</li>
          <li>Smart alerts for overspending & bill reminders</li>
          <li>Reports export (PDF/Excel) + email scheduling</li>
          <li>Unlimited history & priority support</li>
        </ul>
        <button onClick={goPro} disabled={loading} className="px-5 py-2 rounded-lg bg-black text-white">
          {loading ? "Redirecting..." : "Go Pro – Checkout"}
        </button>
      </div>
    </DashboardLayout>
  );
}
