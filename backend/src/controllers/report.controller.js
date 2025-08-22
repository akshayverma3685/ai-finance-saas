import { generateMonthlyReport } from '../services/report.service.js'
import { ok } from '../utils/apiResponse.js'
export const generateCtrl = async (req, res, next) => {
  try { return ok(res, { report: await generateMonthlyReport(req.user._id, req.params.month) }) } catch (e) { next(e) }
}
