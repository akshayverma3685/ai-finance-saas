import express from "express";
const router = express.Router();

// 🤖 Simple Chatbot
router.post("/", (req, res) => {
  const { message } = req.body;
  res.json({
    userMessage: message,
    botReply: "Hello! I'm your finance assistant 🤖"
  });
});

export default router;
