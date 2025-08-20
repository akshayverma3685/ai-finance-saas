import express from "express";
import auth from "../middlewares/auth.middleware.js";
import proOnly from "../middlewares/pro.middleware.js";
import { chat } from "../controllers/chatbot.controller.js";
const router = express.Router();
router.post("/", auth, proOnly, chat);
export default router;
