import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, default: "Other" },
  date: { type: Date, default: Date.now },
  notes: String,
  source: { type: String, default: "manual" },
  receiptUrl: String
}, { timestamps: true });

export default mongoose.model("Expense", ExpenseSchema);
