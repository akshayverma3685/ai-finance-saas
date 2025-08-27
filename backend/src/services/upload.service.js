import fs from 'fs'
import path from 'path'
import multer from 'multer'

const uploadDir = path.join(process.cwd(), 'uploads')

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, unique + '-' + file.originalname)
  }
})

export const uploader = multer({ storage })

export const parseOCR = async (filePath) => {
  return `OCR_TEXT_FROM_FILE: ${path.basename(filePath)}`
}
