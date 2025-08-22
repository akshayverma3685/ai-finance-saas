import { createOrder, markPaid } from '../services/payment.service.js'
import { ok, created } from '../utils/apiResponse.js'
export const createOrderCtrl = async (req, res, next) => {
  try { const out = await createOrder(req.user._id, req.body.amount); return created(res, out, 'Order created') } catch (e) { next(e) }
}
export const markPaidCtrl = async (req, res, next) => {
  try { return ok(res, { payment: await markPaid(req.body) }, 'Payment updated') } catch (e) { next(e) }
}
