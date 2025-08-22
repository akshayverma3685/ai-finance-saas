import Expense from '../models/Expense.js'
import Report from '../models/Report.js'

export const generateMonthlyReport = async (userId, month) => {
  const [y, m] = month.split('-').map(Number)
  const start = new Date(y, m - 1, 1)
  const end = new Date(y, m, 1)
  const expenses = await Expense.find({ user: userId, date: { $gte: start, $lt: end } })
  const breakdown = {}
  let total = 0
  for (const e of expenses) {
    breakdown[e.category] = (breakdown[e.category] || 0) + e.amount
    total += e.amount
  }
  const report = await Report.findOneAndUpdate(
    { user: userId, month },
    { user: userId, month, total, breakdown },
    { upsert: true, new: true }
  )
  return report
}
