// server.js
import http from "http";
import app from "./app.js";
import config from "./config/index.js";
import mongoose from "./config/db.js";

// ✅ Create HTTP server
const server = http.createServer(app);

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

// Start server
server.listen(config.port, () => {
  console.log(`🚀 Server running on http://localhost:${config.port} [${config.env}]`);
});

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
