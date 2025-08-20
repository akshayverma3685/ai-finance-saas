import { verifyJwt } from "../config/jwt.js";
import User from "../models/User.js";

export default async function auth(req, res, next) {
  try {
    const header = req.headers.authorization || req.cookies?.token;
    if (!header) return res.status(401).json({ error: "No token" });
    const token = header.startsWith("Bearer ") ? header.slice(7) : header;
    const payload = verifyJwt(token);
    const user = await User.findById(payload.id);
    if (!user) return res.status(401).json({ error: "Invalid user" });
    req.user = user;
    next();
  } catch {
    return res.status(401).json({ error: "Unauthorized" });
  }
}
