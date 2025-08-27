import Notification from "../models/Notification.js"

export const createNotification = async (userId, data) => {
  return await Notification.create({ ...data, user: userId })
}

export const getNotifications = async (userId) => {
  return await Notification.find({ user: userId }).sort({ createdAt: -1 })
}

export const markAsRead = async (userId, id) => {
  return await Notification.findOneAndUpdate(
    { _id: id, user: userId },
    { isRead: true },
    { new: true }
  )
}

export const deleteNotification = async (userId, id) => {
  return await Notification.findOneAndDelete({ _id: id, user: userId })
}
