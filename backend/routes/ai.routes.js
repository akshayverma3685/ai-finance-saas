import express from "express";
const router = express.Router();

// 🧠 Dummy AI Suggestion
router.post("/suggest", (req, res) => {
  const { query } = req.body;
  res.json({
    query,
    suggestion: "Try reducing unnecessary expenses by 10% this month."
  });
});

export default router;
