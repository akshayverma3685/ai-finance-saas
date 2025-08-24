// src/utils/createAdmin.js
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const createAdmin = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      console.log("⚠️ ADMIN_EMAIL or ADMIN_PASSWORD not set in .env");
      return;
    }

    let admin = await User.findOne({ email: adminEmail });

    if (!admin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      admin = new User({
        name: "Admin",
        email: adminEmail,
        password: hashedPassword,
        role: "admin",
        isPro: true
      });

      await admin.save();
      console.log("✅ Admin user created:", admin.email);
    } else {
      console.log("ℹ️ Admin already exists:", admin.email);
    }
  } catch (err) {
    console.error("❌ Error creating admin:", err.message);
  }
};
