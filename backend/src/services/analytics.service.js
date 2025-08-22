import Expense from '../models/Expense.js'
export const getDashboardStats = async (userId) => {
  const last10 = await Expense.find({ user: userId }).sort({ createdAt: -1 }).limit(10)
  const total = await Expense.aggregate([{ $match: { user: userId } }, { $group: { _id: null, sum: { $sum: '$amount' } } }])
  return { recent: last10, totalSpend: total[0]?.sum || 0 }
}
