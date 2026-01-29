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
  { id: 3, content: 'Of course! Please share your order number.', sender: 'agent', timestamp: '10:01 AM' },
];

export default function ThreeDChatWidget() {
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
    <div className="flex flex-col gap-8 p-8 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <h2 className="text-sm font-bold text-gray-700 uppercase tracking-widest">3D Chat Widget</h2>

      <div className="max-w-sm">
        <div
          className="bg-white rounded-2xl overflow-hidden"
          style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1)',
            transform: 'perspective(1000px) rotateX(2deg)',
          }}
        >
          {/* Header */}
          <div
            className="p-4 text-white"
            style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              boxShadow: '0 4px 0 rgba(0,0,0,0.1), inset 0 -2px 0 rgba(0,0,0,0.1)',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.2)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Support Bot</h3>
                <p className="text-xs text-white/80">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
                      : 'bg-white text-gray-800'
                  }`}
                  style={{
                    boxShadow: msg.sender === 'user'
                      ? '0 4px 0 rgb(29,78,216), 0 6px 12px rgba(0,0,0,0.15)'
                      : '0 4px 0 #e5e7eb, 0 6px 12px rgba(0,0,0,0.08)',
                    transform: 'translateY(-2px)',
                  }}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06)' }}
              />
              <button
                onClick={handleSend}
                className="px-4 py-3 bg-gradient-to-b from-blue-500 to-blue-600 text-white rounded-xl transition-all hover:translate-y-[2px]"
                style={{
                  boxShadow: '0 4px 0 rgb(29,78,216), 0 6px 12px rgba(0,0,0,0.15)',
                }}
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
