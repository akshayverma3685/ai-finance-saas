import { useState } from "react";

export default function ChatbotWidget() {
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi! Ask me about your expenses." }]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { from: "user", text: input }, { from: "bot", text: "🤖 I’ll analyze soon..." }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 w-72 bg-white shadow-lg rounded p-4">
      <h3 className="font-bold mb-2">AI Assistant</h3>
      <div className="h-40 overflow-y-auto border p-2 mb-2">
        {messages.map((m, i) => (
          <div key={i} className={m.from === "bot" ? "text-blue-600" : "text-gray-800"}>
            <b>{m.from}: </b>{m.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 border p-1 rounded" />
        <button onClick={sendMessage} className="ml-2 bg-blue-600 text-white px-3 rounded">Send</button>
      </div>
    </div>
  );
}
