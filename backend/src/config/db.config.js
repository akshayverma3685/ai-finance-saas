// src/config/db.js
import mongoose from "mongoose";
import config from "./index.js";

mongoose.set("strictQuery", true);

mongoose
  .connect(config.mongoURI, {   // 👈 yaha fix: config.mongoURI use karo
    dbName: config.dbName,      // DB name env se lega
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((e) => {
    console.error("❌ MongoDB connection error:", e.message);
    process.exit(1);
  });

export default mongoose;
