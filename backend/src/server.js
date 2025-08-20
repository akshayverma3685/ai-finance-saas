import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import expenseRoutes from "./routes/expense.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import reportRoutes from "./routes/report.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import chatbotRoutes from "./routes/chatbot.routes.js";
import stripeRoutes from "./routes/stripe.routes.js";
import stripeWebhookRoute from "./routes/stripe.webhook.js";

dotenv.config();
const app = express();

// Stripe webhook (raw) BEFORE json
app.use("/api/stripe", stripeWebhookRoute);

app.use(cors({ origin: process.env.APP_URL, credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Connect DB
await connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/stripe", stripeRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`🚀 API running on :${port}`));
