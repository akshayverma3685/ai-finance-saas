import express from "express";
import { stripe } from "../config/stripe.js";
import Subscription from "../models/Subscription.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/webhook", express.raw({ type: "application/json" }), async (req,res)=>{
  const sig = req.headers["stripe-signature"];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (e) {
    return res.status(400).send(`Webhook Error: ${e.message}`);
  }

  try{
    switch(event.type){
      case "checkout.session.completed": {
        const session = event.data.object;
        const subId = session.subscription;
        const customerId = session.customer;
        const user = await User.findOne({ stripeCustomerId: customerId });
        if (user && subId){
          const sub = await stripe.subscriptions.retrieve(subId);
          await Subscription.findOneAndUpdate(
            { userId: user._id },
            {
              userId: user._id,
              stripeCustomerId: customerId,
              stripeSubscriptionId: sub.id,
              priceId: sub.items.data[0]?.price?.id,
              status: sub.status,
              currentPeriodEnd: new Date(sub.current_period_end * 1000)
            },
            { upsert: true, new: true }
          );
          user.plan = "pro";
          await user.save();
        }
        break;
      }
      case "customer.subscription.updated":
      case "customer.subscription.created":
      case "customer.subscription.deleted": {
        const sub = event.data.object;
        const user = await User.findOne({ stripeCustomerId: sub.customer });
        if (user){
          const status = sub.status || "canceled";
          await Subscription.findOneAndUpdate(
            { userId: user._id },
            {
              userId: user._id,
              stripeCustomerId: sub.customer,
              stripeSubscriptionId: sub.id,
              priceId: sub.items?.data?.[0]?.price?.id,
              status,
              currentPeriodEnd: sub.current_period_end ? new Date(sub.current_period_end * 1000) : null
            },
            { upsert: true, new: true }
          );
          user.plan = (status==="active"||status==="trialing") ? "pro" : "free";
          await user.save();
        }
        break;
      }
      default: break;
    }
    res.json({ received: true });
  }catch(e){
    console.error("Webhook handler failed", e);
    res.status(500).send("Webhook error");
  }
});

export default router;
