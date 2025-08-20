import express from "express";
import auth from "../middlewares/auth.middleware.js";
import proOnly from "../middlewares/pro.middleware.js";
import { insights } from "../controllers/ai.controller.js";
const router = express.Router();
router.post("/insights", auth, proOnly, insights);
export default router;
