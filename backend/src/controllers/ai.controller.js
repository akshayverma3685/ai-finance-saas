import axios from "axios";
import Expense from "../models/Expense.js";

export async function insights(req, res) {
  const expenses = await Expense.find({ userId: req.user._id }).lean();
  const prompt = `You are a finance assistant. Analyze these expenses and return 3 insights and 3 savings tips in bullet points. Data: ${JSON.stringify(expenses)}`;
  try {
    const r = await axios.post("https://api.openai.com/v1/chat/completions", {
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    }, { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } });
    res.json({ insights: r.data.choices[0].message.content });
  } catch {
    res.status(500).json({ error: "AI provider error" });
  }
}
