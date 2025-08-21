import express from "express";
const router = express.Router();

router.get("/summary", (req, res) => {
  res.json({
    totalExpenses: 1200,
    totalIncome: 5000,
    savings: 3800
  });
});

export default router; 
