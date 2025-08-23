import authMiddleware from "./auth.middleware.js";
import adminMiddleware from "./admin.middleware.js";
import errorMiddleware from "./error.middleware.js";
import loggerMiddleware from "./logger.middleware.js";
import rateLimitMiddleware from "./rateLimit.middleware.js";
import validateMiddleware from "./validate.middleware.js";
import proMiddleware from "./pro.middleware.js";

export {
  authMiddleware,
  adminMiddleware,
  errorMiddleware,
  loggerMiddleware,
  rateLimitMiddleware,
  validateMiddleware,
  proMiddleware,
};
