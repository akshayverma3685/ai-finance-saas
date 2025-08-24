// src/scripts/seedAdmin.js
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
import User from "../models/User.js"

dotenv.config()

async function seedAdmin() {
  try {
    // 1. MongoDB se connect
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
    })
    console.log("✅ MongoDB connected")

    // 2. Admin user check karo
    const existing = await User.findOne({ email: process.env.ADMIN_EMAIL })
    if (existing) {
      console.log("⚠️ Admin already exists:", existing.email)
      process.exit(0)
    }

    // 3. Password hash karo
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)

    // 4. Admin insert karo
    const admin = await User.create({
      name: "Super Admin",
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      role: "admin",
      isPro: true,
    })

    console.log("🎉 Admin created successfully:", admin.email)
    process.exit(0)
  } catch (err) {
    console.error("❌ Error seeding admin:", err)
    process.exit(1)
  }
}

seedAdmin()
