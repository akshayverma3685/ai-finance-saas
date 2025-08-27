import { createOrder, verifySignature, markPaid, verifyWebhook } from '../services/payment.service.js'
import { ok, created, badRequest } from '../utils/apiResponse.js'

export const createOrderCtrl = async (req, res, next) => {
  try {
    const amount = Number(req.body.amount)
    const { order } = await createOrder(req.user._id, amount, { user: String(req.user._id) })
    return created(res, { order, keyId: process.env.RAZORPAY_KEY_ID }, 'Order created')
  } catch (e) {
    next(e)
  }
}

export const verifyCtrl = async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {}
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return badRequest(res, 'Missing razorpay verification fields')
    }
    const okSig = verifySignature(razorpay_order_id, razorpay_payment_id, razorpay_signature)
    if (!okSig) return badRequest(res, 'Signature verification failed')
    const payment = await markPaid(req.user._id, { orderId: razorpay_order_id, paymentId: razorpay_payment_id })
    return ok(res, { payment, upgraded: true }, 'Payment verified and user upgraded')
  } catch (e) {
    next(e)
  }
}

export const webhookCtrl = async (req, res, next) => {
  try {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET
    if (!secret) return badRequest(res, 'Webhook secret not configured')
    const signature = req.headers['x-razorpay-signature']
    const payloadRaw = req.rawBody // set by middleware in route
    const verified = verifyWebhook(payloadRaw, signature, secret)
    if (!verified) return badRequest(res, 'Invalid webhook signature')

    const event = req.body?.event

    return ok(res, { received: true, event })
  } catch (e) {
    next(e)
  }
}
