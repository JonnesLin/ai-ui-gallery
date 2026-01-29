import type { ThemeName } from '../_themes/types';

export interface FormThemeStyles {
  label: string;
  requiredMark: string;
  input: string;
  error: string;
  helper: string;
  sectionTitle: string;
}

export const formThemeStyles: Record<ThemeName, FormThemeStyles> = {
  minimalist: {
    label: 'text-sm text-gray-700 mb-2',
    requiredMark: 'text-gray-400',
    input: 'w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 transition-colors bg-transparent text-gray-900 placeholder:text-gray-400',
    error: 'mt-1 text-xs text-red-600',
    helper: 'mt-1 text-xs text-gray-500',
    sectionTitle: 'text-sm font-medium text-gray-900 pb-3 border-b border-gray-200',
  },
  glassmorphism: {
    label: 'text-sm font-medium text-white mb-2',
    requiredMark: 'text-pink-300',
    input: 'w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all',
    error: 'mt-2 text-xs text-red-200',
    helper: 'mt-2 text-xs text-white/70',
    sectionTitle: 'text-lg font-semibold text-white mb-1',
  },
  neumorphism: {
    label: 'text-sm font-medium text-gray-700 mb-2',
    requiredMark: 'text-indigo-500',
    input: 'w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-900 placeholder:text-gray-400 focus:outline-none shadow-inner-neumorphic',
    error: 'mt-2 text-xs text-red-600',
    helper: 'mt-2 text-xs text-gray-500',
    sectionTitle: 'text-lg font-semibold text-gray-800 mb-1',
  },
  dark: {
    label: 'text-sm font-medium text-gray-300 mb-2',
    requiredMark: 'text-red-500',
    input: 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all',
    error: 'mt-2 text-xs text-red-400',
    helper: 'mt-2 text-xs text-gray-500',
    sectionTitle: 'text-lg font-semibold text-white',
  },
  gradient: {
    label: 'text-sm font-medium text-white mb-2',
    requiredMark: 'text-pink-300',
    input: 'w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all',
    error: 'mt-2 text-xs text-red-200',
    helper: 'mt-2 text-xs text-white/70',
    sectionTitle: 'text-lg font-bold text-white mb-1',
  },
  brutalist: {
    label: 'text-sm font-bold text-black mb-2 uppercase',
    requiredMark: 'text-black',
    input: 'w-full px-4 py-3 border-4 border-black bg-white text-black placeholder:text-gray-500 focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
    error: 'mt-2 text-xs font-bold text-red-600 uppercase',
    helper: 'mt-2 text-xs font-bold text-gray-600',
    sectionTitle: 'text-xl font-black text-black uppercase',
  },
  retro: {
    label: 'text-sm font-semibold text-amber-900 mb-2',
    requiredMark: 'text-orange-600',
    input: 'w-full px-4 py-3 border-2 border-amber-900 bg-amber-50 text-amber-900 placeholder:text-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-500',
    error: 'mt-2 text-xs text-red-700',
    helper: 'mt-2 text-xs text-amber-700',
    sectionTitle: 'text-lg font-bold text-amber-900',
  },
  cyberpunk: {
    label: 'text-sm font-bold text-cyan-400 mb-2 uppercase',
    requiredMark: 'text-pink-500',
    input: 'w-full px-4 py-3 bg-black border border-cyan-500 text-cyan-400 placeholder:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all',
    error: 'mt-2 text-xs font-bold text-pink-500',
    helper: 'mt-2 text-xs text-cyan-600',
    sectionTitle: 'text-lg font-black text-cyan-400 uppercase',
  },
  pastel: {
    label: 'text-sm font-medium text-purple-900 mb-2',
    requiredMark: 'text-pink-500',
    input: 'w-full px-4 py-3 rounded-xl bg-white border-2 border-purple-200 text-purple-900 placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all',
    error: 'mt-2 text-xs text-red-500',
    helper: 'mt-2 text-xs text-purple-600',
    sectionTitle: 'text-lg font-semibold text-purple-900',
  },
  corporate: {
    label: 'text-sm font-medium text-slate-700 mb-2',
    requiredMark: 'text-blue-600',
    input: 'w-full px-4 py-2.5 rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all',
    error: 'mt-1.5 text-xs text-red-600',
    helper: 'mt-1.5 text-xs text-slate-500',
    sectionTitle: 'text-base font-semibold text-slate-900 border-b border-slate-200 pb-2',
  },
  playful: {
    label: 'text-sm font-bold text-purple-700 mb-2',
    requiredMark: 'text-pink-500',
    input: 'w-full px-4 py-3 rounded-2xl border-3 border-purple-400 bg-yellow-50 text-purple-900 placeholder:text-purple-400 focus:outline-none focus:ring-4 focus:ring-pink-300 transform focus:scale-105 transition-all',
    error: 'mt-2 text-xs font-bold text-red-600',
    helper: 'mt-2 text-xs text-purple-600',
    sectionTitle: 'text-lg font-black text-purple-700',
  },
  '3d': {
    label: 'text-sm font-semibold text-gray-800 mb-2',
    requiredMark: 'text-red-600',
    input: 'w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)]',
    error: 'mt-2 text-xs text-red-600',
    helper: 'mt-2 text-xs text-gray-600',
    sectionTitle: 'text-lg font-bold text-gray-800',
  },
  flat: {
    label: 'text-sm font-medium text-gray-700 mb-2',
    requiredMark: 'text-red-500',
    input: 'w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors',
    error: 'mt-2 text-xs text-red-600',
    helper: 'mt-2 text-xs text-gray-500',
    sectionTitle: 'text-base font-semibold text-gray-800',
  },
  futuristic: {
    label: 'text-sm font-bold text-cyan-300 mb-2 uppercase tracking-wide',
    requiredMark: 'text-purple-400',
    input: 'w-full px-4 py-3 bg-gray-900 border border-cyan-500/50 text-cyan-100 placeholder:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all',
    error: 'mt-2 text-xs font-bold text-red-400',
    helper: 'mt-2 text-xs text-cyan-600',
    sectionTitle: 'text-lg font-black text-cyan-300 uppercase tracking-wider',
  },
  luxury: {
    label: 'text-sm font-medium text-amber-100 mb-2',
    requiredMark: 'text-yellow-400',
    input: 'w-full px-4 py-3 rounded-lg bg-black/30 border border-amber-700/50 text-amber-100 placeholder:text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all',
    error: 'mt-2 text-xs text-red-300',
    helper: 'mt-2 text-xs text-amber-300',
    sectionTitle: 'text-lg font-bold text-amber-100',
  },
  material: {
    label: 'text-sm font-medium text-gray-700 mb-2',
    requiredMark: 'text-red-600',
    input: 'w-full px-4 py-3 rounded-md border-b-2 border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all',
    error: 'mt-1.5 text-xs text-red-600',
    helper: 'mt-1.5 text-xs text-gray-600',
    sectionTitle: 'text-base font-semibold text-gray-900 pb-2 border-b-2 border-blue-600',
  },
  monochrome: {
    label: 'text-sm font-medium text-black mb-2',
    requiredMark: 'text-gray-600',
    input: 'w-full px-4 py-3 rounded-md border border-gray-400 bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all',
    error: 'mt-2 text-xs text-gray-800',
    helper: 'mt-2 text-xs text-gray-600',
    sectionTitle: 'text-base font-bold text-black border-b border-gray-400 pb-2',
  },
  nature: {
    label: 'text-sm font-medium text-green-900 mb-2',
    requiredMark: 'text-orange-600',
    input: 'w-full px-4 py-3 rounded-lg border-2 border-green-300 bg-green-50 text-green-900 placeholder:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all',
    error: 'mt-2 text-xs text-red-700',
    helper: 'mt-2 text-xs text-green-700',
    sectionTitle: 'text-lg font-semibold text-green-900',
  },
  neon: {
    label: 'text-sm font-bold text-cyan-400 mb-2 uppercase',
    requiredMark: 'text-pink-500',
    input: 'w-full px-4 py-3 bg-black border-2 border-cyan-500 text-cyan-400 placeholder:text-cyan-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all',
    error: 'mt-2 text-xs font-bold text-pink-500',
    helper: 'mt-2 text-xs text-cyan-600',
    sectionTitle: 'text-lg font-black text-cyan-400 uppercase',
  },
  sketch: {
    label: 'text-sm font-medium text-gray-800 mb-2',
    requiredMark: 'text-red-600',
    input: 'w-full px-4 py-3 rounded-md border-2 border-gray-800 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all',
    error: 'mt-2 text-xs font-bold text-red-700',
    helper: 'mt-2 text-xs text-gray-700',
    sectionTitle: 'text-lg font-bold text-gray-900',
  },
};

export function getFormThemeStyles(theme: ThemeName): FormThemeStyles {
  const styles = formThemeStyles[theme];
  if (!styles) {
    throw new Error(`Form styles for theme "${theme}" not found`);
  }
  return styles;
}
