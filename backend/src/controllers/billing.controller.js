// backend/src/billing/billing.controller.js
import { createSession, handleWebhook } from "./billing.service.js";

export const createCheckoutSession = async (req, res) => {
  try {
    const session = await createSession(req.body);
    res.json({ url: session.url });
  } catch (error) {
    console.error("Billing Error:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
};

export const webhookHandler = async (req, res) => {
  try {
    await handleWebhook(req);
    res.json({ received: true });
  } catch (error) {
    console.error("Webhook Error:", error.message);
    res.status(400).send(`Webhook Error: ${error.message}`);
  }
};
