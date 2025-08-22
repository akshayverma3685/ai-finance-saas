import { Router } from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { dashboardCtrl } from '../controllers/analytics.controller.js'
const r = Router()
r.use(auth)
r.get('/dashboard', dashboardCtrl)
export default r
