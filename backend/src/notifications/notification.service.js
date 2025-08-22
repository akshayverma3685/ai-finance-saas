const Notification = require("../models/Notification");

// Create a new notification
exports.create = async (data) => {
  const notification = new Notification(data);
  return await notification.save();
};

// Find all notifications
exports.findAll = async () => {
  return await Notification.find().sort({ createdAt: -1 });
};

// Mark as read
exports.markAsRead = async (id) => {
  const notification = await Notification.findByIdAndUpdate(
    id,
    { isRead: true },
    { new: true }
  );
  if (!notification) throw new Error("Notification not found");
  return notification;
};
