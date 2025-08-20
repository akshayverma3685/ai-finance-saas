import axios from "axios";
export async function chat(req,res){
  const { message } = req.body;
  try{
    const r = await axios.post("https://api.openai.com/v1/chat/completions", {
      model: "gpt-4o-mini",
      messages: [{ role:"user", content: message }]
    }, { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }});
    res.json({ reply: r.data.choices[0].message.content });
  }catch{
    res.status(500).json({ error: "Chat error" });
  }
}
