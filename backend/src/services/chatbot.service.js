class ChatbotService {
  async getReply(message) {
    try {
      return {
        reply: `You said: ${message}`,
      };
    } catch (error) {
      throw new Error("Chatbot service error: " + error.message);
    }
  }
}

export default new ChatbotService();
