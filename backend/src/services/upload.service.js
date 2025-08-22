import fs from 'fs'
export const ensureUploadDir = (dir) => { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }) }
export const parseOCR = async (filePath) => {
  // Integrate real OCR here (Tesseract/Cloud). For now:
  return `OCR_TEXT:${filePath.split('/').pop()}`
}
