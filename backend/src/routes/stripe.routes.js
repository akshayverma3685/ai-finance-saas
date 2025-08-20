import express from "express";
import auth from "../middlewares/auth.middleware.js";
import { stripe } from "../config/stripe.js";
import User from "../models/User.js";

const router = express.Router();

async function getOrCreateCustomer(user){
  if (user.stripeCustomerId) return user.stripeCustomerId;
  const c = await stripe.customers.create({ email: user.email, name: user.name||undefined, metadata:{ userId:String(user._id) } });
  user.stripeCustomerId = c.id;
  await user.save();
  return c.id;
}

router.post("/create-checkout-session", auth, async (req,res)=>{
  const user = await User.findById(req.user._id);
  const customerId = await getOrCreateCustomer(user);
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    line_items: [{ price: process.env.STRIPE_PRICE_PRO, quantity: 1 }],
    success_url: `${process.env.APP_URL}/billing?status=success`,
    cancel_url: `${process.env.APP_URL}/billing?status=cancel`,
    allow_promotion_codes: true
  });
  res.json({ url: session.url });
});

router.post("/create-portal-session", auth, async (req,res)=>{
  const user = await User.findById(req.user._id);
  const customerId = await getOrCreateCustomer(user);
  const portal = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.APP_URL}/billing`
  });
  res.json({ url: portal.url });
});

export default router;
