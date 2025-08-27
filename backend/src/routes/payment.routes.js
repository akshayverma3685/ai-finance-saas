import { Router } from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { createOrderCtrl, verifyCtrl, webhookCtrl } from '../controllers/payment.controller.js'

import express from 'express'
const rawJson = express.raw({ type: 'application/json' })

const r = Router()

r.use(auth)
r.post('/create-order', createOrderCtrl)
r.post('/verify', verifyCtrl)

const webhook = Router()
webhook.post('/webhook', rawJson, (req, _res, next) => {
  req.rawBody = req.body.toString()
  try {
    req.body = JSON.parse(req.rawBody)
  } catch {}
  next()
}, webhookCtrl)

export { r as default, webhook as paymentWebhookRouter }
