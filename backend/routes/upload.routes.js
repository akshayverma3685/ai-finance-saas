import express from "express";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// 📂 Upload receipt
router.post("/", upload.single("file"), (req, res) => {
  res.json({
    success: true,
    filename: req.file.originalname,
    message: "File uploaded successfully"
  });
});

export default router;
