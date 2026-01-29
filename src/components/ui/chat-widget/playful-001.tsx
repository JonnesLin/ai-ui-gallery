import { useState } from 'react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'agent';
  timestamp: string;
}

const initialMessages: Message[] = [
  { id: 1, content: 'Hey there! 👋 How can I help you today?', sender: 'agent', timestamp: '10:00 AM' },
  { id: 2, content: 'Hi! I have a quick question 🤔', sender: 'user', timestamp: '10:01 AM' },
  { id: 3, content: 'Sure thing! Fire away! 🚀', sender: 'agent', timestamp: '10:01 AM' },
];

export default function PlayfulChatWidget() {
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
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100">
      <h2 className="text-sm font-bold text-purple-600 uppercase tracking-widest flex items-center gap-2">
        <span className="animate-bounce">✨</span>
        Playful Chat Widget
        <span className="animate-bounce delay-100">🎨</span>
      </h2>

      <div className="max-w-sm">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-purple-200">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-lg transform -rotate-6 hover:rotate-6 transition-transform">
                🤖
              </div>
              <div>
                <h3 className="font-bold text-lg">Buddy Bot</h3>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  Ready to chat!
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-purple-50 to-pink-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl transform transition-transform hover:scale-105 ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-sm'
                      : 'bg-white text-purple-800 rounded-bl-sm shadow-md border-2 border-purple-100'
                  }`}
                  style={{ boxShadow: msg.sender === 'user' ? '0 4px 0 #7c3aed' : '0 4px 0 #e9d5ff' }}
                >
                  <p className="text-sm font-medium">{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-white/70' : 'text-purple-400'}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-3 bg-white border-t-2 border-purple-100 flex gap-2 flex-wrap">
            {['🎁 Deals', '📦 Track', '💬 FAQ'].map((reply) => (
              <button
                key={reply}
                className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-pink-100 to-purple-100 text-purple-600 rounded-full hover:from-pink-200 hover:to-purple-200 transition-colors transform hover:scale-105"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t-2 border-purple-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Say something fun! 🎉"
                className="flex-1 px-4 py-3 bg-purple-50 rounded-2xl text-sm text-purple-800 placeholder:text-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-200"
              />
              <button
                onClick={handleSend}
                className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl hover:from-pink-600 hover:to-purple-600 transition-colors transform hover:scale-110 active:scale-95"
                style={{ boxShadow: '0 4px 0 #7c3aed' }}
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
