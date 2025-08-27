import Expense from '../models/Expense.js'
import Report from '../models/Report.js'

export const generateReport = async (userId, month) => {
  let report = await Report.findOne({ user: userId, month })
  if (report) return report

  const [year, mon] = month.split('-').map(Number)
  const startDate = new Date(year, mon - 1, 1)
  const endDate = new Date(year, mon, 0, 23, 59, 59)

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

  report = await Report.create({
    user: userId,
    month,
    total,
    breakdown: expenses
  })

  return report
}

export const listReports = async (userId) => {
  return await Report.find({ user: userId }).sort({ month: -1 })
}
