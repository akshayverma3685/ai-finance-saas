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

r.get('/', listExpensesCtrl)

r.post('/', createExpenseCtrl)

r.get('/:id', getExpenseCtrl)

r.patch('/:id', updateExpenseCtrl)

r.delete('/:id', deleteExpenseCtrl)

export default r
