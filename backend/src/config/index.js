import dotenv from "dotenv";

dotenv.config();

function required(key, defaultValue) {
  const value = process.env[key] || defaultValue;
  if (value === undefined) {
    throw new Error(`❌ Missing required env variable: ${key}`);
  }
  return value;
}

const config = {
  // App
  env: required("NODE_ENV", "development"),
  port: required("PORT", 5000),
  cookieSecret: required("COOKIE_SECRET"),

  // Database
  db: {
    uri: required("MONGODB_URI"),
    name: required("DB_NAME", "ai_finance_saas"),
  },

  // JWT
  jwt: {
    secret: required("JWT_SECRET"),
    expiresIn: required("JWT_EXPIRES_IN", "7d"),
  },

  // Razorpay
  razorpay: {
    keyId: required("RAZORPAY_KEY_ID"),
    keySecret: required("RAZORPAY_KEY_SECRET"),
    planMonthly: process.env.RAZORPAY_PLAN_MONTHLY,
    planYearly: process.env.RAZORPAY_PLAN_YEARLY,
  },

  // OpenAI
  openai: {
    apiKey: required("OPENAI_API_KEY"),
  },

  // Admin
  admin: {
    email: required("ADMIN_EMAIL"),
    password: required("ADMIN_PASSWORD"),
  },

  // Mail
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  sendgrid: {
    apiKey: process.env.SENDGRID_API_KEY,
  },
};

export default config;
