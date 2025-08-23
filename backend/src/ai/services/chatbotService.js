// backend/src/ai/services/chatbotService.js
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 🔑 from .env
})

export const chatbotReply = async (message) => {
  if (!message || typeof message !== "string") {
    return "❌ Invalid input, please type a valid message."
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // ya gpt-4 agar tumhare paas access hai
      messages: [
        { role: "system", content: "You are a helpful financial assistant chatbot." },
        { role: "user", content: message },
      ],
    })

    return response.choices[0].message.content
  } catch (error) {
    console.error("OpenAI Error:", error)
    return "⚠️ Sorry, I’m facing an issue connecting to AI service."
  }
}
