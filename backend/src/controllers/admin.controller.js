import User from "../models/User.js"
import Payment from "../models/Payment.js"
import { ok, badRequest } from "../utils/apiResponse.js"

// Get system stats
export const getStatsCtrl = async (req, res, next) => {
  try {
    const totalUsers = await User.countDocuments()
    const proUsers = await User.countDocuments({ isPro: true })
    const totalPayments = await Payment.countDocuments({ status: "paid" })
    const revenueAgg = await Payment.aggregate([
      { $match: { status: "paid" } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ])
    const revenue = revenueAgg[0]?.total || 0

    return ok(res, { totalUsers, proUsers, totalPayments, revenue })
  } catch (err) {
    next(err)
  }
}

// List all users
export const listUsersCtrl = async (req, res, next) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 })
    return ok(res, { users })
  } catch (err) {
    next(err)
  }
}

// Update user role or pro status
export const updateUserCtrl = async (req, res, next) => {
  try {
    const { id } = req.params
    const { role, isPro } = req.body
    const user = await User.findByIdAndUpdate(id, { role, isPro }, { new: true }).select("-password")
    if (!user) return badRequest(res, "User not found")
    return ok(res, { user }, "User updated")
  } catch (err) {
    next(err)
  }
}

// Delete user
export const deleteUserCtrl = async (req, res, next) => {
  try {
    const { id } = req.params
    await User.findByIdAndDelete(id)
    return ok(res, { deleted: true })
  } catch (err) {
    next(err)
  }
}

// List all payments
export const listPaymentsCtrl = async (req, res, next) => {
  try {
    const payments = await Payment.find().populate("user", "name email").sort({ createdAt: -1 })
    return ok(res, { payments })
  } catch (err) {
    next(err)
  }
      }
