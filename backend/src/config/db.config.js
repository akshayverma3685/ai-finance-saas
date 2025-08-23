// src/config/db.js
import mongoose from 'mongoose'
import config from './index.js'

mongoose.set('strictQuery', true)

mongoose
  .connect(config.db.url, {
    dbName: process.env.DB_NAME || 'ai_finance_saas',
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((e) => {
    console.error('❌ MongoDB connection error:', e.message)
    process.exit(1)
  })

export default mongoose
