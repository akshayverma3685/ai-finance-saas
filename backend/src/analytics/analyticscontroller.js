// backend/src/analytics/analyticsController.js
import Expense from "../models/Expense.js";

// 📊 Monthly analytics summary
export const getMonthlyAnalytics = async (req, res) => {
  try {
    const userId = req.user.id;
    const expenses = await Expense.find({ userId });

    // Group by category
    const categoryTotals = {};
    expenses.forEach((exp) => {
      categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
    });

    res.json({
      totalExpenses: expenses.reduce((sum, e) => sum + e.amount, 0),
      categoryTotals,
      transactionCount: expenses.length,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching analytics" });
  }
};
