import { useState } from 'react';
import { ChatWidget } from './ChatWidget';
import type { ChatMessage } from './types';

const initialMessages: ChatMessage[] = [
  { id: 1, content: 'Hello! How can I help you today?', sender: 'agent', timestamp: '10:00 AM' },
  { id: 2, content: 'I have a question about my order.', sender: 'user', timestamp: '10:01 AM' },
  { id: 3, content: 'Of course! Please share your order number and I\'ll look into it for you.', sender: 'agent', timestamp: '10:01 AM' },
];

export default function CorporateChatWidget() {
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
    <div className="flex flex-col gap-8 p-8 bg-slate-50 min-h-screen">
      <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Corporate Chat Widget</h2>

      <div className="max-w-sm">
        <ChatWidget
          theme="corporate"
          title="Support"
          subtitle="Business Hours: 9am-5pm"
          messages={messages}
          onSend={handleSend}
          placeholder="Type a message..."
          quickReplies={['Sales Inquiry', 'Technical Support', 'Partnership']}
        />
      </div>
    </div>
  );
}
