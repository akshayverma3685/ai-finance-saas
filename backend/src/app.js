// src/app.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// Load Config (env + db)
import "./config/index.js";

// Middlewares
import { errorHandler, notFound } from "./middlewares/index.js";

// ✅ Aggregated Routes
import routes from "./routes/index.js";

const app = express();

// 🔐 Security & Middleware
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// 🩺 Healthcheck
app.get("/health", (req, res) => res.json({ ok: true }));

// 📌 API Routes (all defined inside routes/index.js)
app.use("/api", routes);

// ❌ Error Handlers
app.use(notFound);
app.use(errorHandler);

export default app;
