import { useState, useCallback } from 'react';
import type { ToastProps, ToastType, ToastPosition } from './Toast.types';
import type { ThemeName } from '../_themes';

interface ToastOptions {
  type: ToastType;
  theme: ThemeName;
  title: string;
  description?: string;
  duration?: number;
  closable?: boolean;
  action?: React.ReactNode;
  position?: ToastPosition;
}

interface UseToastReturn {
  toasts: Record<ToastPosition, ToastProps[]>;
  addToast: (options: ToastOptions) => string;
  removeToast: (id: string, position: ToastPosition) => void;
  clearAll: () => void;
}

export function useToast(): UseToastReturn {
  const [toasts, setToasts] = useState<Record<ToastPosition, ToastProps[]>>({
    'top-left': [],
    'top-center': [],
    'top-right': [],
    'bottom-left': [],
    'bottom-center': [],
    'bottom-right': [],
  });

  const addToast = useCallback((options: ToastOptions): string => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const position = options.position || 'top-right';

    const newToast: ToastProps = {
      id,
      type: options.type,
      theme: options.theme,
      title: options.title,
      description: options.description,
      duration: options.duration,
      closable: options.closable,
      action: options.action,
      position,
    };

    setToasts((prev) => ({
      ...prev,
      [position]: [...prev[position], newToast],
    }));

    return id;
  }, []);

  const removeToast = useCallback((id: string, position: ToastPosition) => {
    setToasts((prev) => ({
      ...prev,
      [position]: prev[position].filter((toast) => toast.id !== id),
    }));
  }, []);

  const clearAll = useCallback(() => {
    setToasts({
      'top-left': [],
      'top-center': [],
      'top-right': [],
      'bottom-left': [],
      'bottom-center': [],
      'bottom-right': [],
    });
  }, []);

  return { toasts, addToast, removeToast, clearAll };
}
