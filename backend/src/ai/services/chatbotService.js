// src/ai/services/chatbotService.js
import { callAIModel } from "./aiService.js";

/**
 * Chatbot service for answering finance-related queries
 */
export const chatbotReply = async (message) => {
  const prompt = `
  You are a financial assistant. 
  User asked: "${message}".
  Respond concisely and helpfully with finance advice, budgeting tips or SaaS features.
  `;

  return await callAIModel(prompt);
};
