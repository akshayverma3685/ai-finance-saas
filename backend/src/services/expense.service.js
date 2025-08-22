import Expense from '../models/Expense.js'

/**
 * Create a new expense
 */
export const createExpense = async (userId, data) => {
  return await Expense.create({ ...data, user: userId })
}

/**
 * Get all expenses of logged-in user
 */
export const getExpenses = async (userId) => {
  return await Expense.find({ user: userId }).sort({ date: -1 })
}

/**
 * Get single expense
 */
export const getExpenseById = async (userId, id) => {
  return await Expense.findOne({ _id: id, user: userId })
}

/**
 * Update expense
 */
export const updateExpense = async (userId, id, data) => {
  return await Expense.findOneAndUpdate(
    { _id: id, user: userId },
    data,
    { new: true }
  )
}

/**
 * Delete expense
 */
export const deleteExpense = async (userId, id) => {
  return await Expense.findOneAndDelete({ _id: id, user: userId })
}
