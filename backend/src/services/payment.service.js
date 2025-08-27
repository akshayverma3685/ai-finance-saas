import Razorpay from 'razorpay'
import crypto from 'crypto'
import Payment from '../models/Payment.js'
import User from '../models/User.js'

const ensureEnv = () => {
  const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env
  if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
    throw new Error('Razorpay keys missing. Set RAZORPAY_KEY_ID & RAZORPAY_KEY_SECRET in .env')
  }
  return { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET }
}

const razor = () => {
  const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = ensureEnv()
  return new Razorpay({ key_id: RAZORPAY_KEY_ID, key_secret: RAZORPAY_KEY_SECRET })
}

export const createOrder = async (userId, amountINR, notes = {}) => {
  if (!amountINR || amountINR <= 0) throw new Error('Invalid amount')
  const rz = razor()
  const order = await rz.orders.create({
    amount: Math.round(amountINR * 100),
    currency: 'INR',
    notes
  })
  const payment = await Payment.create({
    user: userId,
    amount: amountINR,
    orderId: order.id,
    status: 'created'
  })
  return { order, payment }
}

export const verifySignature = (orderId, paymentId, signature) => {
  const { RAZORPAY_KEY_SECRET } = ensureEnv()
  const body = `${orderId}|${paymentId}`
  const expected = crypto.createHmac('sha256', RAZORPAY_KEY_SECRET).update(body).digest('hex')
  return expected === signature
}

export const markPaid = async (userId, { orderId, paymentId }) => {
  const payment = await Payment.findOneAndUpdate(
    { user: userId, orderId },
    { paymentId, status: 'paid' },
    { new: true }
  )
  if (!payment) throw new Error('Payment not found for this user/order')
  
  await User.findByIdAndUpdate(userId, { isPro: true })
  return payment
}

export const verifyWebhook = (payloadRaw, signature, webhookSecret) => {
  const expected = crypto.createHmac('sha256', webhookSecret).update(payloadRaw).digest('hex')
  return expected === signature
}
