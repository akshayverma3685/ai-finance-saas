
import express from "express";
import multer from "multer";
import Tesseract from "tesseract.js";

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    console.log("🖼️ Image received for OCR:", req.file.originalname);

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
