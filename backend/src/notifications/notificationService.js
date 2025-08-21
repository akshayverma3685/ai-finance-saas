// backend/src/notifications/notificationService.js
import User from "../models/User.js";
import Expense from "../models/Expense.js";

// Check overspending vs budget
export const checkOverspending = async (userId) => {
  const user = await User.findById(userId);
  if (!user || !user.monthlyBudget) return null;

  const expenses = await Expense.find({ userId });
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  if (total > user.monthlyBudget) {
    return `⚠️ Alert: You have exceeded your monthly budget of $${user.monthlyBudget}. Current spend: $${total}`;
  }
  return null;
};
