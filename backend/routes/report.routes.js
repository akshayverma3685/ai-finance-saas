import express from "express";
const router = express.Router();

// 📊 Simple Report
router.get("/monthly", (req, res) => {
  res.json({
    month: "August",
    totalIncome: 5000,
    totalExpenses: 2000,
    netSavings: 3000
  });
});

export default router;
