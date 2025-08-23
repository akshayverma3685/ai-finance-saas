import { Router } from "express"
import { auth } from "../middlewares/auth.middleware.js"
import {
  listNotificationsCtrl,
  createNotificationCtrl,
  markReadCtrl,
  deleteNotificationCtrl,
} from "../controllers/notification.controller.js"

const r = Router()
r.use(auth)

// GET all notifications
r.get("/", listNotificationsCtrl)

// POST create new notification
r.post("/", createNotificationCtrl)

// PATCH mark as read
r.patch("/:id/read", markReadCtrl)

// DELETE notification
r.delete("/:id", deleteNotificationCtrl)

export default r
