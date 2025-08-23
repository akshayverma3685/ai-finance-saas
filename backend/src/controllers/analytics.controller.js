import { getDashboardStats } from '../services/analytics.service.js'
import { ok } from '../utils/apiResponse.js'
export const dashboardCtrl = async (req, res, next) => {
  try { return ok(res, { data: await getDashboardStats(req.user._id) }) } catch (e) { next(e) }
}
