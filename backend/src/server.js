import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import expenseRoutes from "./routes/expenses.routes.js";   // ✅ plural
import aiRoutes from "./routes/ai.routes.js";
import reportRoutes from "./routes/report.routes.js";
import uploadRoutes from "./routes/upload.routes.js";      // ✅ spelling fix
import chatbotRoutes from "./routes/chatbot.routes.js";
import stripeRoutes from "./routes/stripe.routes.js";
import stripeWebhookRoute from "./routes/stripe.webhook.js";

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Webhook (placed before express.json for Stripe signature validation)
app.use("/api/stripe/webhook", stripeWebhookRoute);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/stripe", stripeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
