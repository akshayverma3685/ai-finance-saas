import dotenv from "dotenv"

// Load .env
dotenv.config()

const required = (key) => {
  if (!process.env[key]) {
    throw new Error(`❌ Missing required env variable: ${key}`)
  }
  return process.env[key]
}

export const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,

  // MongoDB
  mongoUri: required("MONGO_URI"),

  // JWT
  jwtSecret: required("JWT_SECRET"),
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",

  // Razorpay
  razorpay: {
    keyId: required("RAZORPAY_KEY_ID"),
    keySecret: required("RAZORPAY_KEY_SECRET"),
    planMonthly: process.env.RAZORPAY_PLAN_MONTHLY,
    planYearly: process.env.RAZORPAY_PLAN_YEARLY,
    webhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET || null,
  },

  // OpenAI
  openai: {
    apiKey: required("OPENAI_API_KEY"),
    model: process.env.OPENAI_MODEL || "gpt-4o-mini"
  }
      }
