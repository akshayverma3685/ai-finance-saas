import {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense
} from '../services/expense.service.js'
import { ok, created } from '../utils/apiResponse.js'

export const listExpensesCtrl = async (req, res, next) => {
  try {
    const expenses = await getExpenses(req.user._id)
    return ok(res, { items: expenses })
  } catch (err) {
    next(err)
  }
}

export const createExpenseCtrl = async (req, res, next) => {
  try {
    const exp = await createExpense(req.user._id, req.body)
    return created(res, { item: exp })
  } catch (err) {
    next(err)
  }
}

export const getExpenseCtrl = async (req, res, next) => {
  try {
    const exp = await getExpenseById(req.user._id, req.params.id)
    if (!exp) return res.status(404).json({ error: 'Not found' })
    return ok(res, { item: exp })
  } catch (err) {
    next(err)
  }
}

export const updateExpenseCtrl = async (req, res, next) => {
  try {
    const exp = await updateExpense(req.user._id, req.params.id, req.body)
    return ok(res, { item: exp })
  } catch (err) {
    next(err)
  }
}

export const deleteExpenseCtrl = async (req, res, next) => {
  try {
    await deleteExpense(req.user._id, req.params.id)
    return ok(res, { success: true })
  } catch (err) {
    next(err)
  }
}
