// src/controllers/ai.controller.js
import { chatbotReply } from "../ai/services/chatbotService.js";
import { detectFraud } from "../ai/services/fraudDetection.js";
import { generateRecommendations } from "../ai/services/recommendation.js";
import { ok } from "../utils/apiResponse.js";

export const chatCtrl = async (req, res, next) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const reply = await chatbotReply(message);
    return ok(res, { reply });
  } catch (err) {
    next(err);
  }
};

export const fraudCheckCtrl = async (req, res, next) => {
  try {
    const { transactions } = req.body;
    if (!transactions) return res.status(400).json({ error: "Transactions array required" });

    const result = detectFraud(transactions);
    return ok(res, result);
  } catch (err) {
    next(err);
  }
};

export const recommendCtrl = async (req, res, next) => {
  try {
    const { expenses } = req.body;
    if (!expenses) return res.status(400).json({ error: "Expenses array required" });

    const result = generateRecommendations(expenses);
    return ok(res, result);
  } catch (err) {
    next(err);
  }
};
