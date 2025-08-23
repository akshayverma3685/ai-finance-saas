// backend/src/billing/billing.routes.js
import express from "express";
import { createCheckoutSession, webhookHandler } from "./billing.controller.js";

const router = express.Router();

// Create checkout session
router.post("/create-checkout-session", createCheckoutSession);

// Stripe webhook
router.post("/webhook", express.raw({ type: "application/json" }), webhookHandler);

export default router;
