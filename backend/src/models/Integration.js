import mongoose from "mongoose";

const integrationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["slack", "discord", "whatsapp", "telegram", "zapier"],
      required: true,
    },
    apiKey: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    config: {
      type: Object, // store extra config like webhook URLs, tokens, etc.
      default: {},
    },
  },
  { timestamps: true }
);

const Integration = mongoose.model("Integration", integrationSchema);

export default Integration;
