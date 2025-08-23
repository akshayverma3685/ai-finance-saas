export const isPro = (req, res, next) => {
  if (!req.user || req.user.plan !== 'pro') {
    return res.status(403).json({ success: false, message: 'Forbidden: Pro users only' })
  }
  next()
}
