import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true, required: true },
  stripeCustomerId: { type: String, index: true },
  stripeSubscriptionId: { type: String, index: true },
  priceId: String,
  status: { type: String, default: "incomplete" },
  currentPeriodEnd: { type: Date, default: null }
}, { timestamps: true });

export default mongoose.model("Subscription", SubscriptionSchema);
