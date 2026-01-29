import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import type { FileUploadDropzoneProps } from './FileUpload.types';

const dropzoneStyles: Record<string, { base: string; dragging: string; icon: string; info: string }> = {
  minimalist: {
    base: 'bg-white border-2 border-gray-200 hover:border-gray-300',
    dragging: 'border-gray-900 bg-gray-50',
    icon: 'bg-gray-900 text-white',
    info: 'bg-gray-100 text-gray-700',
  },
  material: {
    base: 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]',
    dragging: 'shadow-[0_8px_16px_rgba(0,0,0,0.15)] scale-[1.02] bg-white',
    icon: 'bg-[#1976d2] text-white shadow-[0_4px_12px_rgba(25,118,210,0.3)]',
    info: 'bg-[#e3f2fd] text-[#1976d2]',
  },
  dark: {
    base: 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600',
    dragging: 'border-blue-500 bg-gray-700',
    icon: 'bg-blue-500 text-white',
    info: 'bg-blue-900/30 text-blue-400',
  },
  glassmorphism: {
    base: 'backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl',
    dragging: 'scale-105 bg-white/30',
    icon: 'bg-white/20 backdrop-blur-sm text-white',
    info: 'bg-white/10 text-white/90',
  },
  neumorphism: {
    base: 'bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]',
    dragging: 'shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]',
    icon: 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white',
    info: 'bg-[#d1d1d1] text-gray-700',
  },
  flat: {
    base: 'bg-white hover:bg-[#e3f2fd]',
    dragging: 'bg-[#e3f2fd]',
    icon: 'bg-[#2196f3] text-white',
    info: 'bg-[#e3f2fd] text-[#1976d2]',
  },
  gradient: {
    base: 'bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 hover:from-purple-100 hover:to-pink-100',
    dragging: 'scale-105 from-purple-100 to-pink-100 border-purple-400',
    icon: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_4px_20px_rgba(168,85,247,0.5)]',
    info: 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700',
  },
  luxury: {
    base: 'bg-amber-50 border-2 border-amber-200 hover:border-amber-300',
    dragging: 'border-amber-400 bg-amber-100',
    icon: 'bg-gradient-to-br from-amber-500 to-yellow-600 text-white shadow-[0_4px_20px_rgba(245,158,11,0.5)]',
    info: 'bg-amber-100 text-amber-800',
  },
  corporate: {
    base: 'bg-blue-50 border-2 border-blue-200 hover:border-blue-300',
    dragging: 'border-blue-400 bg-blue-100',
    icon: 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.4)]',
    info: 'bg-blue-100 text-blue-800',
  },
  cyberpunk: {
    base: 'bg-gray-900 border-2 border-cyan-500/50 hover:border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.2)]',
    dragging: 'border-cyan-400 bg-gray-800 shadow-[0_0_40px_rgba(6,182,212,0.4)]',
    icon: 'bg-cyan-500 text-gray-900 shadow-[0_0_30px_rgba(6,182,212,0.7)]',
    info: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30',
  },
  pastel: {
    base: 'bg-pink-50 border-2 border-pink-200 hover:border-pink-300',
    dragging: 'border-pink-400 bg-pink-100',
    icon: 'bg-pink-400 text-white shadow-[0_4px_12px_rgba(244,114,182,0.4)]',
    info: 'bg-pink-100 text-pink-700',
  },
  futuristic: {
    base: 'bg-violet-950 border-2 border-violet-500/50 hover:border-violet-400 shadow-[0_0_30px_rgba(139,92,246,0.2)]',
    dragging: 'border-violet-400 bg-violet-900 shadow-[0_0_40px_rgba(139,92,246,0.4)]',
    icon: 'bg-violet-500 text-white shadow-[0_0_30px_rgba(139,92,246,0.7)]',
    info: 'bg-violet-500/20 text-violet-300 border border-violet-500/30',
  },
  monochrome: {
    base: 'bg-gray-50 border-2 border-gray-300 hover:border-gray-400',
    dragging: 'border-gray-600 bg-gray-100',
    icon: 'bg-gray-700 text-white',
    info: 'bg-gray-200 text-gray-800',
  },
  brutalist: {
    base: 'bg-white border-4 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-[-8px_-8px_0_0_rgba(0,0,0,1)]',
    dragging: 'translate-x-2 translate-y-2 shadow-[-8px_-8px_0_0_rgba(0,0,0,1)]',
    icon: 'bg-black text-white border-4 border-black',
    info: 'bg-black text-white border-4 border-black',
  },
  retro: {
    base: 'bg-amber-50 border-2 border-amber-700 shadow-[6px_6px_0_0_rgba(146,64,14,1)] hover:shadow-[8px_8px_0_0_rgba(146,64,14,1)]',
    dragging: 'shadow-[8px_8px_0_0_rgba(146,64,14,1)] bg-amber-100',
    icon: 'bg-amber-600 text-amber-50 border-2 border-amber-800',
    info: 'bg-amber-200 text-amber-900 border-2 border-amber-700',
  },
  playful: {
    base: 'bg-purple-50 border-2 border-purple-300 hover:border-purple-400 hover:rotate-1 transition-transform',
    dragging: 'rotate-2 border-purple-500 bg-purple-100',
    icon: 'bg-purple-500 text-white shadow-[0_4px_20px_rgba(168,85,247,0.5)]',
    info: 'bg-purple-100 text-purple-700',
  },
  nature: {
    base: 'bg-green-50 border-2 border-green-200 hover:border-green-300',
    dragging: 'border-green-400 bg-green-100',
    icon: 'bg-green-600 text-white shadow-[0_4px_12px_rgba(22,163,74,0.4)]',
    info: 'bg-green-100 text-green-800',
  },
  sketch: {
    base: 'bg-stone-50 border-2 border-dashed border-stone-400 hover:border-stone-500',
    dragging: 'border-stone-600 bg-stone-100',
    icon: 'bg-stone-600 text-stone-50 border border-stone-700',
    info: 'bg-stone-100 text-stone-700 border border-dashed border-stone-500',
  },
  neon: {
    base: 'bg-gray-900 border-2 border-pink-500/50 hover:border-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.3)]',
    dragging: 'border-pink-400 bg-gray-800 shadow-[0_0_40px_rgba(236,72,153,0.5)]',
    icon: 'bg-pink-500 text-white shadow-[0_0_30px_rgba(236,72,153,0.8)]',
    info: 'bg-pink-500/20 text-pink-300 border border-pink-500/30',
  },
  '3d': {
    base: 'bg-indigo-50 border-2 border-indigo-200 shadow-[0_12px_24px_rgba(99,102,241,0.2)] hover:shadow-[0_16px_32px_rgba(99,102,241,0.3)]',
    dragging: 'scale-105 border-indigo-400 bg-indigo-100 shadow-[0_20px_40px_rgba(99,102,241,0.4)]',
    icon: 'bg-indigo-500 text-white shadow-[0_8px_20px_rgba(99,102,241,0.5)]',
    info: 'bg-indigo-100 text-indigo-800 shadow-[0_2px_6px_rgba(99,102,241,0.2)]',
  },
};

function getDropzoneStyle(theme: string) {
  const style = dropzoneStyles[theme];
  if (!style) {
    throw new Error(`FileUploadDropzone: theme "${theme}" not supported`);
  }
  return style;
}

export function FileUploadDropzone({
  theme,
  isDragging,
  disabled,
  accept,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileSelect,
  className,
}: FileUploadDropzoneProps) {
  const styles = getDropzoneStyle(theme);

  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={cn(
        'rounded-lg transition-all',
        styles.base,
        isDragging && styles.dragging,
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      <div className="p-12 text-center">
        <div
          className={cn(
            'inline-flex items-center justify-center w-20 h-20 rounded-full mb-6',
            styles.icon
          )}
        >
          <svg
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>
        <div className="mt-4">
          <label className={cn('cursor-pointer', disabled && 'cursor-not-allowed')}>
            <h3 className="text-xl font-semibold">Upload Files</h3>
            <p className="mt-2 text-sm opacity-70">
              Drag and drop files or{' '}
              <span className="font-medium underline">browse</span>
            </p>
            <input
              type="file"
              className="hidden"
              multiple
              accept={accept}
              disabled={disabled}
              onChange={onFileSelect}
            />
          </label>
        </div>
        <div
          className={cn(
            'mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded',
            styles.info
          )}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xs font-medium">
            {accept ? accept.replace(/\./g, '').toUpperCase() : 'All files'} • Maximum 10MB
          </span>
        </div>
      </div>
    </div>
  );
}
