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

r.get("/", listNotificationsCtrl)

r.post("/", createNotificationCtrl)

r.patch("/:id/read", markReadCtrl)

r.delete("/:id", deleteNotificationCtrl)

export default r
