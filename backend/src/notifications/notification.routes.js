const express = require("express");
const router = express.Router();
const notificationController = require("./notification.controller");

router.post("/", notificationController.createNotification);
router.get("/", notificationController.getNotifications);
router.patch("/:id/read", notificationController.markAsRead);

module.exports = router;
