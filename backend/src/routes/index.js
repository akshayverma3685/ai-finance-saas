import { Router } from "express"

// Import all route modules
import authRoutes from "./auth.routes.js"
import expenseRoutes from "./expense.routes.js"
import ocrRoutes from "./ocr.routes.js"
import notificationRoutes from "./notification.routes.js"
import analyticsRoutes from "./analytics.routes.js"
import billingRoutes from "./billing.routes.js"
import aiRoutes from "./ai.routes.js"
import adminRoutes from "./admin.routes.js"
import chatbotRoutes from "./chatbot.routes.js"
import paymentRoutes from "./payment.routes.js"
import reportRoutes from "./report.routes.js"
import uploadRoutes from "./upload.routes.js"

const router = Router()

// Mount routes
router.use("/auth", authRoutes)
router.use("/expenses", expenseRoutes)
router.use("/ocr", ocrRoutes)
router.use("/notifications", notificationRoutes)
router.use("/analytics", analyticsRoutes)
router.use("/billing", billingRoutes)
router.use("/ai", aiRoutes)
router.use("/admin", adminRoutes)
router.use("/chatbot", chatbotRoutes)
router.use("/payment", paymentRoutes)
router.use("/report", reportRoutes)
router.use("/upload", uploadRoutes)

export default router
