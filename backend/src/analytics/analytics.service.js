// Simple service to calculate analytics on expenses
const Expense = require("../models/Expense");

async function getMonthlySummary(userId) {
  const expenses = await Expense.find({ user: userId });
  const grouped = {};

  expenses.forEach(exp => {
    const month = exp.date.toISOString().slice(0, 7); // YYYY-MM
    if (!grouped[month]) grouped[month] = 0;
    grouped[month] += exp.amount;
  });

  return grouped;
}

async function getCategoryBreakdown(userId) {
  const expenses = await Expense.find({ user: userId });
  const breakdown = {};

  expenses.forEach(exp => {
    if (!breakdown[exp.category]) breakdown[exp.category] = 0;
    breakdown[exp.category] += exp.amount;
  });

  return breakdown;
}

module.exports = { getMonthlySummary, getCategoryBreakdown };
