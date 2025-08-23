import jwt from 'jsonwebtoken'
import { hashPassword, comparePassword } from '../utils/hash.js'
import User from '../models/User.js'
import { ACCESS_TOKEN_TTL } from '../config/jwt.config.js'

export const register = async ({ name, email, password }) => {
  const exists = await User.findOne({ email })
  if (exists) throw new Error('Email already registered')
  const hashed = await hashPassword(password)
  const user = await User.create({ name, email, password: hashed })
  return user.toObject({ getters: true, virtuals: false })
}

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email })
  if (!user) throw new Error('Invalid credentials')
  const ok = await comparePassword(password, user.password)
  if (!ok) throw new Error('Invalid credentials')
  const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET || 'dev_secret', { expiresIn: ACCESS_TOKEN_TTL })
  const userSafe = user.toObject()
  delete userSafe.password
  return { token, user: userSafe }
}
