// src/services/chatbot.service.js

class ChatbotService {
  async getReply(message) {
    try {
      // Mock response (abhi ke liye static reply)
      return {
        reply: `You said: ${message}`,
      };
    } catch (error) {
      throw new Error("Chatbot service error: " + error.message);
    }
  }
}

export default new ChatbotService();
