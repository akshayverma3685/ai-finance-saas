// backend/src/models/Billing.js
import mongoose from "mongoose";

const billingSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  subscription: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Subscription" 
  },
  payments: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Payment" 
  }],
  invoiceNumber: { 
    type: String, 
    unique: true 
  },
  status: { 
    type: String, 
    enum: ["active", "past_due", "cancelled"], 
    default: "active" 
  },
  notes: String
}, { timestamps: true });

export default mongoose.model("Billing", billingSchema);
