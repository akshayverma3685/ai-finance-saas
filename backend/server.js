// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

// ✅ Routes
import aiRoutes from "./src/routes/ai.routes.js";
import analyticsRoutes from "./src/routes/analytics.routes.js";
import authRoutes from "./src/routes/auth.routes.js";
import chatbotRoutes from "./src/routes/chatbot.routes.js";
import expensesRoutes from "./src/routes/expenses.routes.js";
import notificationsRoutes from "./src/routes/notifications.routes.js";
import paymentRoutes from "./src/routes/paymentRoutes.js";
import reportRoutes from "./src/routes/report.routes.js";
import stripeRoutes from "./src/routes/stripe.routes.js";
import stripeWebhook from "./src/routes/stripe.webhook.js";
import uploadRoutes from "./src/routes/upload.routes.js";

dotenv.config();
const app = express();

// ⚡️ Stripe webhook raw body (sabse pehle)
app.use(
  "/api/stripe/webhook",
  bodyParser.raw({ type: "application/json" }),
  stripeWebhook
);

// ✅ Middlewares
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// ✅ API Routes
app.use("/api/ai", aiRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/expenses", expensesRoutes);
app.use("/api/notifications", notificationsRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/stripe", stripeRoutes);
app.use("/api/upload", uploadRoutes);

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("🚀 API is running successfully...");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
