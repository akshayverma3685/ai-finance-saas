import React from "react";

const upgrade = () => {
  const handlePayment = async (type) => {
    let endpoint = "";
    if (type === "lifetime") endpoint = "/api/payments/create-order";
    if (type === "monthly") endpoint = "/api/payments/create-monthly-subscription";
    if (type === "yearly") endpoint = "/api/payments/create-yearly-subscription";

    const res = await fetch(endpoint, { method: "POST" });
    const data = await res.json();

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: "INR",
      name: "AI Finance SaaS",
      description: `${type.toUpperCase()} Plan`,
      order_id: data.id || undefined,
      subscription_id: data.id || undefined,
      handler: function (response) {
        alert("Payment successful!");
        // TODO: call backend to activate Pro plan for this user
      },
      prefill: {
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: { color: "#4f46e5" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Monthly */}
      <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
        <h2 className="text-xl font-bold">Monthly</h2>
        <p className="text-2xl font-semibold mt-2">₹499</p>
        <p className="text-gray-500">per month</p>
        <button
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
          onClick={() => handlePayment("monthly")}
        >
          Subscribe
        </button>
      </div>

      {/* Yearly */}
      <div className="p-6 bg-white rounded-2xl shadow-lg text-center border-2 border-indigo-600">
        <h2 className="text-xl font-bold">Yearly</h2>
        <p className="text-2xl font-semibold mt-2">₹4999</p>
        <p className="text-gray-500">per year</p>
        <button
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
          onClick={() => handlePayment("yearly")}
        >
          Subscribe
        </button>
      </div>

      {/* Lifetime */}
      <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
        <h2 className="text-xl font-bold">Lifetime</h2>
        <p className="text-2xl font-semibold mt-2">₹9999</p>
        <p className="text-gray-500">one-time</p>
        <button
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
          onClick={() => handlePayment("lifetime")}
        >
          Buy Once
        </button>
      </div>
    </div>
  );
};

export default upgrade;
