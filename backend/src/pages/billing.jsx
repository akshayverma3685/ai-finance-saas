import { useState } from "react"
import fetchClient from "../utils/fetchClient"

export default function BillingPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleUpgrade = async () => {
    try {
      setLoading(true)
      setMessage("")

      // 1. Create Razorpay order from backend
      const { data } = await fetchClient.post("/api/payments/create-order", {
        amount: 199 // INR
      })

      const { order, keyId } = data.data

      // 2. Load Razorpay Checkout
      const options = {
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "AI Finance SaaS",
        description: "Upgrade to Pro Plan",
        handler: async function (response) {
          // 3. On success, verify with backend
          try {
            const verifyRes = await fetchClient.post("/api/payments/verify", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            })
            setMessage("✅ Payment successful! You are now Pro.")
          } catch (err) {
            console.error(err)
            setMessage("❌ Verification failed.")
          }
        },
        prefill: {
          name: "Test User",
          email: "user@example.com",
        },
        theme: {
          color: "#6366f1",
        },
      }

      const razor = new window.Razorpay(options)
      razor.open()
    } catch (err) {
      console.error(err)
      setMessage("❌ Could not start payment.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Upgrade to Pro</h1>
      <p className="mb-6">Get advanced analytics, OCR, and premium features.</p>
      <button
        onClick={handleUpgrade}
        disabled={loading}
        className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-400"
      >
        {loading ? "Processing..." : "Pay ₹199"}
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  )
        }
