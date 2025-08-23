import rateLimit from "express-rate-limit";

// ✅ Rate limiting: protect API from abuse (e.g. max 100 requests / 15 min per IP)
const rateLimitMiddleware = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // limit each IP
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
  headers: true,
});

export default rateLimitMiddleware
