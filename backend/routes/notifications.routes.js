import express from "express";
const router = express.Router();

router.post("/send", (req, res) => {
  const { userId, message } = req.body;

  if (!userId || !message) {
    return res.status(400).json({ error: "User ID and message required" });
  }

  res.json({ success: true, userId, message });
});

export default router;
