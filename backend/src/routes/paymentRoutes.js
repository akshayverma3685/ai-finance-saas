import express from "express";
import Stripe from "stripe";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ Create checkout session
router.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "AI Finance SaaS - Pro Plan" },
            unit_amount: 999, // $9.99
          },
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.CLIENT_URL}/dashboard?success=true`,
      cancel_url: `${process.env.CLIENT_URL}/pricing?canceled=true`,
    });

    res.json({ url: session.url });
  } catch (err) {
