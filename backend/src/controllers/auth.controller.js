import { register, login } from '../services/auth.service.js'
import { ok, created } from '../utils/apiResponse.js'

export const registerCtrl = async (req, res, next) => {
  try { const user = await register(req.body); return created(res, { user }, 'Registered') } catch (e) { next(e) }
}
export const loginCtrl = async (req, res, next) => {
  try { const { token, user } = await login(req.body); return ok(res, { token, user }, 'Logged in') } catch (e) { next(e) }
}
export const meCtrl = async (req, res) => ok(res, { user: req.user })
