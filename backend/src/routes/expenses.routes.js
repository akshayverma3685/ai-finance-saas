import { Router } from 'express'
import { body } from 'express-validator'
import { auth } from '../middlewares/auth.middleware.js'
import { listCtrl, createCtrl, deleteCtrl } from '../controllers/expense.controller.js'

const r = Router()
r.use(auth)
r.get('/', listCtrl)
r.post('/', body('title').notEmpty(), body('amount').isNumeric(), createCtrl)
r.delete('/:id', deleteCtrl)
export default r
