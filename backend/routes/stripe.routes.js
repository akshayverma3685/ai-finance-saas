import express from "express";
const router = express.Router();

// 💳 Create Checkout Session (dummy)
router.post("/checkout", (req, res) => {
  res.json({ sessionId: "fake_session_12345" });
});

export default router;
