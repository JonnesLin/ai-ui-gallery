import { useState } from 'react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'agent';
  timestamp: string;
}

const initialMessages: Message[] = [
  { id: 1, content: 'Hello! How can I help you today?', sender: 'agent', timestamp: '10:00 AM' },
  { id: 2, content: 'I have a question about my order.', sender: 'user', timestamp: '10:01 AM' },
  { id: 3, content: 'Of course! I\'d be happy to help.', sender: 'agent', timestamp: '10:01 AM' },
];

export default function NatureChatWidget() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, {
      id: messages.length + 1,
      content: input,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }]);
    setInput('');
  };

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gradient-to-b from-emerald-50 to-green-100">
      <h2 className="text-sm font-medium text-emerald-700 uppercase tracking-widest flex items-center gap-2">
        <span>🌿</span> Nature Chat Widget
      </h2>

      <div className="max-w-sm">
        <div className="bg-white/80 backdrop-blur rounded-3xl overflow-hidden shadow-xl border border-emerald-200">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                🌱
              </div>
              <div>
                <h3 className="font-semibold">Eco Support</h3>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  Growing with you
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            className="h-80 overflow-y-auto p-4 space-y-4"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 10 Q35 20 30 30 Q25 20 30 10\' fill=\'%2310B98110\'/%3E%3C/svg%3E")',
            }}
          >
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-emerald-500 text-white rounded-br-md'
                      : 'bg-white text-emerald-800 rounded-bl-md shadow-md border border-emerald-100'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-emerald-100' : 'text-emerald-400'}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 bg-emerald-50 flex gap-2 flex-wrap">
            {['🌳 Plant a tree', '♻️ Eco tips', '🌍 Our mission'].map((reply) => (
              <button
                key={reply}
                className="px-3 py-1.5 text-xs font-medium bg-white text-emerald-700 rounded-full border border-emerald-200 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-emerald-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 bg-emerald-50 rounded-full text-sm text-emerald-800 placeholder:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                onClick={handleSend}
                className="p-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
