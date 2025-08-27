import mongoose from "mongoose";
import config from "./index.js";

mongoose.set("strictQuery", true);

console.log("🔍 Mongo URI from config:", config.db.uri);
console.log("🔍 DB Name from config:", config.db.name);

mongoose
  .connect(config.db.uri, {
    dbName: config.db.name,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((e) => {
    console.error("❌ MongoDB connection error:", e.message);
    process.exit(1);
  });

export default mongoose;
