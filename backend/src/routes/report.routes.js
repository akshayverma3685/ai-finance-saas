import express from "express";
import auth from "../middlewares/auth.middleware.js";
import proOnly from "../middlewares/pro.middleware.js";
import { downloadPdf, downloadExcel } from "../controllers/report.controller.js";
const router = express.Router();
router.get("/monthly.pdf", auth, proOnly, downloadPdf);
router.get("/monthly.xlsx", auth, proOnly, downloadExcel);
export default router;
