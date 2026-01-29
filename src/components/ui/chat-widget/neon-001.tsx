import { useState } from 'react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'agent';
  timestamp: string;
}

const initialMessages: Message[] = [
  { id: 1, content: 'SYSTEM ONLINE. HOW MAY I ASSIST?', sender: 'agent', timestamp: '22:00' },
  { id: 2, content: 'Need help with my account.', sender: 'user', timestamp: '22:01' },
  { id: 3, content: 'PROCESSING REQUEST...', sender: 'agent', timestamp: '22:01' },
];

export default function NeonChatWidget() {
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
    <div className="flex flex-col gap-8 p-8 bg-black min-h-screen">
      <h2
        className="text-sm font-bold text-cyan-400 uppercase tracking-widest"
        style={{ textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF' }}
      >
        Neon Chat Widget
      </h2>

      <div className="max-w-sm">
        <div
          className="bg-gray-950 rounded-xl overflow-hidden border border-cyan-500/30"
          style={{ boxShadow: '0 0 30px rgba(0,255,255,0.2), inset 0 0 30px rgba(0,255,255,0.05)' }}
        >
          {/* Header */}
          <div className="p-4 border-b border-cyan-500/30">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-pink-500"
                style={{ boxShadow: '0 0 15px rgba(255,0,255,0.5)' }}
              >
                <span className="text-pink-400 font-bold" style={{ textShadow: '0 0 10px #FF00FF' }}>AI</span>
              </div>
              <div>
                <h3 className="font-bold text-pink-400" style={{ textShadow: '0 0 8px #FF00FF' }}>NETBOT</h3>
                <p className="text-xs text-cyan-400 flex items-center gap-1">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ boxShadow: '0 0 8px #00FFFF' }}></span>
                  CONNECTED
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-black/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-pink-500/20 border border-pink-500/50 text-pink-300'
                      : 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300'
                  }`}
                  style={{
                    boxShadow: msg.sender === 'user'
                      ? '0 0 15px rgba(255,0,255,0.3)'
                      : '0 0 15px rgba(0,255,255,0.3)',
                  }}
                >
                  <p className="text-sm font-medium">{msg.content}</p>
                  <p className="text-xs mt-1 opacity-60">{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 border-t border-cyan-500/30 flex gap-2 flex-wrap">
            {['DECRYPT', 'SCAN', 'EXIT'].map((reply, i) => {
              const colors = ['#FF00FF', '#00FFFF', '#FFFF00'];
              return (
                <button
                  key={reply}
                  className="px-3 py-1 text-xs font-bold rounded border"
                  style={{
                    borderColor: colors[i],
                    color: colors[i],
                    textShadow: `0 0 8px ${colors[i]}`,
                    boxShadow: `0 0 10px ${colors[i]}40`,
                  }}
                >
                  {reply}
                </button>
              );
            })}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-cyan-500/30">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="ENTER COMMAND..."
                className="flex-1 px-4 py-3 bg-black rounded-lg text-sm text-cyan-400 placeholder:text-cyan-800 border border-cyan-500/30 focus:outline-none focus:border-cyan-500"
                style={{ boxShadow: 'inset 0 0 10px rgba(0,255,255,0.1)' }}
              />
              <button
                onClick={handleSend}
                className="px-4 py-3 bg-pink-500/20 text-pink-400 rounded-lg border border-pink-500/50 hover:bg-pink-500/30 transition-colors"
                style={{ boxShadow: '0 0 15px rgba(255,0,255,0.3)' }}
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
