import { Router } from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { generateReportCtrl, listReportsCtrl } from '../controllers/report.controller.js'

const r = Router()
r.use(auth)

// Get all reports
r.get('/', listReportsCtrl)

// Generate or get report for a specific month
r.post('/:month', generateReportCtrl)

export default r
