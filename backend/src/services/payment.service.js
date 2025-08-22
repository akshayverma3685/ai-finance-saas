import Razorpay from 'razorpay'
import Payment from '../models/Payment.js'

const getRazor = () => {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error('Razorpay keys missing in env')
  }
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
  })
}

export const createOrder = async (userId, amountINR) => {
  const razor = getRazor()
  const order = await razor.orders.create({ amount: amountINR * 100, currency: 'INR' })
  const rec = await Payment.create({ user: userId, amount: amountINR, orderId: order.id, status: 'created' })
  return { order, payment: rec }
}

export const markPaid = async ({ orderId, paymentId }) => {
  const rec = await Payment.findOneAndUpdate({ orderId }, { paymentId, status: 'paid' }, { new: true })
  return rec
}
