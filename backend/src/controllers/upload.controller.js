import { parseOCR } from '../services/upload.service.js'
import { ok } from '../utils/apiResponse.js'

export const ocrUploadCtrl = async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' })
    const text = await parseOCR(req.file.path)
    return ok(res, { text })
  } catch (err) {
    next(err)
  }
}
