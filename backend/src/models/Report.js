// backend/src/models/report.js
import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["pdf", "excel"], required: true },
    fileUrl: { type: String, required: true },
    generatedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model("Report", reportSchema);
