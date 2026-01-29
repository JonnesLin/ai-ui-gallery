import { useState } from 'react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'agent';
  timestamp: string;
}

const initialMessages: Message[] = [
  { id: 1, content: 'Hello! How can I help?', sender: 'agent', timestamp: '10:00' },
  { id: 2, content: 'I have a question!', sender: 'user', timestamp: '10:01' },
  { id: 3, content: 'Sure, go ahead!', sender: 'agent', timestamp: '10:01' },
];

export default function SketchChatWidget() {
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
        backgroundColor: '#FFFEF5',
        backgroundImage: 'linear-gradient(#e8e8e8 1px, transparent 1px), linear-gradient(90deg, #e8e8e8 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <h2 className="text-sm uppercase tracking-widest" style={{ color: '#444', fontFamily: '"Comic Sans MS", cursive' }}>
        Sketch Chat Widget ✏️
      </h2>

      <div className="max-w-sm">
        <div
          className="bg-white overflow-hidden"
          style={{
            border: '3px solid #333',
            borderRadius: '8px 4px 12px 6px',
            boxShadow: '4px 4px 0 #ddd',
            transform: 'rotate(-0.5deg)',
          }}
        >
          {/* Header */}
          <div
            className="p-4"
            style={{
              borderBottom: '3px solid #333',
              background: 'repeating-linear-gradient(45deg, #fff, #fff 10px, #f5f5f5 10px, #f5f5f5 20px)',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{
                  border: '2px solid #333',
                  borderRadius: '50%',
                  fontFamily: '"Comic Sans MS", cursive',
                }}
              >
                :)
              </div>
              <div>
                <h3 className="font-bold" style={{ color: '#333', fontFamily: '"Comic Sans MS", cursive' }}>Helper Bot</h3>
                <p className="text-xs" style={{ color: '#666', fontFamily: '"Comic Sans MS", cursive' }}>* online *</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((msg, idx) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[80%] p-3"
                  style={{
                    backgroundColor: msg.sender === 'user' ? '#fff' : '#f9f9f9',
                    border: '2px solid #333',
                    borderRadius: `${4 + idx % 3}px ${8 - idx % 2}px ${2 + idx % 4}px ${6 - idx % 3}px`,
                    transform: `rotate(${msg.sender === 'user' ? 0.5 : -0.5}deg)`,
                    backgroundImage: msg.sender === 'agent' ? `repeating-linear-gradient(${90 + idx * 15}deg, transparent, transparent 4px, rgba(0,0,0,0.03) 4px, rgba(0,0,0,0.03) 8px)` : 'none',
                  }}
                >
                  <p className="text-sm" style={{ color: '#333', fontFamily: '"Comic Sans MS", cursive' }}>{msg.content}</p>
                  <p className="text-xs mt-1" style={{ color: '#999', fontFamily: '"Comic Sans MS", cursive' }}>{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div
            className="px-4 py-2 flex gap-2 flex-wrap"
            style={{ borderTop: '2px dashed #333', backgroundColor: '#fafafa' }}
          >
            {['help!', 'thanks', 'bye'].map((reply, i) => (
              <button
                key={reply}
                className="px-3 py-1 text-xs hover:bg-gray-100 transition-colors"
                style={{
                  border: '2px solid #333',
                  borderRadius: `${2 + i}px`,
                  color: '#333',
                  fontFamily: '"Comic Sans MS", cursive',
                  transform: `rotate(${-1 + i}deg)`,
                }}
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4" style={{ borderTop: '3px solid #333', backgroundColor: '#fff' }}>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="type here..."
                className="flex-1 px-4 py-3 text-sm focus:outline-none"
                style={{
                  border: '2px solid #333',
                  borderRadius: '4px 2px 6px 3px',
                  color: '#333',
                  fontFamily: '"Comic Sans MS", cursive',
                }}
              />
              <button
                onClick={handleSend}
                className="px-4 py-3 hover:bg-gray-100 transition-colors"
                style={{
                  border: '2px solid #333',
                  borderRadius: '3px 5px 2px 4px',
                  color: '#333',
                  fontFamily: '"Comic Sans MS", cursive',
                }}
              >
                send →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
