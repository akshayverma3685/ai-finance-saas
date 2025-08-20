import mongoose from "mongoose";
const AuditLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  action: String,
  meta: Object
}, { timestamps: true });
export default mongoose.model("AuditLog", AuditLogSchema);
