import { Router } from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { createOrderCtrl, verifyCtrl, webhookCtrl } from '../controllers/payment.controller.js'

// raw body collector for webhook signature validation
import express from 'express'
const rawJson = express.raw({ type: 'application/json' })

const r = Router()

// Authenticated flows used by your frontend Billing page
r.use(auth)
r.post('/create-order', createOrderCtrl)
r.post('/verify', verifyCtrl)

// OPTIONAL: Razorpay webhook (must be unauthenticated, separate route)
const webhook = Router()
webhook.post('/webhook', rawJson, (req, _res, next) => {
  // store raw body for signature verification
  req.rawBody = req.body.toString()
  // parse JSON for controller to read event fields
  try {
    req.body = JSON.parse(req.rawBody)
  } catch {}
  next()
}, webhookCtrl)

export { r as default, webhook as paymentWebhookRouter }
