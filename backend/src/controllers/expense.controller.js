import { listExpenses, createExpense, deleteExpense } from '../services/expense.service.js'
import { ok, created } from '../utils/apiResponse.js'

export const listCtrl = async (req, res, next) => { try { return ok(res, { items: await listExpenses(req.user._id) }) } catch (e) { next(e) } }
export const createCtrl = async (req, res, next) => { try { return created(res, { item: await createExpense(req.user._id, req.body) }) } catch (e) { next(e) } }
export const deleteCtrl = async (req, res, next) => { try { await deleteExpense(req.user._id, req.params.id); return ok(res, {}) } catch (e) { next(e) } }
