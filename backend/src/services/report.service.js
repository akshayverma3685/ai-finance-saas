import Expense from '../models/Expense.js'
import Report from '../models/Report.js'

/**
 * Generate or fetch a monthly report
 * @param {ObjectId} userId
 * @param {String} month - format: YYYY-MM
 */
export const generateReport = async (userId, month) => {
  // First check if report already exists
  let report = await Report.findOne({ user: userId, month })
  if (report) return report

  // Parse month into date range
  const [year, mon] = month.split('-').map(Number)
  const startDate = new Date(year, mon - 1, 1)
  const endDate = new Date(year, mon, 0, 23, 59, 59)

  // Aggregate expenses
  const expenses = await Expense.aggregate([
    {
      $match: {
        user: userId,
        date: { $gte: startDate, $lte: endDate }
      }
    },
    {
      $group: {
        _id: '$category',
        total: { $sum: '$amount' },
        count: { $sum: 1 }
      }
    }
  ])

  const total = expenses.reduce((sum, e) => sum + e.total, 0)

  // Save report
  report = await Report.create({
    user: userId,
    month,
    total,
    breakdown: expenses
  })

  return report
}

/**
 * List all reports of a user
 */
export const listReports = async (userId) => {
  return await Report.find({ user: userId }).sort({ month: -1 })
}
