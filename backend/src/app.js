
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import "./config/index.js";

import { errorHandler, notFound } from "./middlewares/index.js";

import routes from "./routes/index.js";

const app = express();

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("🚀 AI Finance SaaS Backend is running!");
});

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/api", routes);

app.get("/api", (req, res) => {
  res.json({ message: "✅ API base is working" });
});

console.log("📌 API routes mounted at /api/*");

app.use(notFound);
app.use(errorHandler);

export default app;
