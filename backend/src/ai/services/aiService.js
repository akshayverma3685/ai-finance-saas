// src/ai/services/aiService.js
import axios from "axios";

/**
 * Generic AI Service for external APIs (like OpenAI, HuggingFace etc.)
 */
export const callAIModel = async (prompt, model = "gpt-3.5-turbo") => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 200,
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (err) {
    console.error("AI Service Error:", err.message);
    throw new Error("AI service unavailable, please try again later.");
  }
};
