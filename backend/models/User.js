import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
  // ✅ Payment Plan
  plan: {
    type: String,
    enum: ["free", "pro-monthly", "pro-yearly", "pro-lifetime"],
    default: "free",
  },

  // ✅ Payment Meta (optional but useful)
  razorpayCustomerId: String,
  razorpaySubscriptionId: String,
  razorpayPaymentId: String,
});

export default mongoose.model("User", userSchema);
