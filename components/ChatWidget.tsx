"use client";
import { useState } from 'react';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  async function sendMessage() {
    if (!input.trim()) return;
    const newMessages = [...messages, { id: Date.now(), role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    // Send to API
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages.map(m => ({
        role: m.role,
        content: m.content,
      })) }),
    });
    const reader = res.body?.getReader();
    const decoder = new TextDecoder();
    let assistantContent = '';
    if (reader) {
      // Stream the response
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        assistantContent += decoder.decode(value, { stream: true });
        setMessages(prev => [...prev.filter(m => m.id !== -1), { id: -1, role: 'assistant', content: assistantContent }]);
      }
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="bg-white w-80 h-96 shadow-lg rounded-lg flex flex-col">
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`p-2 rounded-md ${msg.role === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'}`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex">
            <input
              type="text"
              className="flex-1 border rounded-l-md px-2 py-1"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') sendMessage();
              }}
              placeholder="Ask about ESTA..."
            />
            <button
              className="bg-blue-600 text-white px-3 py-1 rounded-r-md"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        {open ? 'Close Chat' : 'Chat'}
      </button>
    </div>
  );
}