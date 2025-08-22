import mongoose from 'mongoose'
const ExpenseSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, enum: ['Food','Travel','Bills','Shopping','Other'], default: 'Other' },
    date: { type: Date, default: Date.now },
    notes: { type: String }
  },
  { timestamps: true }
)
export default mongoose.model('Expense', ExpenseSchema)
