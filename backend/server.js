// backend/server.js

import { createServer } from "http";
import app from "./src/app.js";

// Port config
const PORT = process.env.PORT || 8080;

// Create HTTP server
const server = createServer(app);

// Start listening
server.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

// Optional: handle errors gracefully
server.on("error", (err) => {
  console.error("❌ Server error:", err);
});
