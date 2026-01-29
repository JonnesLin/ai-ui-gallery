import type { ToastThemeConfig } from '../Toast.types';

export const gradientToastTheme: ToastThemeConfig = {
  info: {
    container: 'bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl px-4 py-3 shadow-lg shadow-blue-500/25',
    icon: '',
    iconBackground: 'w-8 h-8 rounded-full bg-white/20 flex items-center justify-center',
    title: 'text-sm font-semibold text-white',
    description: 'text-xs text-white/80 mt-0.5',
    closeButton: 'text-white/60 hover:text-white transition-colors',
  },
  success: {
    container: 'bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl px-4 py-3 shadow-lg shadow-emerald-500/25',
    icon: '',
    iconBackground: 'w-8 h-8 rounded-full bg-white/20 flex items-center justify-center',
    title: 'text-sm font-semibold text-white',
    description: 'text-xs text-white/80 mt-0.5',
    closeButton: 'text-white/60 hover:text-white transition-colors',
  },
  warning: {
    container: 'bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl px-4 py-3 shadow-lg shadow-amber-500/25',
    icon: '',
    iconBackground: 'w-8 h-8 rounded-full bg-white/20 flex items-center justify-center',
    title: 'text-sm font-semibold text-white',
    description: 'text-xs text-white/80 mt-0.5',
    closeButton: 'text-white/60 hover:text-white transition-colors',
  },
  error: {
    container: 'bg-gradient-to-r from-red-500 to-rose-500 rounded-xl px-4 py-3 shadow-lg shadow-red-500/25',
    icon: '',
    iconBackground: 'w-8 h-8 rounded-full bg-white/20 flex items-center justify-center',
    title: 'text-sm font-semibold text-white',
    description: 'text-xs text-white/80 mt-0.5',
    closeButton: 'text-white/60 hover:text-white transition-colors',
  },
  animation: 'animate-[gradientSlide_0.4s_ease-out]',
};
