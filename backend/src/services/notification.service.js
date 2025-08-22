import Notification from "../models/Notification.js"

/**
 * Create a new notification
 */
export const createNotification = async (userId, data) => {
  return await Notification.create({ ...data, user: userId })
}

/**
 * Get all notifications for user
 */
export const getNotifications = async (userId) => {
  return await Notification.find({ user: userId }).sort({ createdAt: -1 })
}

/**
 * Mark notification as read
 */
export const markAsRead = async (userId, id) => {
  return await Notification.findOneAndUpdate(
    { _id: id, user: userId },
    { isRead: true },
    { new: true }
  )
}

/**
 * Delete notification
 */
export const deleteNotification = async (userId, id) => {
  return await Notification.findOneAndDelete({ _id: id, user: userId })
}
