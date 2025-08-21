import express from "express";
const router = express.Router();

let expenses = [];

// ➕ Add Expense
router.post("/", (req, res) => {
  const { title, amount } = req.body;
  const newExpense = { id: Date.now(), title, amount };
  expenses.push(newExpense);
  res.json(newExpense);
});

// 📋 Get All Expenses
router.get("/", (req, res) => {
  res.json(expenses);
});

export default router;
