import type { AlertProps, AlertStyleConfig, AlertType } from './Alert.types';
import { cn } from '../_shared/utils';

const defaultIcons = {
  success: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  info: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  warning: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  error: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const closeIcon = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function getMinimalistStyles(type: AlertType): AlertStyleConfig {
  const borderColors = {
    success: 'border-neutral-900',
    info: 'border-neutral-400',
    warning: 'border-neutral-500',
    error: 'border-neutral-800',
  };

  const iconColors = {
    success: 'text-neutral-900',
    info: 'text-neutral-600',
    warning: 'text-neutral-700',
    error: 'text-neutral-900',
  };

  return {
    container: cn('flex items-start gap-4 p-5 border-l-2 bg-neutral-50', borderColors[type]),
    iconWrapper: '',
    icon: cn('mt-0.5 flex-shrink-0', iconColors[type]),
    title: 'text-sm font-medium text-neutral-900',
    description: 'text-sm text-neutral-600 mt-1',
    closeButton: 'text-neutral-400 hover:text-neutral-600 transition-colors p-1',
  };
}

function getDarkStyles(type: AlertType): AlertStyleConfig {
  const borderColors = {
    success: 'border-emerald-500/20',
    info: 'border-blue-500/20',
    warning: 'border-amber-500/20',
    error: 'border-rose-500/20',
  };

  const iconWrapperBg = {
    success: 'bg-emerald-500/10',
    info: 'bg-blue-500/10',
    warning: 'bg-amber-500/10',
    error: 'bg-rose-500/10',
  };

  const iconColors = {
    success: 'text-emerald-400',
    info: 'text-blue-400',
    warning: 'text-amber-400',
    error: 'text-rose-400',
  };

  const titleColors = {
    success: 'text-emerald-400',
    info: 'text-blue-400',
    warning: 'text-amber-400',
    error: 'text-rose-400',
  };

  return {
    container: cn('flex items-start gap-4 p-5 bg-zinc-900 border rounded-xl', borderColors[type]),
    iconWrapper: cn('w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0', iconWrapperBg[type]),
    icon: iconColors[type],
    title: cn('text-sm font-semibold', titleColors[type]),
    description: 'text-sm text-zinc-400 mt-1',
    closeButton: 'text-zinc-600 hover:text-zinc-400 transition-colors p-1',
  };
}

function getGlassmorphismStyles(type: AlertType): AlertStyleConfig {
  const backgrounds = {
    success: 'bg-emerald-500/20 border-emerald-300/30',
    info: 'bg-blue-500/20 border-blue-300/30',
    warning: 'bg-amber-500/20 border-amber-300/30',
    error: 'bg-rose-500/20 border-rose-300/30',
  };

  const iconWrapperBg = {
    success: 'bg-emerald-400/30',
    info: 'bg-blue-400/30',
    warning: 'bg-amber-400/30',
    error: 'bg-rose-400/30',
  };

  const iconColors = {
    success: 'text-emerald-200',
    info: 'text-blue-200',
    warning: 'text-amber-200',
    error: 'text-rose-200',
  };

  return {
    container: cn('flex items-start gap-4 p-5 backdrop-blur-xl border rounded-2xl shadow-lg', backgrounds[type]),
    iconWrapper: cn('w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center flex-shrink-0', iconWrapperBg[type]),
    icon: iconColors[type],
    title: 'text-sm font-semibold text-white',
    description: 'text-sm text-white/70 mt-1',
    closeButton: 'text-white/50 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg',
  };
}

function getNeumorphismStyles(type: AlertType): AlertStyleConfig {
  const iconColors = {
    success: 'text-emerald-500',
    info: 'text-blue-500',
    warning: 'text-amber-500',
    error: 'text-rose-500',
  };

  return {
    container: 'flex items-start gap-4 p-6 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff]',
    iconWrapper: 'w-12 h-12 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center flex-shrink-0',
    icon: cn('w-6 h-6', iconColors[type]),
    title: 'text-base font-semibold text-gray-700',
    description: 'text-sm text-gray-500 mt-1',
    closeButton: 'w-8 h-8 rounded-lg bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] transition-all duration-200 flex items-center justify-center text-gray-500',
  };
}

function getGradientStyles(type: AlertType): AlertStyleConfig {
  const backgrounds = {
    success: 'bg-gradient-to-r from-emerald-500/90 to-teal-500/90',
    info: 'bg-gradient-to-r from-blue-500/90 to-cyan-500/90',
    warning: 'bg-gradient-to-r from-amber-500/90 to-orange-500/90',
    error: 'bg-gradient-to-r from-rose-500/90 to-pink-500/90',
  };

  return {
    container: cn('flex items-start gap-4 p-5 rounded-2xl text-white shadow-lg', backgrounds[type]),
    iconWrapper: 'w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0',
    icon: 'text-white',
    title: 'text-sm font-semibold text-white',
    description: 'text-sm text-white/90 mt-1',
    closeButton: 'text-white/70 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg',
  };
}

function getFlatStyles(type: AlertType): AlertStyleConfig {
  const colors = {
    success: 'bg-emerald-50 border-emerald-300 text-emerald-900',
    info: 'bg-blue-50 border-blue-300 text-blue-900',
    warning: 'bg-amber-50 border-amber-300 text-amber-900',
    error: 'bg-rose-50 border-rose-300 text-rose-900',
  };

  const iconColors = {
    success: 'text-emerald-600',
    info: 'text-blue-600',
    warning: 'text-amber-600',
    error: 'text-rose-600',
  };

  return {
    container: cn('flex items-start gap-4 p-5 border-l-4 rounded-lg', colors[type]),
    iconWrapper: '',
    icon: cn('mt-0.5 flex-shrink-0', iconColors[type]),
    title: 'text-sm font-semibold',
    description: 'text-sm opacity-80 mt-1',
    closeButton: 'opacity-60 hover:opacity-100 transition-opacity p-1',
  };
}

function getMaterialStyles(type: AlertType): AlertStyleConfig {
  const colors = {
    success: 'bg-emerald-50 border-emerald-400',
    info: 'bg-blue-50 border-blue-400',
    warning: 'bg-amber-50 border-amber-400',
    error: 'bg-rose-50 border-rose-400',
  };

  const iconWrapperBg = {
    success: 'bg-emerald-500',
    info: 'bg-blue-500',
    warning: 'bg-amber-500',
    error: 'bg-rose-500',
  };

  const titleColors = {
    success: 'text-emerald-900',
    info: 'text-blue-900',
    warning: 'text-amber-900',
    error: 'text-rose-900',
  };

  return {
    container: cn('flex items-start gap-4 p-5 border-l-4 rounded-lg shadow-md hover:shadow-lg transition-shadow', colors[type]),
    iconWrapper: cn('w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0', iconWrapperBg[type]),
    icon: 'text-white',
    title: cn('text-sm font-semibold', titleColors[type]),
    description: 'text-sm text-gray-700 mt-1',
    closeButton: 'text-gray-500 hover:text-gray-700 transition-colors p-1 hover:bg-gray-200 rounded-full',
  };
}

function getLuxuryStyles(type: AlertType): AlertStyleConfig {
  const borderColors = {
    success: 'border-amber-400/50',
    info: 'border-amber-300/50',
    warning: 'border-amber-500/50',
    error: 'border-amber-400/50',
  };

  const iconColors = {
    success: 'text-amber-400',
    info: 'text-amber-300',
    warning: 'text-amber-500',
    error: 'text-amber-400',
  };

  return {
    container: cn('flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900 to-black border rounded-xl', borderColors[type]),
    iconWrapper: 'w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center flex-shrink-0',
    icon: iconColors[type],
    title: 'text-sm font-serif font-semibold text-amber-100',
    description: 'text-sm text-gray-300 mt-1',
    closeButton: 'text-amber-400/60 hover:text-amber-400 transition-colors p-1',
  };
}

function getCorporateStyles(type: AlertType): AlertStyleConfig {
  const colors = {
    success: 'bg-slate-50 border-slate-300',
    info: 'bg-blue-50 border-blue-400',
    warning: 'bg-amber-50 border-amber-400',
    error: 'bg-slate-50 border-slate-400',
  };

  const iconWrapperBg = {
    success: 'bg-slate-600',
    info: 'bg-blue-600',
    warning: 'bg-amber-600',
    error: 'bg-slate-700',
  };

  const titleColors = {
    success: 'text-slate-900',
    info: 'text-blue-900',
    warning: 'text-amber-900',
    error: 'text-slate-900',
  };

  return {
    container: cn('flex items-start gap-4 p-5 border-l-3 rounded-lg', colors[type]),
    iconWrapper: cn('w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0', iconWrapperBg[type]),
    icon: 'text-white',
    title: cn('text-sm font-semibold', titleColors[type]),
    description: 'text-sm text-gray-600 mt-1',
    closeButton: 'text-gray-400 hover:text-gray-600 transition-colors p-1',
  };
}

function getCyberpunkStyles(type: AlertType): AlertStyleConfig {
  const borderColors = {
    success: 'border-cyan-500',
    info: 'border-blue-500',
    warning: 'border-yellow-500',
    error: 'border-pink-500',
  };

  const glowColors = {
    success: 'shadow-[0_0_20px_rgba(6,182,212,0.5)]',
    info: 'shadow-[0_0_20px_rgba(59,130,246,0.5)]',
    warning: 'shadow-[0_0_20px_rgba(234,179,8,0.5)]',
    error: 'shadow-[0_0_20px_rgba(236,72,153,0.5)]',
  };

  const iconColors = {
    success: 'text-cyan-400',
    info: 'text-blue-400',
    warning: 'text-yellow-400',
    error: 'text-pink-400',
  };

  return {
    container: cn('flex items-start gap-4 p-5 bg-black border-2', borderColors[type], glowColors[type]),
    iconWrapper: cn('w-10 h-10 border-2 flex items-center justify-center flex-shrink-0', borderColors[type]),
    icon: iconColors[type],
    title: 'text-sm font-bold text-white uppercase tracking-wide',
    description: 'text-sm text-gray-300 mt-1 font-mono',
    closeButton: 'text-gray-500 hover:text-white transition-colors p-1 border border-gray-700 hover:border-white',
  };
}

function getPastelStyles(type: AlertType): AlertStyleConfig {
  const backgrounds = {
    success: 'bg-emerald-100/50 border-emerald-200',
    info: 'bg-blue-100/50 border-blue-200',
    warning: 'bg-amber-100/50 border-amber-200',
    error: 'bg-rose-100/50 border-rose-200',
  };

  const iconWrapperBg = {
    success: 'bg-emerald-200/50',
    info: 'bg-blue-200/50',
    warning: 'bg-amber-200/50',
    error: 'bg-rose-200/50',
  };

  const iconColors = {
    success: 'text-emerald-600',
    info: 'text-blue-600',
    warning: 'text-amber-600',
    error: 'text-rose-600',
  };

  const titleColors = {
    success: 'text-emerald-800',
    info: 'text-blue-800',
    warning: 'text-amber-800',
    error: 'text-rose-800',
  };

  return {
    container: cn('flex items-start gap-4 p-5 border rounded-2xl', backgrounds[type]),
    iconWrapper: cn('w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0', iconWrapperBg[type]),
    icon: iconColors[type],
    title: cn('text-sm font-semibold', titleColors[type]),
    description: 'text-sm text-gray-600 mt-1',
    closeButton: 'text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-200/50 rounded-full',
  };
}

function getFuturisticStyles(type: AlertType): AlertStyleConfig {
  const borderColors = {
    success: 'border-emerald-500/50',
    info: 'border-blue-500/50',
    warning: 'border-amber-500/50',
    error: 'border-rose-500/50',
  };

  const iconColors = {
    success: 'text-emerald-400',
    info: 'text-blue-400',
    warning: 'text-amber-400',
    error: 'text-rose-400',
  };

  return {
    container: cn('flex items-start gap-4 p-5 bg-gradient-to-br from-violet-950 to-black border rounded-lg shadow-xl', borderColors[type]),
    iconWrapper: 'w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm',
    icon: iconColors[type],
    title: 'text-sm font-bold text-white tracking-wide',
    description: 'text-sm text-gray-300 mt-1',
    closeButton: 'text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg',
  };
}

function getMonochromeStyles(type: AlertType): AlertStyleConfig {
  const borderColors = {
    success: 'border-gray-400',
    info: 'border-gray-300',
    warning: 'border-gray-500',
    error: 'border-gray-700',
  };

  const iconColors = {
    success: 'text-gray-700',
    info: 'text-gray-500',
    warning: 'text-gray-600',
    error: 'text-gray-900',
  };

  return {
    container: cn('flex items-start gap-4 p-5 bg-gray-50 border rounded-lg', borderColors[type]),
    iconWrapper: 'w-10 h-10 rounded-lg bg-gray-200 border border-gray-300 flex items-center justify-center flex-shrink-0',
    icon: iconColors[type],
    title: 'text-sm font-semibold text-gray-900',
    description: 'text-sm text-gray-600 mt-1',
    closeButton: 'text-gray-400 hover:text-gray-700 transition-colors p-1',
  };
}

function getBrutalistStyles(type: AlertType): AlertStyleConfig {
  const borderColors = {
    success: 'border-black',
    info: 'border-black',
    warning: 'border-black',
    error: 'border-black',
  };

  const backgrounds = {
    success: 'bg-green-300',
    info: 'bg-blue-300',
    warning: 'bg-yellow-300',
    error: 'bg-red-300',
  };

  return {
    container: cn('flex items-start gap-4 p-5 border-4', borderColors[type], backgrounds[type]),
    iconWrapper: 'w-12 h-12 border-4 border-black bg-white flex items-center justify-center flex-shrink-0',
    icon: 'text-black font-bold',
    title: 'text-base font-black text-black uppercase',
    description: 'text-sm text-black mt-1 font-bold',
    closeButton: 'text-black hover:bg-black hover:text-white transition-colors p-1 border-2 border-black font-bold',
  };
}

function getRetroStyles(type: AlertType): AlertStyleConfig {
  const backgrounds = {
    success: 'bg-green-100 border-green-400',
    info: 'bg-blue-100 border-blue-400',
    warning: 'bg-amber-100 border-amber-500',
    error: 'bg-orange-100 border-orange-400',
  };

  const iconWrapperBg = {
    success: 'bg-green-400',
    info: 'bg-blue-400',
    warning: 'bg-amber-500',
    error: 'bg-orange-400',
  };

  const titleColors = {
    success: 'text-green-900',
    info: 'text-blue-900',
    warning: 'text-amber-900',
    error: 'text-orange-900',
  };

  return {
    container: cn('flex items-start gap-4 p-5 border-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]', backgrounds[type]),
    iconWrapper: cn('w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md', iconWrapperBg[type]),
    icon: 'text-white',
    title: cn('text-sm font-bold', titleColors[type]),
    description: 'text-sm text-gray-700 mt-1',
    closeButton: 'text-gray-600 hover:text-gray-900 transition-colors p-1',
  };
}

function getPlayfulStyles(type: AlertType): AlertStyleConfig {
  const backgrounds = {
    success: 'bg-emerald-100 border-emerald-400',
    info: 'bg-sky-100 border-sky-400',
    warning: 'bg-orange-100 border-orange-400',
    error: 'bg-pink-100 border-pink-400',
  };

  const iconWrapperBg = {
    success: 'bg-emerald-400',
    info: 'bg-sky-400',
    warning: 'bg-orange-400',
    error: 'bg-pink-400',
  };

  const titleColors = {
    success: 'text-emerald-900',
    info: 'text-sky-900',
    warning: 'text-orange-900',
    error: 'text-pink-900',
  };

  return {
    container: cn('flex items-start gap-4 p-5 border-3 rounded-2xl shadow-lg hover:shadow-xl transition-shadow', backgrounds[type]),
    iconWrapper: cn('w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md transform hover:scale-110 transition-transform', iconWrapperBg[type]),
    icon: 'text-white',
    title: cn('text-sm font-bold', titleColors[type]),
    description: 'text-sm text-gray-700 mt-1',
    closeButton: 'text-gray-500 hover:text-gray-800 transition-colors p-1 hover:bg-gray-200 rounded-full',
  };
}

function getNatureStyles(type: AlertType): AlertStyleConfig {
  const backgrounds = {
    success: 'bg-green-50 border-green-400',
    info: 'bg-teal-50 border-teal-400',
    warning: 'bg-amber-50 border-amber-500',
    error: 'bg-red-50 border-red-400',
  };

  const iconWrapperBg = {
    success: 'bg-green-600',
    info: 'bg-teal-600',
    warning: 'bg-amber-600',
    error: 'bg-red-600',
  };

  const titleColors = {
    success: 'text-green-900',
    info: 'text-teal-900',
    warning: 'text-amber-900',
    error: 'text-red-900',
  };

  return {
    container: cn('flex items-start gap-4 p-5 border-2 rounded-xl', backgrounds[type]),
    iconWrapper: cn('w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0', iconWrapperBg[type]),
    icon: 'text-white',
    title: cn('text-sm font-semibold', titleColors[type]),
    description: 'text-sm text-gray-700 mt-1',
    closeButton: 'text-gray-500 hover:text-gray-700 transition-colors p-1 hover:bg-gray-100 rounded-lg',
  };
}

function getSketchStyles(type: AlertType): AlertStyleConfig {
  const borderColors = {
    success: 'border-stone-600',
    info: 'border-stone-500',
    warning: 'border-stone-700',
    error: 'border-stone-800',
  };

  const iconColors = {
    success: 'text-stone-700',
    info: 'text-stone-600',
    warning: 'text-stone-800',
    error: 'text-stone-900',
  };

  return {
    container: cn('flex items-start gap-4 p-5 bg-stone-50 border-2 border-dashed rounded-lg', borderColors[type]),
    iconWrapper: 'w-10 h-10 border-2 border-dashed border-stone-400 rounded-lg flex items-center justify-center flex-shrink-0',
    icon: iconColors[type],
    title: 'text-sm font-semibold text-stone-900',
    description: 'text-sm text-stone-600 mt-1',
    closeButton: 'text-stone-400 hover:text-stone-700 transition-colors p-1 border border-dashed border-stone-300 rounded',
  };
}

function getNeonStyles(type: AlertType): AlertStyleConfig {
  const borderColors = {
    success: 'border-green-500',
    info: 'border-blue-500',
    warning: 'border-yellow-500',
    error: 'border-pink-500',
  };

  const glowColors = {
    success: 'shadow-[0_0_30px_rgba(34,197,94,0.6)]',
    info: 'shadow-[0_0_30px_rgba(59,130,246,0.6)]',
    warning: 'shadow-[0_0_30px_rgba(234,179,8,0.6)]',
    error: 'shadow-[0_0_30px_rgba(236,72,153,0.6)]',
  };

  const iconColors = {
    success: 'text-green-400',
    info: 'text-blue-400',
    warning: 'text-yellow-400',
    error: 'text-pink-400',
  };

  const textGlow = {
    success: 'text-shadow-[0_0_10px_rgba(34,197,94,0.8)]',
    info: 'text-shadow-[0_0_10px_rgba(59,130,246,0.8)]',
    warning: 'text-shadow-[0_0_10px_rgba(234,179,8,0.8)]',
    error: 'text-shadow-[0_0_10px_rgba(236,72,153,0.8)]',
  };

  return {
    container: cn('flex items-start gap-4 p-5 bg-black border-2 rounded-lg', borderColors[type], glowColors[type]),
    iconWrapper: cn('w-10 h-10 border-2 rounded-full flex items-center justify-center flex-shrink-0', borderColors[type]),
    icon: iconColors[type],
    title: cn('text-sm font-bold text-white', textGlow[type]),
    description: 'text-sm text-gray-300 mt-1',
    closeButton: 'text-gray-400 hover:text-white transition-colors p-1 hover:bg-pink-500/20 rounded-lg',
  };
}

function get3DStyles(type: AlertType): AlertStyleConfig {
  const backgrounds = {
    success: 'bg-emerald-100 border-emerald-400',
    info: 'bg-blue-100 border-blue-400',
    warning: 'bg-amber-100 border-amber-400',
    error: 'bg-rose-100 border-rose-400',
  };

  const iconWrapperBg = {
    success: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
    info: 'bg-gradient-to-br from-blue-400 to-blue-600',
    warning: 'bg-gradient-to-br from-amber-400 to-amber-600',
    error: 'bg-gradient-to-br from-rose-400 to-rose-600',
  };

  const titleColors = {
    success: 'text-emerald-900',
    info: 'text-blue-900',
    warning: 'text-amber-900',
    error: 'text-rose-900',
  };

  return {
    container: cn('flex items-start gap-4 p-5 border rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-shadow', backgrounds[type]),
    iconWrapper: cn('w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg', iconWrapperBg[type]),
    icon: 'text-white',
    title: cn('text-sm font-bold', titleColors[type]),
    description: 'text-sm text-gray-700 mt-1',
    closeButton: 'text-gray-500 hover:text-gray-800 transition-colors p-1 hover:bg-gray-200 rounded-lg shadow-md',
  };
}

function getAlertStyles(theme: string, type: AlertType): AlertStyleConfig {
  switch (theme) {
    case 'minimalist':
      return getMinimalistStyles(type);
    case 'dark':
      return getDarkStyles(type);
    case 'glassmorphism':
      return getGlassmorphismStyles(type);
    case 'neumorphism':
      return getNeumorphismStyles(type);
    case 'gradient':
      return getGradientStyles(type);
    case 'flat':
      return getFlatStyles(type);
    case 'material':
      return getMaterialStyles(type);
    case 'luxury':
      return getLuxuryStyles(type);
    case 'corporate':
      return getCorporateStyles(type);
    case 'cyberpunk':
      return getCyberpunkStyles(type);
    case 'pastel':
      return getPastelStyles(type);
    case 'futuristic':
      return getFuturisticStyles(type);
    case 'monochrome':
      return getMonochromeStyles(type);
    case 'brutalist':
      return getBrutalistStyles(type);
    case 'retro':
      return getRetroStyles(type);
    case 'playful':
      return getPlayfulStyles(type);
    case 'nature':
      return getNatureStyles(type);
    case 'sketch':
      return getSketchStyles(type);
    case 'neon':
      return getNeonStyles(type);
    case '3d':
      return get3DStyles(type);
    default:
      throw new Error(`Alert styles not implemented for theme: ${theme}`);
  }
}

export function Alert({ type, theme, title, children, onClose, className }: AlertProps) {
  const styles = getAlertStyles(theme, type);
  const icon = defaultIcons[type];

  return (
    <div
      className={cn(styles.container, className)}
      role="alert"
      aria-live="polite"
    >
      {styles.iconWrapper ? (
        <div className={styles.iconWrapper} aria-hidden="true">
          <div className={styles.icon}>{icon}</div>
        </div>
      ) : (
        <div className={styles.icon} aria-hidden="true">{icon}</div>
      )}

      <div className="flex-1 min-w-0">
        <p className={styles.title}>{title}</p>
        <div className={styles.description}>{children}</div>
      </div>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close alert"
        >
          {closeIcon}
        </button>
      )}
    </div>
  );
}
