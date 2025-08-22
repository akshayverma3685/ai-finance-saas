import fs from 'fs'
import path from 'path'
import multer from 'multer'

const uploadDir = path.join(process.cwd(), 'uploads')

// ensure uploads folder exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

// Multer setup
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

/**
 * OCR parser (replace with real OCR later)
 */
export const parseOCR = async (filePath) => {
  // TODO: integrate Tesseract.js or Vision API
  // For now, just return dummy text
  return `OCR_TEXT_FROM_FILE: ${path.basename(filePath)}`
}
