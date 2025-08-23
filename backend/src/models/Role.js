import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["user", "pro", "admin"],
      default: "user",
    },
    permissions: [
      {
        type: String, // e.g., "read:reports", "write:expenses"
      },
    ],
  },
  { timestamps: true }
);

const Role = mongoose.model("Role", roleSchema);

export default Role;
