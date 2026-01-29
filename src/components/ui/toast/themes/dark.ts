import type { ToastThemeConfig } from '../Toast.types';

export const darkToastTheme: ToastThemeConfig = {
  info: {
    container: 'bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 shadow-2xl',
    icon: '',
    iconBackground: 'w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center',
    title: 'text-sm font-medium text-zinc-100',
    description: 'text-xs text-zinc-500 mt-0.5',
    closeButton: 'text-zinc-600 hover:text-zinc-400 transition-colors',
  },
  success: {
    container: 'bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 shadow-2xl',
    icon: '',
    iconBackground: 'w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center',
    title: 'text-sm font-medium text-zinc-100',
    description: 'text-xs text-zinc-500 mt-0.5',
    closeButton: 'text-zinc-600 hover:text-zinc-400 transition-colors',
  },
  warning: {
    container: 'bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 shadow-2xl',
    icon: '',
    iconBackground: 'w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center',
    title: 'text-sm font-medium text-zinc-100',
    description: 'text-xs text-zinc-500 mt-0.5',
    closeButton: 'text-zinc-600 hover:text-zinc-400 transition-colors',
  },
  error: {
    container: 'bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 shadow-2xl',
    icon: '',
    iconBackground: 'w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center',
    title: 'text-sm font-medium text-zinc-100',
    description: 'text-xs text-zinc-500 mt-0.5',
    closeButton: 'text-zinc-600 hover:text-zinc-400 transition-colors',
  },
  animation: 'animate-[darkSlide_0.3s_ease-out]',
};
