import { Router } from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { generateReportCtrl, listReportsCtrl } from '../controllers/report.controller.js'

const r = Router()
r.use(auth)

r.get('/', listReportsCtrl)

r.post('/:month', generateReportCtrl)

export default r
