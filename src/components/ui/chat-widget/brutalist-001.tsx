import { useState } from 'react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'agent';
  timestamp: string;
}

const initialMessages: Message[] = [
  { id: 1, content: 'HELLO. HOW CAN I HELP?', sender: 'agent', timestamp: '10:00' },
  { id: 2, content: 'I HAVE A QUESTION.', sender: 'user', timestamp: '10:01' },
  { id: 3, content: 'ASK AWAY.', sender: 'agent', timestamp: '10:01' },
];

export default function BrutalistChatWidget() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, {
      id: messages.length + 1,
      content: input.toUpperCase(),
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }]);
    setInput('');
  };

  return (
    <div className="flex flex-col gap-8 p-8 bg-white min-h-screen">
      <h2 className="text-sm font-black text-black uppercase tracking-widest">Brutalist Chat Widget</h2>

      <div className="max-w-sm">
        <div className="border-4 border-black shadow-[8px_8px_0_0_#000]">
          {/* Header */}
          <div className="p-4 bg-black text-white border-b-4 border-black">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-4 border-white flex items-center justify-center font-black">
                  AI
                </div>
                <div>
                  <h3 className="font-black uppercase">SUPPORT</h3>
                  <p className="text-xs font-bold text-yellow-400">● ONLINE</p>
                </div>
              </div>
              <button className="p-2 border-2 border-white hover:bg-white hover:text-black transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] p-3 border-4 border-black ${
                    msg.sender === 'user'
                      ? 'bg-black text-white'
                      : 'bg-yellow-400 text-black'
                  }`}
                  style={{ boxShadow: '4px 4px 0 0 #000' }}
                >
                  <p className="text-sm font-black">{msg.content}</p>
                  <p className={`text-xs mt-1 font-bold ${msg.sender === 'user' ? 'text-gray-400' : 'text-black/60'}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-2 bg-gray-100 border-t-4 border-black flex gap-2 flex-wrap">
            {['TRACK ORDER', 'RETURN', 'HELP'].map((reply) => (
              <button
                key={reply}
                className="px-3 py-1 text-xs font-black uppercase bg-white border-2 border-black hover:bg-black hover:text-white transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t-4 border-black">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="TYPE HERE..."
                className="flex-1 px-4 py-3 bg-white border-4 border-black text-sm font-bold uppercase placeholder:text-gray-400 focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="px-4 py-3 bg-black text-white border-4 border-black font-black uppercase hover:bg-yellow-400 hover:text-black transition-colors"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
