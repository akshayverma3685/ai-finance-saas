
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true, index: true },
  password: { type: String, required: true },
  plan: { type: String, enum: ["free", "pro"], default: "free" },
  stripeCustomerId: { type: String, default: null },
  notifications: { emailAlerts: { type: Boolean, default: true } },
  teamId: { type: mongoose.Schema.Types.ObjectId, ref: "Team", default: null },
  role: { type: String, enum: ["owner", "admin", "member"], default: "owner" }
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
