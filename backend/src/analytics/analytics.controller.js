import { getDashboardStats, getDetailedReport } from './analytics.service.js'
import { ok } from '../utils/apiResponse.js'

export const dashboardCtrl = async (req, res, next) => {
  try {
    const stats = await getDashboardStats(req.user._id)
    return ok(res, { stats })
  } catch (err) {
    next(err)
  }
}

export const detailedReportCtrl = async (req, res, next) => {
  try {
    const { month } = req.params
    const report = await getDetailedReport(req.user._id, month)
    return ok(res, { report })
  } catch (err) {
    next(err)
  }
}
