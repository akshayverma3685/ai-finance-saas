import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true, lowercase: true, index: true },
    password: { type: String, required: true },
    isPro: { type: Boolean, default: false },

    role: { 
      type: String, 
      enum: ["user", "admin"], 
      default: "user" 
    }
  },
  { timestamps: true }
)

export default mongoose.model('User', UserSchema)
