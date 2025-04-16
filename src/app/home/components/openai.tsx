"use client";

import { useState, ChangeEvent } from "react";

type ChatMessage = {
  user?: string;
  ai?: string;
};

export default function ChatBot() {
  const [input, setInput] = useState<string>("");
  const [chat, setChat] = useState<ChatMessage[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    setChat([...chat, { user: input }, { ai: data.reply }]);
    setInput("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto mt-10 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">💬 How may I help you?</h2>
      <div className="space-y-2 mb-4 max-h-96 overflow-y-auto">
        {chat.map((msg, i) => (
          <div key={i}>
            <p className="text-sm">
              <strong>{msg.user ? "You" : "AI"}:</strong> {msg.user || msg.ai}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded-md"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
