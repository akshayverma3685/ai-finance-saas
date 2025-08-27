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

r.use(auth, isAdmin)

r.get("/stats", getStatsCtrl)

r.get("/users", listUsersCtrl)
r.patch("/users/:id", updateUserCtrl)
r.delete("/users/:id", deleteUserCtrl)

r.get("/payments", listPaymentsCtrl)

export default r
