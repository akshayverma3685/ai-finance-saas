// src/server.js
import http from "http";
import mongoose from "mongoose";   // ✅ Mongoose import kiya
import app from "./app.js";
import config from "./config/index.js";

// ✅ Create HTTP server
const server = http.createServer(app);

// ✅ Connect MongoDB before starting server
const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");

    // Start server only after DB connection
    server.listen(config.port, () => {
      console.log(`🚀 Server running on http://localhost:${config.port} [${config.env}]`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

// ✅ Graceful shutdown handler
const shutdown = (signal) => {
  console.log(`\n🛑 ${signal} received. Shutting down gracefully...`);
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log("✅ MongoDB connection closed.");
      process.exit(0);
    });
  });
};

// Handle crashes & signals
process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
  shutdown("uncaughtException");
});
process.on("unhandledRejection", (reason) => {
  console.error("❌ Unhandled Rejection:", reason);
  shutdown("unhandledRejection");
});

// ✅ Start app
connectDB();
