import { Router } from "express"
import { auth } from "../middlewares/auth.middleware.js"
import { isAdmin } from "../middlewares/admin.middleware.js"
import {
  getStatsCtrl,
  listUsersCtrl,
  updateUserCtrl,
  deleteUserCtrl,
  listPaymentsCtrl
} from "../controllers/admin.controller.js"

const r = Router()

// All admin routes are protected
r.use(auth, isAdmin)

// Stats
r.get("/stats", getStatsCtrl)

// Users
r.get("/users", listUsersCtrl)
r.patch("/users/:id", updateUserCtrl)
r.delete("/users/:id", deleteUserCtrl)

// Payments
r.get("/payments", listPaymentsCtrl)

export default r
