import bcrypt from 'bcryptjs'
export const hashPassword = async (pw) => bcrypt.hash(pw, 10)
export const comparePassword = async (pw, hash) => bcrypt.compare(pw, hash)
