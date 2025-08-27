import Stripe from "stripe";
import { saveInvoiceToDB } from "./billing.utils.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createSession = async (payload) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID, // Stripe dashboard से lo
        quantity: 1,
      },
    ],
    success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.FRONTEND_URL}/cancel`,
  });

  return session;
};

export const handleWebhook = async (req) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    throw new Error(err.message);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("✅ Payment successful:", session);

    await saveInvoiceToDB(session);
  }

  return true;
};
