export default function proOnly(req, res, next) {
  if (req.user?.plan === "pro") return next();
  return res.status(403).json({ error: "Pro feature. Please upgrade." });
}
