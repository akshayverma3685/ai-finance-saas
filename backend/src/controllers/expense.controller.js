import Expense from "../models/Expense.js";

export async function createExpense(req, res) {
  const exp = await Expense.create({ ...req.body, userId: req.user._id });
  res.json(exp);
}
export async function listExpenses(req, res) {
  const { from, to } = req.query;
  const q = { userId: req.user._id };
  if (from || to) q.date = {};
  if (from) q.date.$gte = new Date(from);
  if (to) q.date.$lte = new Date(to);
  const items = await Expense.find(q).sort({ date: -1 });
  res.json(items);
}
export async function updateExpense(req, res) {
  const { id } = req.params;
  const exp = await Expense.findOneAndUpdate({ _id: id, userId: req.user._id }, req.body, { new: true });
  res.json(exp);
}
export async function deleteExpense(req, res) {
  const { id } = req.params;
  await Expense.deleteOne({ _id: id, userId: req.user._id });
  res.json({ success: true });
}
