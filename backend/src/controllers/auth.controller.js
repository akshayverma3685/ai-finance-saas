import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { signJwt } from "../config/jwt.js";

export async function signup(req, res) {
  const { name, email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ error: "Email already in use" });
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  const token = signJwt({ id: user._id });
  res.json({ token, user: { id: user._id, email: user.email, plan: user.plan } });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "User not found" });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(400).json({ error: "Invalid credentials" });
  const token = signJwt({ id: user._id });
  res.json({ token, user: { id: user._id, email: user.email, plan: user.plan } });
}
