const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth");
const notificationController = require("./notification.controller");

router.post("/budget-alert", authMiddleware, notificationController.sendBudgetAlert);

module.exports = router;
