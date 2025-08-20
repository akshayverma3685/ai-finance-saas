import multer from "multer";
import path from "path";
import fs from "fs";
import Tesseract from "tesseract.js";
import UploadedReceipt from "../models/UploadedReceipt.js";
import Expense from "../models/Expense.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "backend/uploads";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `receipt-${Date.now()}${ext}`);
  }
});
export const upload = multer({ storage });

export async function ocrParse(req,res){
  const filePath = req.file.path;
  const result = await Tesseract.recognize(filePath, "eng");
  const text = result.data.text || "";
  const match = text.match(/(total|amount)\s*[:=]?\s*([0-9]+\.[0-9]{2})/i);
  const amount = match ? Number(match[2]) : null;
  const exp = amount ? await Expense.create({
    userId: req.user._id, title: "Receipt", amount, category: "Uncategorized", source: "ocr"
  }) : null;

  const rec = await UploadedReceipt.create({ userId: req.user._id, filePath, parsed: { text, amount } });
  res.json({ success:true, parsed: rec.parsed, createdExpense: exp });
}
