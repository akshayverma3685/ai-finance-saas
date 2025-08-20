import jwt from "jsonwebtoken";
export function signJwt(payload, opts = {}) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d", ...opts });
}
export function verifyJwt(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
