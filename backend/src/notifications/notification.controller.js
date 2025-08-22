const notificationService = require("./notification.service");

// Create Notification
exports.createNotification = async (req, res) => {
  try {
    const notification = await notificationService.create(req.body);
    res.status(201).json(notification);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Notifications
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await notificationService.findAll();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mark Notification as Read
exports.markAsRead = async (req, res) => {
  try {
    const updated = await notificationService.markAsRead(req.params.id);
    res.json(updated);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
