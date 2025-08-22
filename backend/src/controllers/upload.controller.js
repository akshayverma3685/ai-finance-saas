import { ok } from '../utils/apiResponse.js'
import { parseOCR } from '../services/upload.service.js'
export const ocrCtrl = async (req, res, next) => {
  try {
    if (!req.file) throw new Error('No file uploaded')
    const text = await parseOCR(req.file.path)
    return ok(res, { filename: req.file.filename, text }, 'OCR processed')
  } catch (e) { next(e) }
}
