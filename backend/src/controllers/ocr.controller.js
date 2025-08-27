import { extractTextFromImage } from "../services/ocr.service.js";

export const uploadAndExtractOCR = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const filePath = req.file.path;
    const extractedText = await extractTextFromImage(filePath);

    res.json({ success: true, text: extractedText });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
