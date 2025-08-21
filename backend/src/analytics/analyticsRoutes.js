// backend/src/analytics/analyticsRoutes.js
import express from "express";
import { getMonthlyAnalytics } from "./analyticsController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/monthly", authMiddleware, getMonthlyAnalytics);

export default router;
