import type { ToastThemeConfig } from '../Toast.types';

export const minimalistToastTheme: ToastThemeConfig = {
  info: {
    container: 'bg-white border border-neutral-100 shadow-sm rounded px-4 py-3',
    icon: 'w-1 h-full min-h-[40px] bg-neutral-400 rounded-full',
    iconBackground: '',
    title: 'text-sm font-medium text-neutral-900',
    description: 'text-xs text-neutral-500 mt-0.5',
    closeButton: 'text-neutral-400 hover:text-neutral-600 transition-colors text-lg leading-none',
  },
  success: {
    container: 'bg-white border border-neutral-100 shadow-sm rounded px-4 py-3',
    icon: 'w-1 h-full min-h-[40px] bg-neutral-900 rounded-full',
    iconBackground: '',
    title: 'text-sm font-medium text-neutral-900',
    description: 'text-xs text-neutral-500 mt-0.5',
    closeButton: 'text-neutral-400 hover:text-neutral-600 transition-colors text-lg leading-none',
  },
  warning: {
    container: 'bg-white border border-neutral-100 shadow-sm rounded px-4 py-3',
    icon: 'w-1 h-full min-h-[40px] bg-amber-500 rounded-full',
    iconBackground: '',
    title: 'text-sm font-medium text-neutral-900',
    description: 'text-xs text-neutral-500 mt-0.5',
    closeButton: 'text-neutral-400 hover:text-neutral-600 transition-colors text-lg leading-none',
  },
  error: {
    container: 'bg-white border border-neutral-100 shadow-sm rounded px-4 py-3',
    icon: 'w-1 h-full min-h-[40px] bg-red-500 rounded-full',
    iconBackground: '',
    title: 'text-sm font-medium text-neutral-900',
    description: 'text-xs text-neutral-500 mt-0.5',
    closeButton: 'text-neutral-400 hover:text-neutral-600 transition-colors text-lg leading-none',
  },
  animation: 'animate-[slideIn_0.3s_ease-out]',
};
