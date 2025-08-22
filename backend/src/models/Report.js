import mongoose from 'mongoose'
const ReportSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    month: { type: String, required: true }, // YYYY-MM
    total: { type: Number, required: true },
    breakdown: { type: Object, default: {} }
  },
  { timestamps: true }
)
export default mongoose.model('Report', ReportSchema)
