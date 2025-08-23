// backend/src/services/ocr.service.js
import Tesseract from "tesseract.js";

export const extractTextFromImage = async (imagePath) => {
  try {
    console.log("🔍 OCR started for:", imagePath);

    const { data: { text } } = await Tesseract.recognize(imagePath, "eng", {
      logger: (m) => console.log(m), // progress log
    });

    console.log("✅ OCR completed");
    return text.trim();
  } catch (error) {
    console.error("❌ OCR Error:", error);
    throw new Error("Failed to extract text from image");
  }
};
