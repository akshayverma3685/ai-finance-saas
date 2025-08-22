import mongoose from 'mongoose'
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ai_finance_saas'
mongoose.set('strictQuery', true)
mongoose
  .connect(uri, { dbName: process.env.DB_NAME || 'ai_finance_saas' })
  .then(() => console.log('MongoDB connected'))
  .catch((e) => {
    console.error('MongoDB connection error:', e.message)
    process.exit(1)
  })
export default mongoose
