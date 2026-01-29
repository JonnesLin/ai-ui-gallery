import { cn } from '../_shared/utils';
import type { FileUploadItemProps } from './FileUpload.types';

const itemStyles: Record<string, { base: string; icon: string; remove: string; progress: string; success: string }> = {
  minimalist: {
    base: 'bg-white border border-gray-200 hover:border-gray-300',
    icon: 'bg-gray-900 text-white',
    remove: 'hover:bg-gray-100 text-gray-600 hover:text-red-600',
    progress: 'bg-gray-200',
    success: 'bg-green-500',
  },
  material: {
    base: 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]',
    icon: 'bg-[#1976d2] text-white shadow-[0_2px_6px_rgba(25,118,210,0.3)]',
    remove: 'hover:bg-[#f5f5f5] text-[#757575] hover:text-[#f44336]',
    progress: 'bg-[#e0e0e0]',
    success: 'bg-[#4caf50] shadow-[0_2px_6px_rgba(76,175,80,0.3)]',
  },
  dark: {
    base: 'bg-gray-800 border border-gray-700 hover:border-gray-600',
    icon: 'bg-blue-500 text-white',
    remove: 'hover:bg-gray-700 text-gray-400 hover:text-red-400',
    progress: 'bg-gray-700',
    success: 'bg-green-500',
  },
  glassmorphism: {
    base: 'backdrop-blur-xl bg-white/20 border border-white/30 shadow-lg',
    icon: 'bg-white/20 backdrop-blur-sm text-white',
    remove: 'text-white/70 hover:text-white',
    progress: 'bg-white/20',
    success: 'bg-green-300',
  },
  neumorphism: {
    base: 'bg-[#e0e0e0] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]',
    icon: 'bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white',
    remove: 'hover:bg-[#d1d1d1] text-gray-600 hover:text-red-600',
    progress: 'bg-[#d1d1d1]',
    success: 'bg-green-500',
  },
  flat: {
    base: 'bg-white',
    icon: 'bg-[#2196f3] text-white',
    remove: 'bg-[#ffebee] hover:bg-[#ffcdd2] text-[#f44336]',
    progress: 'bg-[#e0e0e0]',
    success: 'bg-[#4caf50]',
  },
  gradient: {
    base: 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 hover:from-purple-100 hover:to-pink-100',
    icon: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_4px_12px_rgba(168,85,247,0.4)]',
    remove: 'hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 text-purple-600 hover:text-red-600',
    progress: 'bg-gradient-to-r from-purple-200 to-pink-200',
    success: 'bg-gradient-to-r from-green-400 to-emerald-500 shadow-[0_4px_12px_rgba(34,197,94,0.4)]',
  },
  luxury: {
    base: 'bg-amber-50 border border-amber-200 hover:border-amber-300',
    icon: 'bg-gradient-to-br from-amber-500 to-yellow-600 text-white shadow-[0_4px_12px_rgba(245,158,11,0.4)]',
    remove: 'hover:bg-amber-100 text-amber-700 hover:text-red-600',
    progress: 'bg-amber-200',
    success: 'bg-green-500 shadow-[0_2px_6px_rgba(34,197,94,0.3)]',
  },
  corporate: {
    base: 'bg-blue-50 border border-blue-200 hover:border-blue-300',
    icon: 'bg-blue-600 text-white shadow-[0_2px_6px_rgba(37,99,235,0.3)]',
    remove: 'hover:bg-blue-100 text-blue-700 hover:text-red-600',
    progress: 'bg-blue-200',
    success: 'bg-green-600',
  },
  cyberpunk: {
    base: 'bg-gray-900 border border-cyan-500/50 hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]',
    icon: 'bg-cyan-500 text-gray-900 shadow-[0_0_20px_rgba(6,182,212,0.6)]',
    remove: 'hover:bg-gray-800 text-cyan-400 hover:text-red-400 hover:shadow-[0_0_10px_rgba(239,68,68,0.4)]',
    progress: 'bg-gray-800',
    success: 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]',
  },
  pastel: {
    base: 'bg-pink-50 border border-pink-200 hover:border-pink-300',
    icon: 'bg-pink-400 text-white shadow-[0_2px_6px_rgba(244,114,182,0.3)]',
    remove: 'hover:bg-pink-100 text-pink-600 hover:text-red-500',
    progress: 'bg-pink-200',
    success: 'bg-green-400',
  },
  futuristic: {
    base: 'bg-violet-950 border border-violet-500/50 hover:border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.2)]',
    icon: 'bg-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.6)]',
    remove: 'hover:bg-violet-900 text-violet-300 hover:text-red-400',
    progress: 'bg-violet-900',
    success: 'bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.6)]',
  },
  monochrome: {
    base: 'bg-gray-50 border border-gray-300 hover:border-gray-400',
    icon: 'bg-gray-700 text-white',
    remove: 'hover:bg-gray-200 text-gray-600 hover:text-gray-900',
    progress: 'bg-gray-300',
    success: 'bg-gray-900',
  },
  brutalist: {
    base: 'bg-white border-4 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-[-4px_-4px_0_0_rgba(0,0,0,1)]',
    icon: 'bg-black text-white',
    remove: 'hover:bg-black hover:text-white text-black border-2 border-black',
    progress: 'bg-gray-300',
    success: 'bg-black',
  },
  retro: {
    base: 'bg-amber-50 border-2 border-amber-700 shadow-[4px_4px_0_0_rgba(146,64,14,1)]',
    icon: 'bg-amber-600 text-amber-50 border-2 border-amber-800',
    remove: 'hover:bg-amber-200 text-amber-800 hover:text-red-700',
    progress: 'bg-amber-300',
    success: 'bg-amber-700',
  },
  playful: {
    base: 'bg-purple-50 border-2 border-purple-300 hover:border-purple-400 hover:rotate-1 transition-transform',
    icon: 'bg-purple-500 text-white shadow-[0_4px_12px_rgba(168,85,247,0.4)]',
    remove: 'hover:bg-purple-100 text-purple-600 hover:text-red-500',
    progress: 'bg-purple-200',
    success: 'bg-purple-500',
  },
  nature: {
    base: 'bg-green-50 border border-green-200 hover:border-green-300',
    icon: 'bg-green-600 text-white shadow-[0_2px_6px_rgba(22,163,74,0.3)]',
    remove: 'hover:bg-green-100 text-green-700 hover:text-red-600',
    progress: 'bg-green-200',
    success: 'bg-green-500',
  },
  sketch: {
    base: 'bg-stone-50 border-2 border-dashed border-stone-400 hover:border-stone-500',
    icon: 'bg-stone-600 text-stone-50 border border-stone-700',
    remove: 'hover:bg-stone-200 text-stone-700 hover:text-red-600',
    progress: 'bg-stone-300',
    success: 'bg-stone-700',
  },
  neon: {
    base: 'bg-gray-900 border border-pink-500/50 hover:border-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.3)]',
    icon: 'bg-pink-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.7)]',
    remove: 'hover:bg-gray-800 text-pink-400 hover:text-red-400 hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]',
    progress: 'bg-gray-800',
    success: 'bg-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.7)]',
  },
  '3d': {
    base: 'bg-indigo-50 border border-indigo-200 shadow-[0_8px_16px_rgba(99,102,241,0.2)] hover:shadow-[0_12px_24px_rgba(99,102,241,0.3)]',
    icon: 'bg-indigo-500 text-white shadow-[0_4px_12px_rgba(99,102,241,0.4)]',
    remove: 'hover:bg-indigo-100 text-indigo-600 hover:text-red-600',
    progress: 'bg-indigo-200',
    success: 'bg-indigo-500 shadow-[0_4px_12px_rgba(99,102,241,0.5)]',
  },
};

function getItemStyle(theme: string) {
  const style = itemStyles[theme];
  if (!style) {
    throw new Error(`FileUploadItem: theme "${theme}" not supported`);
  }
  return style;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

export function FileUploadItem({ theme, file, onRemove, className }: FileUploadItemProps) {
  const styles = getItemStyle(theme);
  const isUploading = file.status === 'uploading' || file.status === 'pending';
  const isCompleted = file.status === 'completed';
  const isError = file.status === 'error';

  return (
    <div className={cn('rounded-lg p-4 transition-all', styles.base, className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1 min-w-0">
          <div
            className={cn(
              'w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0',
              styles.icon
            )}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div className="ml-4 flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{file.name}</p>
            <p className="text-xs opacity-70">
              {formatFileSize(file.size)}
              {isError && file.error && <span className="text-red-500 ml-2">{file.error}</span>}
            </p>
          </div>
        </div>
        <div className="flex items-center ml-4">
          {isUploading && (
            <div className={cn('w-24 h-2 rounded-full overflow-hidden mr-3', styles.progress)}>
              <div
                className={cn('h-full transition-all duration-300', styles.icon)}
                style={{ width: `${file.progress}%` }}
              />
            </div>
          )}
          {isCompleted && (
            <div
              className={cn(
                'w-6 h-6 rounded-full flex items-center justify-center mr-3',
                styles.success
              )}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
          <button
            onClick={() => onRemove(file)}
            className={cn(
              'w-8 h-8 rounded flex items-center justify-center transition-colors',
              styles.remove
            )}
            aria-label="Remove file"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
