import mongoose from "mongoose";

const settingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    theme: {
      type: String,
      enum: ["light", "dark", "system"],
      default: "light",
    },
    language: {
      type: String,
      default: "en",
    },
    notifications: {
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: false },
      push: { type: Boolean, default: true },
    },
    preferences: {
      type: Object, // for storing extra UI/UX preferences
      default: {},
    },
  },
  { timestamps: true }
);

const Setting = mongoose.model("Setting", settingSchema);

export default Setting;
