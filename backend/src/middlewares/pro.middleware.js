// ✅ Middleware to allow only PRO (premium) users
const proMiddleware = (req, res, next) => {
  try {
    // Maan lete hain req.user pe user ka data attach hota hai (auth middleware ke baad)
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please log in.",
      });
    }

    if (req.user.role !== "pro" && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. PRO subscription required.",
      });
    }

    // ✅ User is PRO or ADMIN
    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error in pro middleware",
    });
  }
};

export default proMiddleware;
