import express from "express";
import crypto from "crypto";
import User from "../models/User.js"; // ✅ user model import

const router = express.Router();

// ✅ Webhook Route
router.post("/webhook", express.json({ type: "application/json" }), async (req, res) => {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  if (digest === req.headers["x-razorpay-signature"]) {
    const event = req.body.event;

    try {
      if (event === "payment.captured") {
        const paymentEntity = req.body.payload.payment.entity;
        console.log("✅ Payment Captured:", paymentEntity);

        const email = paymentEntity.notes?.email; // checkout me notes.email bhejna zaruri hai
        if (email) {
          let planType = "pro-monthly";
          if (paymentEntity.notes?.plan === "yearly") planType = "pro-yearly";
          if (paymentEntity.notes?.plan === "lifetime") planType = "pro-lifetime";

          await User.findOneAndUpdate(
            { email },
            { plan: planType, razorpayPaymentId: paymentEntity.id }
          );

          console.log(`✅ User ${email} upgraded to ${planType}`);
        }
      }

      if (event === "subscription.activated") {
        const subscriptionEntity = req.body.payload.subscription.entity;
        const email = subscriptionEntity.notes?.email;

        if (email) {
          let planType = subscriptionEntity.plan_id === process.env.RAZORPAY_PLAN_YEARLY
            ? "pro-yearly"
            : "pro-monthly";

          await User.findOneAndUpdate(
            { email },
            { plan: planType, razorpaySubscriptionId: subscriptionEntity.id }
          );

          console.log(`✅ User ${email} subscribed to ${planType}`);
        }
      }

      res.json({ status: "ok" });
    } catch (err) {
      console.error("❌ Webhook Error:", err);
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(400).json({ error: "Invalid signature" });
  }
});

export default router;
