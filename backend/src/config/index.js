import dotenv from "dotenv";

dotenv.config();

function required(key, defaultValue) {
  const value = process.env[key] || defaultValue;
  if (value === undefined) {
    throw new Error(`❌ Missing required env variable: ${key}`);
  }
  return value;
}

// ✅ Config object
const config = {
  env: required("NODE_ENV", "development"),
  port: required("PORT", 5000),

  // Security
  jwt: {
    secret: required("JWT_SECRET"),
    expiresIn: required("JWT_EXPIRES_IN", "7d"),
  },
  cookieSecret: required("COOKIE_SECRET"),

  // Database
  db: {
    url: process.env.DATABASE_URL || process.env.MONGO_URI,
  },

  // Payments
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  },
  paypal: {
    clientId: process.env.PAYPAL_CLIENT_ID,
    clientSecret: process.env.PAYPAL_CLIENT_SECRET,
  },

  // Cloudinary
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },

  // AI
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
  },

  // Email
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  sendgrid: {
    apiKey: process.env.SENDGRID_API_KEY,
  },

  // OCR
  ocr: {
    apiKey: process.env.OCR_API_KEY,
  },

  // Monitoring / Analytics
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },

  // App
  app: {
    frontendUrl: process.env.FRONTEND_URL,
  },
};

export default config;
