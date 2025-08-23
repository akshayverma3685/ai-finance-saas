import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import routes from "./routes/index.js";
import "./config/index.js";

// ✅ Middlewares sab index.js se import
import {
  errorHandler,
  notFound,
  authMiddleware,
  adminMiddleware,
  proMiddleware,
  loggerMiddleware,
  validateMiddleware,
  rateLimitMiddleware,
} from "./middlewares/index.js";

// ✅ Individual feature routes
import authRoutes from "./routes/auth.routes.js";
import expenseRoutes from "./routes/expense.routes.js";
import reportRoutes from "./routes/report.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import ocrRoutes from "./routes/ocr.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import billingRoutes from "./routes/billing.routes.js";
import chatbotRoutes from "./routes/chatbot.routes.js";

// ✅ Payments
import paymentRoutes, {
  paymentWebhookRouter,
} from "./routes/payment.routes.js";

const app = express();

// Security & Global Middlewares
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// Example of custom middlewares if needed
// app.use(loggerMiddleware);
// app.use(rateLimitMiddleware);

// Healthcheck
app.get("/health", (req, res) => res.json({ ok: true }));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/payments/webhook", paymentWebhookRouter); // ✅ fixed webhook path
app.use("/api/ai", aiRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/ocr", ocrRoutes);

// ✅ Aggregated routes (from routes/index.js)
app.use("/api", routes);

// Error handlers (last)
app.use(notFound);
app.use(errorHandler);

export default app;
