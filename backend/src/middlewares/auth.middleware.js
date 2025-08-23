import jwt from 'jsonwebtoken'
import { COOKIE_NAME } from '../config/jwt.config.js'
import { unauthorized } from '../utils/apiResponse.js'
import User from '../models/User.js'

export const auth = async (req, res, next) => {
  try {
    const header = req.headers.authorization || ''
    const token = header.startsWith('Bearer ')
      ? header.slice(7)
      : req.cookies && req.cookies[COOKIE_NAME]

    if (!token) return unauthorized(res, 'No token provided')

    const payload = jwt.verify(token, process.env.JWT_SECRET || 'dev_secret')
    const user = await User.findById(payload.sub).select('-password')
    if (!user) return unauthorized(res, 'User not found')

    req.user = user
    next()
  } catch (_e) {
    return unauthorized(res, 'Invalid or expired token')
  }
}
