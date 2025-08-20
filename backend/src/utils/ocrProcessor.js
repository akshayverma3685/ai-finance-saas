// backend/src/utils/ocrProcessor.js
import Tesseract from "tesseract.js";

export const extractTextFromImage = async (filePath) => {
  try {
    const { data: { text } } = await Tesseract.recognize(filePath, "eng");
    return text;
  } catch (err) {
    console.error("OCR failed", err);
    return "";
  }
};
