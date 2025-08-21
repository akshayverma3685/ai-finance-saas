import express from "express";
const router = express.Router();

// ⚡ Stripe Webhook
router.post("/", (req, res) => {
  console.log("Received Stripe Webhook:", req.body);
  res.json({ received: true });
});

export default router;
