import Expense from '../models/Expense.js'
export const listExpenses = async (userId) => Expense.find({ user: userId }).sort({ date: -1 })
export const createExpense = async (userId, payload) => Expense.create({ ...payload, user: userId })
export const deleteExpense = async (userId, id) => Expense.findOneAndDelete({ _id: id, user: userId })
