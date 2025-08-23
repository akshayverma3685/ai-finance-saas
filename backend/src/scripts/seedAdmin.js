import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import { config } from "../config/index.js"
import User from "../models/User.js"

const seedAdmin = async () => {
  try {
    await mongoose.connect(config.mongoUri)
    console.log("✅ MongoDB connected")

    const email = process.env.ADMIN_EMAIL || "admin@example.com"
    const password = process.env.ADMIN_PASSWORD || "admin123"

    let user = await User.findOne({ email })
    if (user) {
      console.log("⚠️ Admin already exists:", email)
    } else {
      const hashed = await bcrypt.hash(password, 10)
      user = new User({
        name: "Super Admin",
        email,
        password: hashed,
        role: "admin",   // 👈 make sure your User model supports `role`
        isPro: true
      })
      await user.save()
      console.log("🎉 Admin user created:", email)
    }

    process.exit(0)
  } catch (err) {
    console.error("❌ Error seeding admin:", err)
    process.exit(1)
  }
}

seedAdmin()
