import Notification from '../models/Notification.js'

export const listNotifications = async (userId) =>
  Notification.find({ user: userId }).sort({ createdAt: -1 })

export const createNotification = async (userId, payload) =>
  Notification.create({ ...payload, user: userId })

export const markAsRead = async (userId, id) =>
  Notification.findOneAndUpdate({ _id: id, user: userId }, { read: true }, { new: true })
