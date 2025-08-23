// backend/src/routes/ocr.routes.js

import express from "express";
import multer from "multer";
import Tesseract from "tesseract.js";

const router = express.Router();

// Setup multer for file upload (store in memory for processing)
const upload = multer({ storage: multer.memoryStorage() });

/**
 * @route   POST /api/ocr/upload
 * @desc    Upload an image and extract text using OCR
 * @access  Public (you can add auth middleware later)
 */
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    console.log("🖼️ Image received for OCR:", req.file.originalname);

    // Run OCR on uploaded image buffer
    const { data: { text } } = await Tesseract.recognize(req.file.buffer, "eng");

    res.json({
      success: true,
      extractedText: text.trim()
    });

  } catch (error) {
    console.error("❌ OCR Error:", error);
    res.status(500).json({ error: "Failed to process OCR" });
  }
});

export default router;
