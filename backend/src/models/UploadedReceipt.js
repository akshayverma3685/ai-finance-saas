import mongoose from "mongoose";
const UploadedReceiptSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  filePath: String,
  parsed: Object
}, { timestamps: true });
export default mongoose.model("UploadedReceipt", UploadedReceiptSchema);
