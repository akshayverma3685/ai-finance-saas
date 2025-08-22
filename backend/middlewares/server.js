// backend/src/server.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js"; // DB connection
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

// Routes
import aiRoutes from "./routes/ai.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";
import authRoutes from "./routes/auth.routes.js";
import chatbotRoutes from "./routes/chatbot.routes.js";
import expensesRoutes from "./routes/expenses.routes.js";
import notificationsRoutes from "./routes/notifications.routes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import reportRoutes from "./routes/report.routes.js";
import stripeWebhook from "./routes/stripe.webhook.js";
import uploadRoutes from "./routes/upload.routes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Stripe webhook (special case - raw body required)
app.use("/api/stripe/webhook", stripeWebhook);

// Routes
app.use("/api/ai", aiRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/expenses", expensesRoutes);
app.use("/api/notifications", notificationsRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/upload", uploadRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
