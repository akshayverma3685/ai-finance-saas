import Expense from '../models/Expense.js'
import Report from '../models/Report.js'

/**
 * Get dashboard stats (total expenses, categories, monthly trend)
 */
export const getDashboardStats = async (userId) => {
  // Total spend
  const totalSpend = await Expense.aggregate([
    { $match: { user: userId } },
    { $group: { _id: null, total: { $sum: '$amount' } } }
  ])

  // Spend by category
  const byCategory = await Expense.aggregate([
    { $match: { user: userId } },
    { $group: { _id: '$category', total: { $sum: '$amount' } } },
    { $sort: { total: -1 } }
  ])

  // Monthly trend (last 6 months)
  const monthlyTrend = await Expense.aggregate([
    { $match: { user: userId } },
    {
      $group: {
        _id: { year: { $year: '$date' }, month: { $month: '$date' } },
        total: { $sum: '$amount' }
      }
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 }
  ])

  // Latest 5 expenses
  const recentExpenses = await Expense.find({ user: userId })
    .sort({ date: -1 })
    .limit(5)
    .select('title amount category date')

  return {
    totalSpend: totalSpend[0]?.total || 0,
    byCategory,
    monthlyTrend,
    recentExpenses
  }
}

/**
 * Get detailed analytics report from Reports collection
 */
export const getDetailedReport = async (userId, month) => {
  const report = await Report.findOne({ user: userId, month })
  return report || { month, expenses: [], total: 0 }
}
