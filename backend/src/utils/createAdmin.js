// src/utils/createAdmin.js
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import config from "../config/index.js";

export async function createAdmin() {
  try {
    const adminEmail = config.admin.email;
    const adminPassword = config.admin.password;

    // Check if admin already exists
    let admin = await User.findOne({ email: adminEmail });

    if (!admin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      admin = new User({
        name: "Admin",
        email: adminEmail,
        password: hashedPassword,
        role: "admin",
      });
      await admin.save();
      console.log(`✅ Admin user created: ${adminEmail}`);
    } else {
      console.log(`ℹ️ Admin already exists: ${adminEmail}`);
    }
  } catch (err) {
    console.error("❌ Error creating admin:", err.message);
  }
}
