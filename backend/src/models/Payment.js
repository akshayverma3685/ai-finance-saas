import mongoose from 'mongoose'
const PaymentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    provider: { type: String, enum: ['razorpay'], default: 'razorpay' },
    orderId: { type: String },
    paymentId: { type: String },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['created','paid','failed'], default: 'created' }
  },
  { timestamps: true }
)
export default mongoose.model('Payment', PaymentSchema)
