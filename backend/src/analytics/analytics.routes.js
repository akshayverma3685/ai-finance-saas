import { Router } from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { dashboardCtrl, detailedReportCtrl } from './analytics.controller.js'

const router = Router()
router.use(auth)

// Dashboard analytics → frontend Dashboard.jsx
router.get('/dashboard', dashboardCtrl)

// Detailed monthly report → frontend Reports.jsx
router.get('/report/:month', detailedReportCtrl)

export default router
