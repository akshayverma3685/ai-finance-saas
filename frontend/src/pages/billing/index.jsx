import { useEffect, useState } from "react";
import api from "@/utils/api";

export default function BillingPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async (priceId) => {
    setLoading(true);
    setError("");
    try {
      const res = await api.createCheckoutSession(priceId);
      if (res?.url) {
        window.location.href = res.url; // redirect to Stripe checkout
      } else {
        setError("Failed to create checkout session.");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Checkout failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Example: fetch current user subscription status
    const fetchData = async () => {
      try {
        const me = await api.getMe();
        console.log("User data:", me);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Billing</h1>

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold">Basic Plan</h2>
            <p className="text-sm text-gray-600">₹499 / month</p>
            <button
              onClick={() => handleCheckout("price_basic_id")}
              disabled={loading}
              className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Redirecting..." : "Subscribe"}
            </button>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold">Pro Plan</h2>
            <p className="text-sm text-gray-600">₹999 / month</p>
            <button
              onClick={() => handleCheckout("price_pro_id")}
              disabled={loading}
              className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? "Redirecting..." : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
        }
