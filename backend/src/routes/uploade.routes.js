import express from "express";
import auth from "../middlewares/auth.middleware.js";
import proOnly from "../middlewares/pro.middleware.js";
import { upload, ocrParse } from "../controllers/upload.controller.js";
const router = express.Router();
router.post("/receipt", auth, proOnly, upload.single("file"), ocrParse);
export default router;
