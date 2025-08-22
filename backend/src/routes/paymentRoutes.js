import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ 1. One-Time Lifetime Payment
router.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: 999900, // ₹9999 in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ 2. Monthly Subscription
router.post("/create-monthly-subscription", async (req, res) => {
  try {
    const subscription = await razorpay.subscriptions.create({
      plan_id: process.env.RAZORPAY_PLAN_MONTHLY, // create in Razorpay Dashboard
      customer_notify: 1,
      total_count: 12, // 12 billing cycles
    });
    res.json(subscription);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ 3. Yearly Subscription
router.post("/create-yearly-subscription", async (req, res) => {
  try {
    const subscription = await razorpay.subscriptions.create({
      plan_id: process.env.RAZORPAY_PLAN_YEARLY,
      customer_notify: 1,
      total_count: 1, // yearly renewal
    });
    res.json(subscription);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
