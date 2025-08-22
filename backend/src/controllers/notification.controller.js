import { listNotifications, createNotification, markAsRead } from '../services/notification.service.js'
import { ok, created } from '../utils/apiResponse.js'

export const listCtrl = async (req, res, next) => {
  try { return ok(res, { items: await listNotifications(req.user._id) }) } catch (e) { next(e) }
}
export const createCtrl = async (req, res, next) => {
  try { return created(res, { item: await createNotification(req.user._id, req.body) }) } catch (e) { next(e) }
}
export const markReadCtrl = async (req, res, next) => {
  try { return ok(res, { item: await markAsRead(req.user._id, req.params.id) }) } catch (e) { next(e) }
}
