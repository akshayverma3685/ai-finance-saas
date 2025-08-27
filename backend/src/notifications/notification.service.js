const Notification = require("../models/Notification");

exports.create = async (data) => {
  const notification = new Notification(data);
  return await notification.save();
};

exports.findAll = async () => {
  return await Notification.find().sort({ createdAt: -1 });
};

exports.markAsRead = async (id) => {
  const notification = await Notification.findByIdAndUpdate(
    id,
    { isRead: true },
    { new: true }
  );
  if (!notification) throw new Error("Notification not found");
  return notification;
};
