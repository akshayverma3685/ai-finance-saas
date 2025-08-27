import Expense from '../models/Expense.js'

export const createExpense = async (userId, data) => {
  return await Expense.create({ ...data, user: userId })
}

export const getExpenses = async (userId) => {
  return await Expense.find({ user: userId }).sort({ date: -1 })
}

export const getExpenseById = async (userId, id) => {
  return await Expense.findOne({ _id: id, user: userId })
}

export const updateExpense = async (userId, id, data) => {
  return await Expense.findOneAndUpdate(
    { _id: id, user: userId },
    data,
    { new: true }
  )
}

export const deleteExpense = async (userId, id) => {
  return await Expense.findOneAndDelete({ _id: id, user: userId })
}
