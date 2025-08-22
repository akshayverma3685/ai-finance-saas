import { Router } from 'express'
import multer from 'multer'
import path from 'path'
import { auth } from '../middlewares/auth.middleware.js'
import { ocrCtrl } from '../controllers/upload.controller.js'
import { ensureUploadDir } from '../services/upload.service.js'

const uploadDir = process.env.UPLOAD_DIR || 'uploads'
ensureUploadDir(uploadDir)
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => cb(null, Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname))
})
const upload = multer({ storage })

const r = Router()
r.use(auth)
r.post('/ocr', upload.single('file'), ocrCtrl)
export default r
