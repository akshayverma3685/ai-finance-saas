import { Router } from 'express'
import { auth } from '../middlewares/auth.middleware.js'
import { uploader } from '../services/upload.service.js'
import { ocrUploadCtrl } from '../controllers/upload.controller.js'

const r = Router()
r.use(auth)

r.post('/ocr', uploader.single('file'), ocrUploadCtrl)

export default r
