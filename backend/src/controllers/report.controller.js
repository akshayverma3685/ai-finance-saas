import { generateReport, listReports } from '../services/report.service.js'
import { ok } from '../utils/apiResponse.js'

export const generateReportCtrl = async (req, res, next) => {
  try {
    const { month } = req.params
    const report = await generateReport(req.user._id, month)
    return ok(res, { report })
  } catch (err) {
    next(err)
  }
}

export const listReportsCtrl = async (req, res, next) => {
  try {
    const reports = await listReports(req.user._id)
    return ok(res, { items: reports })
  } catch (err) {
    next(err)
  }
}
