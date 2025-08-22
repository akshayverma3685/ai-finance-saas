import { Router } from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { createOrderCtrl, markPaidCtrl } from '../controllers/payment.controller.js'
const r = Router()
r.use(auth)
r.post('/create-order', createOrderCtrl)
r.post('/mark-paid', markPaidCtrl)
export default r
