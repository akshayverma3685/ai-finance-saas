import bcrypt from "bcryptjs";
import User from "../models/User.js";
import config from "../config/index.js";

async function seedAdmin() {
  try {
    const adminEmail = config.admin.email;
    const adminPassword = config.admin.password;

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Agar user already hai to update ho jaayega, warna create hoga
    await User.updateOne(
      { email: adminEmail },
      {
        $set: {
          name: "Admin",
          email: adminEmail,
          password: hashedPassword,
          role: "admin",
        },
      },
      { upsert: true } // upsert = update ya insert
    );

    console.log(`✅ Admin ensured/updated: ${adminEmail}`);
  } catch (err) {
    console.error("❌ Error seeding admin:", err);
  }
}

export default seedAdmin;
