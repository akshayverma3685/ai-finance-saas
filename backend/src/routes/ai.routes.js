// src/routes/ai.routes.js
import { Router } from "express";
import { chatCtrl, fraudCheckCtrl, recommendCtrl } from "../controllers/ai.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

// Secure with JWT auth
router.use(auth);

// Chatbot AI
router.post("/chat", chatCtrl);

// Fraud detection
router.post("/fraud-check", fraudCheckCtrl);

// Expense recommendation
router.post("/recommend", recommendCtrl);

export default router;
