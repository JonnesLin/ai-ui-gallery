import { useState } from 'react';
import { ChatWidget } from './ChatWidget';
import type { ChatMessage } from './types';

const initialMessages: ChatMessage[] = [
  { id: 1, content: 'Hello! How can I help you today?', sender: 'agent', timestamp: '10:00 AM' },
  { id: 2, content: 'I have a question about my order.', sender: 'user', timestamp: '10:01 AM' },
  { id: 3, content: 'Of course! Please share your order number and I\'ll look into it for you.', sender: 'agent', timestamp: '10:01 AM' },
];

export default function GlassmorphismChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const handleSend = (message: string) => {
    const newMessage: ChatMessage = {
      id: messages.length + 1,
      content: message,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <h2 className="text-sm font-medium text-white/80 uppercase tracking-widest">Glassmorphism Chat Widget</h2>

      <div className="max-w-sm">
        <ChatWidget
          theme="glassmorphism"
          title="Support"
          subtitle="Online"
          messages={messages}
          onSend={handleSend}
          placeholder="Type a message..."
          quickReplies={['Track Order', 'Return Item', 'Contact Us']}
        />
      </div>
    </div>
  );
}
