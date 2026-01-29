import { useState, useRef, useEffect, forwardRef } from 'react';
import { cn } from '../_shared/utils';
import { getChatWidgetStyles } from './theme-styles';
import type {
  ChatWidgetProps,
  ChatHeaderProps,
  ChatMessagesProps,
  ChatMessageProps,
  ChatInputProps,
  ChatTriggerProps,
  ChatMessage,
} from './types';

// Icons
const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const BotIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zM7.5 13a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 9a5 5 0 00-5 5v1h10v-1a5 5 0 00-5-5z" />
  </svg>
);

// Sub-components
const ChatHeader = forwardRef<HTMLDivElement, ChatHeaderProps>(
  ({ theme, title, subtitle, avatar, onClose }, ref) => {
    const styles = getChatWidgetStyles(theme);

    return (
      <div ref={ref} className={styles.header.container}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={styles.header.avatar}>
              {avatar ? (
                <img src={avatar} alt={title} className="w-full h-full object-cover rounded-inherit" />
              ) : (
                <BotIcon />
              )}
            </div>
            <div>
              <h3 className={styles.header.title}>{title}</h3>
              {subtitle && <p className={styles.header.subtitle}>{subtitle}</p>}
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className={styles.header.closeButton}
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </div>
    );
  }
);
ChatHeader.displayName = 'ChatHeader';

const ChatMessageItem = forwardRef<HTMLDivElement, ChatMessageProps>(
  ({ theme, message }, ref) => {
    const styles = getChatWidgetStyles(theme);
    const isUser = message.sender === 'user';

    return (
      <div
        ref={ref}
        className={cn('flex', isUser ? 'justify-end' : 'justify-start')}
      >
        <div className={cn('flex gap-2 max-w-[80%]', isUser ? 'flex-row-reverse' : 'flex-row')}>
          {!isUser && (
            <div className={styles.messages.agentAvatar}>
              {message.avatar ? (
                <img src={message.avatar} alt="Agent" className="w-full h-full object-cover rounded-inherit" />
              ) : (
                <BotIcon />
              )}
            </div>
          )}
          <div>
            <div className={isUser ? styles.messages.userBubble : styles.messages.agentBubble}>
              {message.content}
            </div>
            <span className={cn(styles.messages.timestamp, isUser && 'text-right')}>
              {message.timestamp}
            </span>
          </div>
        </div>
      </div>
    );
  }
);
ChatMessageItem.displayName = 'ChatMessageItem';

const ChatMessages = forwardRef<HTMLDivElement, ChatMessagesProps>(
  ({ theme, messages }, ref) => {
    const styles = getChatWidgetStyles(theme);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }, [messages]);

    return (
      <div ref={containerRef} className={styles.messages.container}>
        {messages.map((msg) => (
          <ChatMessageItem key={msg.id} theme={theme} message={msg} />
        ))}
      </div>
    );
  }
);
ChatMessages.displayName = 'ChatMessages';

const ChatInput = forwardRef<HTMLDivElement, ChatInputProps>(
  ({ theme, value, onChange, onSend, placeholder, quickReplies }, ref) => {
    const styles = getChatWidgetStyles(theme);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onSend();
      }
    };

    return (
      <div ref={ref} className={styles.input.container}>
        {quickReplies && quickReplies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => onChange(reply)}
                className={styles.input.quickReply}
              >
                {reply}
              </button>
            ))}
          </div>
        )}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={styles.input.inputField}
          />
          <button
            onClick={onSend}
            disabled={!value.trim()}
            className={cn(
              styles.input.sendButton,
              !value.trim() && 'opacity-50 cursor-not-allowed'
            )}
            aria-label="Send message"
          >
            <SendIcon />
          </button>
        </div>
      </div>
    );
  }
);
ChatInput.displayName = 'ChatInput';

export const ChatTrigger = forwardRef<HTMLButtonElement, ChatTriggerProps>(
  ({ theme, onClick, position = 'bottom-right', icon }, ref) => {
    const styles = getChatWidgetStyles(theme);

    const positionClasses = {
      'bottom-right': 'fixed bottom-6 right-6',
      'bottom-left': 'fixed bottom-6 left-6',
    };

    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          styles.trigger.button,
          positionClasses[position],
          'flex items-center justify-center'
        )}
        aria-label="Open chat"
      >
        <span className={styles.trigger.icon}>
          {icon || <ChatIcon />}
        </span>
      </button>
    );
  }
);
ChatTrigger.displayName = 'ChatTrigger';

// Main Component
export const ChatWidget = forwardRef<HTMLDivElement, ChatWidgetProps>(
  (
    {
      theme,
      position = 'bottom-right',
      title = 'Support',
      subtitle,
      avatar,
      placeholder = 'Type a message...',
      messages,
      onSend,
      onClose,
      quickReplies,
      className,
    },
    ref
  ) => {
    const styles = getChatWidgetStyles(theme);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
      if (inputValue.trim()) {
        onSend(inputValue.trim());
        setInputValue('');
      }
    };

    const positionClasses = {
      'bottom-right': 'fixed bottom-6 right-6',
      'bottom-left': 'fixed bottom-6 left-6',
    };

    return (
      <div
        ref={ref}
        className={cn(
          styles.container,
          'w-full max-w-sm',
          className
        )}
      >
        <ChatHeader
          theme={theme}
          title={title}
          subtitle={subtitle}
          avatar={avatar}
          onClose={onClose}
        />
        <ChatMessages theme={theme} messages={messages} />
        <ChatInput
          theme={theme}
          value={inputValue}
          onChange={setInputValue}
          onSend={handleSend}
          placeholder={placeholder}
          quickReplies={quickReplies}
        />
      </div>
    );
  }
);
ChatWidget.displayName = 'ChatWidget';

// Floating Chat Widget (with trigger button)
export interface FloatingChatWidgetProps extends ChatWidgetProps {
  defaultOpen?: boolean;
  triggerIcon?: React.ReactNode;
}

export const FloatingChatWidget = forwardRef<HTMLDivElement, FloatingChatWidgetProps>(
  ({ defaultOpen = false, triggerIcon, position = 'bottom-right', ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const styles = getChatWidgetStyles(props.theme);

    const positionClasses = {
      'bottom-right': 'fixed bottom-24 right-6',
      'bottom-left': 'fixed bottom-24 left-6',
    };

    return (
      <>
        {isOpen && (
          <div
            ref={ref}
            className={cn(
              styles.container,
              'w-full max-w-sm z-50',
              positionClasses[position]
            )}
          >
            <ChatWidget
              {...props}
              position={position}
              onClose={() => setIsOpen(false)}
              className="relative"
            />
          </div>
        )}
        <ChatTrigger
          theme={props.theme}
          onClick={() => setIsOpen(!isOpen)}
          position={position}
          icon={triggerIcon}
        />
      </>
    );
  }
);
FloatingChatWidget.displayName = 'FloatingChatWidget';

export default ChatWidget;
