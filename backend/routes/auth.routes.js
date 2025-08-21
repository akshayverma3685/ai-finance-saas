import express from "express";
const router = express.Router();

// 🟢 Register
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.json({ success: true, message: "User registered", user: { name, email } });
});

// 🟢 Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.json({ success: true, message: "Login successful", email });
});

export default router;
