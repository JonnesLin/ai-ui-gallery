import { useState } from 'react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'agent';
  timestamp: string;
}

const initialMessages: Message[] = [
  { id: 1, content: 'Greetings! How may I be of service?', sender: 'agent', timestamp: '10:00' },
  { id: 2, content: 'Hello! I have a question.', sender: 'user', timestamp: '10:01' },
  { id: 3, content: 'Certainly! Please proceed.', sender: 'agent', timestamp: '10:01' },
];

export default function RetroChatWidget() {
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
    <div
      className="flex flex-col gap-8 p-8 min-h-screen"
      style={{
        backgroundColor: '#FDF5E6',
        backgroundImage: 'radial-gradient(circle, #e5d5c5 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>
        ~ Retro Chat Widget ~
      </h2>

      <div className="max-w-sm">
        <div
          className="overflow-hidden border-4"
          style={{
            backgroundColor: '#FFFAF0',
            borderColor: '#8B4513',
            boxShadow: '6px 6px 0 #8B4513',
          }}
        >
          {/* Header */}
          <div
            className="p-4 border-b-4"
            style={{ backgroundColor: '#8B4513', borderColor: '#8B4513' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 border-2 flex items-center justify-center"
                style={{
                  backgroundColor: '#FFFAF0',
                  borderColor: '#FFFAF0',
                  fontFamily: 'Georgia, serif',
                  color: '#8B4513',
                  fontWeight: 'bold',
                }}
              >
                ☎
              </div>
              <div>
                <h3 className="font-bold" style={{ color: '#FFFAF0', fontFamily: 'Georgia, serif' }}>Help Desk</h3>
                <p className="text-xs" style={{ color: '#DEB887' }}>● Available</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            className="h-80 overflow-y-auto p-4 space-y-4"
            style={{
              backgroundImage: 'repeating-linear-gradient(#FFFAF0 0px, #FFFAF0 24px, #e8dcc8 25px)',
            }}
          >
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[80%] p-3 border-2"
                  style={{
                    backgroundColor: msg.sender === 'user' ? '#8B4513' : '#FFF8DC',
                    borderColor: '#8B4513',
                    color: msg.sender === 'user' ? '#FFFAF0' : '#8B4513',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p className="text-xs mt-1 opacity-70">{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 border-t-4 flex gap-2 flex-wrap" style={{ backgroundColor: '#FFF8DC', borderColor: '#8B4513' }}>
            {['Inquire', 'Order Status', 'Contact'].map((reply) => (
              <button
                key={reply}
                className="px-3 py-1 text-xs border-2 hover:bg-[#8B4513] hover:text-[#FFFAF0] transition-colors"
                style={{
                  backgroundColor: '#FFFAF0',
                  borderColor: '#8B4513',
                  color: '#8B4513',
                  fontFamily: 'Georgia, serif',
                }}
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t-4" style={{ backgroundColor: '#FFFAF0', borderColor: '#8B4513' }}>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 text-sm border-2 focus:outline-none"
                style={{
                  backgroundColor: '#FFF8DC',
                  borderColor: '#8B4513',
                  color: '#8B4513',
                  fontFamily: 'Georgia, serif',
                }}
              />
              <button
                onClick={handleSend}
                className="px-4 py-3 border-2 hover:bg-[#A0522D] transition-colors"
                style={{
                  backgroundColor: '#8B4513',
                  borderColor: '#8B4513',
                  color: '#FFFAF0',
                  fontFamily: 'Georgia, serif',
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
