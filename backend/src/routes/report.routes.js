import { Router } from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { generateCtrl } from '../controllers/report.controller.js'
const r = Router()
r.use(auth)
r.post('/:month', generateCtrl) // YYYY-MM
export default r
