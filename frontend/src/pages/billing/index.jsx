import { useEffect } from "react";
import withAuth from "@/utils/withAuth";
import Layout from "@/components/layout";

function loadScript(src){
  return new Promise((resolve)=>{ const s=document.createElement("script"); s.src=src; s.onload=resolve; document.body.appendChild(s); });
}

function Billing(){
  useEffect(()=>{ loadScript("https://checkout.razorpay.com/v1/checkout.js"); },[]);

  const createCheckout = async () => {
    // Normally: call your backend to create order and return order_id
    // const { orderId } = await api.post("/payments/create-order", { plan: "monthly" }).then(r=>r.data);

    const rzp = new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 99900,
      currency: "INR",
      name: "AI Finance SaaS",
      description: "Monthly Pro Plan",
      handler: function (response) {
        alert("Payment success: " + response.razorpay_payment_id);
      },
      theme: { color: "#3b82f6" },
    });
    rzp.open();
  };

  return (
    <Layout>
      <div className="card p-6 max-w-2xl">
        <h2 className="text-xl font-semibold">Upgrade to Pro</h2>
        <p className="text-slate-400 mt-1">Unlock analytics, reports export, smart alerts and more.</p>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="text-3xl font-semibold">₹999 <span className="text-base text-slate-400">/month</span></div>
            <ul className="mt-2 text-sm text-slate-300 list-disc pl-5">
              <li>Unlimited expenses</li>
              <li>Advanced analytics</li>
              <li>Email notifications</li>
            </ul>
          </div>
          <button className="btn btn-primary" onClick={createCheckout}>Buy Pro</button>
        </div>
      </div>
    </Layout>
  );
}
export default withAuth(Billing);
