import type { ThemeName } from '../_themes/types';

export type MessageSender = 'user' | 'agent';

export interface ChatMessage {
  id: string | number;
  content: string;
  sender: MessageSender;
  timestamp: string;
  avatar?: string;
}

export type ChatPosition = 'bottom-right' | 'bottom-left';

export interface ChatWidgetProps {
  theme: ThemeName;
  position?: ChatPosition;
  title?: string;
  subtitle?: string;
  avatar?: string;
  placeholder?: string;
  messages: ChatMessage[];
  onSend: (message: string) => void;
  onClose?: () => void;
  quickReplies?: string[];
  className?: string;
}

export interface ChatHeaderProps {
  theme: ThemeName;
  title: string;
  subtitle?: string;
  avatar?: string;
  onClose?: () => void;
}

export interface ChatMessagesProps {
  theme: ThemeName;
  messages: ChatMessage[];
}

export interface ChatMessageProps {
  theme: ThemeName;
  message: ChatMessage;
}

export interface ChatInputProps {
  theme: ThemeName;
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  placeholder?: string;
  quickReplies?: string[];
}

export interface ChatTriggerProps {
  theme: ThemeName;
  onClick: () => void;
  position?: ChatPosition;
  icon?: React.ReactNode;
}
