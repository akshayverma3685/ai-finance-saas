import { Router } from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import {
  listExpensesCtrl,
  createExpenseCtrl,
  getExpenseCtrl,
  updateExpenseCtrl,
  deleteExpenseCtrl
} from '../controllers/expense.controller.js'

const r = Router()
r.use(auth)

// GET all expenses
r.get('/', listExpensesCtrl)

// POST new expense
r.post('/', createExpenseCtrl)

// GET single expense
r.get('/:id', getExpenseCtrl)

// PATCH update expense
r.patch('/:id', updateExpenseCtrl)

// DELETE expense
r.delete('/:id', deleteExpenseCtrl)

export default r
