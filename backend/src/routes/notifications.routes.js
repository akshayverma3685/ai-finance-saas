import express from "express";
const router = express.Router();

// ✅ Example: GET all notifications
router.get("/", async (req, res) => {
  try {
    // Yeh abhi demo response hai
    res.json([
      { id: 1, message: "Your report is ready!", type: "info" },
      { id: 2, message: "New expense added successfully", type: "success" },
    ]);
  } catch (error) {
    console.error("Notifications Error:", error);
    res.status(500).json({ message: "Error fetching notifications" });
  }
});

// ✅ Example: POST new notification
router.post("/", async (req, res) => {
  try {
    const { message, type } = req.body;
    res.json({ id: Date.now(), message, type });
  } catch (error) {
    console.error("Notification Add Error:", error);
    res.status(500).json({ message: "Error adding notification" });
  }
});

export default router;
