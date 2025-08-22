import {
  createNotification,
  getNotifications,
  markAsRead,
  deleteNotification,
} from "../services/notification.service.js"
import { ok, created } from "../utils/apiResponse.js"

export const listNotificationsCtrl = async (req, res, next) => {
  try {
    const items = await getNotifications(req.user._id)
    return ok(res, { items })
  } catch (err) {
    next(err)
  }
}

export const createNotificationCtrl = async (req, res, next) => {
  try {
    const item = await createNotification(req.user._id, req.body)
    return created(res, { item })
  } catch (err) {
    next(err)
  }
}

export const markReadCtrl = async (req, res, next) => {
  try {
    const item = await markAsRead(req.user._id, req.params.id)
    return ok(res, { item })
  } catch (err) {
    next(err)
  }
}

export const deleteNotificationCtrl = async (req, res, next) => {
  try {
    await deleteNotification(req.user._id, req.params.id)
    return ok(res, { success: true })
  } catch (err) {
    next(err)
  }
}
