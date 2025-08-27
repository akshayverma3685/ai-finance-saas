import OpenAI from "openai";

let openai = null;

if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

export const chatbotReply = async (message) => {
  if (!openai) {
    return "AI chatbot service is disabled in this deployment.";
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messa abges: [{ role: "user", content: message }],
    });

    return response.choices[0].message.content;
  } catch (err) {
    console.error("Chatbot error:", err);
    return "Error while generating chatbot response.";
  }
};
