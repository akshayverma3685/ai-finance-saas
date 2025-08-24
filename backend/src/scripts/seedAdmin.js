import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ai-finance-saas";

const seedAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    const email = "akshayverma3685@gmail.com";   // ✅ तेरा admin email
    const password = "Akshay@3686#v@#";          // ✅ तेरा admin password
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      console.log("✅ Admin already exists:", email);
    } else {
      await User.create({
        name: "Super Admin",
        email,
        password: hashedPassword,
        role: "admin",
      });
      console.log("🎉 Admin created:", email);
    }

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding admin:", error);
    process.exit(1);
  }
};

seedAdmin();seedAdmin()
