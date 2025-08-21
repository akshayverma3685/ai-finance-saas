const notificationService = require("./notification.service");

exports.sendBudgetAlert = async (req, res) => {
  try {
    const triggered = await notificationService.checkOverspending(req.user);
    res.json({
      success: true,
      message: triggered ? "Alert sent!" : "No overspending detected.",
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
