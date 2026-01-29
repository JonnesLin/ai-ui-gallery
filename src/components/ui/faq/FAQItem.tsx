import type { FAQItemProps } from './types';
import { cn } from '../_shared/utils';

export function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  theme,
  variant,
  className,
}: FAQItemProps) {
  const getThemeStyles = () => {
    switch (theme) {
      case 'minimalist':
        return {
          container: cn(
            'py-6',
            variant === 'accordion' && 'border-t border-gray-200 first:border-t-0'
          ),
          button: 'w-full flex justify-between items-center text-left group',
          question: 'text-gray-900 font-medium pr-8',
          icon: 'flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-400 group-hover:text-gray-600 transition-colors',
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          ),
          answer: 'text-gray-500 text-sm leading-relaxed',
        };

      case 'glassmorphism':
        return {
          container: cn(
            'rounded-2xl backdrop-blur-xl border transition-all duration-300',
            isOpen
              ? 'bg-white/20 border-white/40 shadow-xl'
              : 'bg-white/10 border-white/20 hover:bg-white/15'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-white font-medium pr-4',
          icon: cn(
            'flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300',
            isOpen && 'rotate-180'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-white/80 leading-relaxed',
        };

      case 'dark':
        return {
          container: cn(
            'rounded-xl border transition-all duration-300',
            isOpen
              ? 'bg-gray-900 border-gray-700'
              : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-white font-medium pr-4',
          icon: cn(
            'flex-shrink-0 w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-300',
            isOpen && 'bg-white border-white'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-gray-400 leading-relaxed',
        };

      case 'neumorphism':
        return {
          container: cn(
            'rounded-2xl transition-all duration-300 bg-gray-200',
            isOpen
              ? 'shadow-[inset_4px_4px_10px_#b8b8b8,inset_-4px_-4px_10px_#ffffff]'
              : 'shadow-[6px_6px_12px_#b8b8b8,-6px_-6px_12px_#ffffff]'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-gray-700 font-semibold pr-4',
          icon: cn(
            'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
            isOpen
              ? 'shadow-[inset_2px_2px_5px_#b8b8b8,inset_-2px_-2px_5px_#ffffff]'
              : 'shadow-[3px_3px_6px_#b8b8b8,-3px_-3px_6px_#ffffff]'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-gray-600 leading-relaxed',
        };

      case 'gradient':
        return {
          container: cn(
            'rounded-2xl transition-all duration-300',
            isOpen
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-xl'
              : 'bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-white font-semibold pr-4',
          icon: cn(
            'flex-shrink-0 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300',
            isOpen && 'rotate-180'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-white/90 leading-relaxed',
        };

      case 'flat':
        return {
          container: cn(
            'rounded-lg transition-all duration-300',
            variant === 'accordion' && 'border-b border-gray-200',
            isOpen ? 'bg-blue-50' : 'hover:bg-gray-50'
          ),
          button: 'w-full px-5 py-4 flex justify-between items-center text-left',
          question: 'text-gray-900 font-semibold pr-4',
          icon: cn(
            'flex-shrink-0 w-6 h-6 rounded flex items-center justify-center transition-transform duration-300',
            isOpen ? 'bg-blue-500 text-white rotate-180' : 'bg-gray-200 text-gray-600'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-5 pb-4 text-gray-600 leading-relaxed',
        };

      case 'material':
        return {
          container: cn(
            'rounded-lg transition-all duration-300',
            isOpen
              ? 'bg-white shadow-lg'
              : 'bg-white shadow hover:shadow-md'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-gray-900 font-semibold pr-4',
          icon: cn(
            'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
            isOpen ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-gray-600 leading-relaxed',
        };

      case 'luxury':
        return {
          container: cn(
            'rounded-xl border transition-all duration-300 bg-gradient-to-br from-gray-900 to-black',
            isOpen ? 'border-amber-400/50' : 'border-amber-400/30 hover:border-amber-400/40'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-amber-100 font-serif font-semibold pr-4',
          icon: cn(
            'flex-shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300',
            isOpen ? 'bg-amber-400/20 border-amber-400/50 text-amber-400' : 'border-amber-400/30 text-amber-400/70'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-gray-300 leading-relaxed',
        };

      case 'corporate':
        return {
          container: cn(
            'rounded-lg border transition-all duration-300',
            isOpen ? 'bg-slate-50 border-slate-300' : 'bg-white border-slate-200 hover:border-slate-300'
          ),
          button: 'w-full px-6 py-4 flex justify-between items-center text-left',
          question: 'text-slate-900 font-semibold pr-4',
          icon: cn(
            'flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-all duration-300',
            isOpen ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-4 text-gray-600 leading-relaxed',
        };

      case 'cyberpunk':
        return {
          container: cn(
            'border-2 transition-all duration-300 bg-black',
            isOpen
              ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]'
              : 'border-cyan-700 hover:border-cyan-600'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-white font-bold uppercase tracking-wide pr-4',
          icon: cn(
            'flex-shrink-0 w-9 h-9 border-2 flex items-center justify-center transition-all duration-300',
            isOpen ? 'border-cyan-400 text-cyan-400' : 'border-cyan-700 text-cyan-700'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-gray-300 leading-relaxed font-mono',
        };

      case 'pastel':
        return {
          container: cn(
            'rounded-2xl border transition-all duration-300',
            isOpen
              ? 'bg-purple-100/50 border-purple-200'
              : 'bg-blue-50/50 border-blue-100 hover:bg-blue-100/50'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-gray-800 font-semibold pr-4',
          icon: cn(
            'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
            isOpen ? 'bg-purple-200/50 text-purple-600' : 'bg-blue-200/50 text-blue-600'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-gray-600 leading-relaxed',
        };

      case 'futuristic':
        return {
          container: cn(
            'rounded-lg border transition-all duration-300 bg-gradient-to-br from-violet-950 to-black',
            isOpen ? 'border-blue-500/50 shadow-xl' : 'border-white/10 hover:border-blue-500/30'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-white font-bold tracking-wide pr-4',
          icon: cn(
            'flex-shrink-0 w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-300 backdrop-blur-sm',
            isOpen ? 'bg-white/10 border-white/20 text-blue-400' : 'bg-white/5 border-white/10 text-gray-400'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-gray-300 leading-relaxed',
        };

      case 'monochrome':
        return {
          container: cn(
            'rounded-lg border transition-all duration-300',
            isOpen ? 'bg-gray-100 border-gray-400' : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
          ),
          button: 'w-full px-6 py-4 flex justify-between items-center text-left',
          question: 'text-gray-900 font-semibold pr-4',
          icon: cn(
            'flex-shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-300',
            isOpen ? 'bg-gray-700 border-gray-700 text-white' : 'bg-gray-200 border-gray-300 text-gray-600'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-4 text-gray-600 leading-relaxed',
        };

      case 'brutalist':
        return {
          container: cn(
            'border-4 border-black transition-all duration-300',
            isOpen ? 'bg-yellow-300' : 'bg-white hover:bg-gray-100'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-black font-black uppercase pr-4',
          icon: cn(
            'flex-shrink-0 w-10 h-10 border-4 border-black flex items-center justify-center transition-all duration-300',
            isOpen ? 'bg-black text-white' : 'bg-white text-black'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-black font-bold leading-relaxed',
        };

      case 'retro':
        return {
          container: cn(
            'rounded-lg border-2 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]',
            isOpen ? 'bg-amber-100 border-amber-400' : 'bg-orange-50 border-orange-300 hover:bg-orange-100'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-orange-900 font-bold pr-4',
          icon: cn(
            'flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-md',
            isOpen ? 'bg-amber-500 text-white' : 'bg-orange-400 text-white'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-gray-700 leading-relaxed',
        };

      case 'playful':
        return {
          container: cn(
            'rounded-2xl border-3 transition-all duration-300',
            isOpen
              ? 'bg-pink-100 border-pink-400 shadow-lg'
              : 'bg-sky-100 border-sky-400 hover:bg-sky-200 shadow-md'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-gray-900 font-bold pr-4',
          icon: cn(
            'flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md transform hover:scale-110',
            isOpen ? 'bg-pink-400 text-white rotate-180' : 'bg-sky-400 text-white'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-gray-700 leading-relaxed',
        };

      case 'nature':
        return {
          container: cn(
            'rounded-xl border-2 transition-all duration-300',
            isOpen ? 'bg-green-50 border-green-400' : 'bg-teal-50 border-teal-300 hover:bg-teal-100'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-green-900 font-semibold pr-4',
          icon: cn(
            'flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300',
            isOpen ? 'bg-green-600 text-white' : 'bg-teal-600 text-white'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-gray-700 leading-relaxed',
        };

      case 'sketch':
        return {
          container: cn(
            'rounded-lg border-2 border-dashed transition-all duration-300 bg-stone-50',
            isOpen ? 'border-stone-700' : 'border-stone-500 hover:border-stone-600'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-stone-900 font-semibold pr-4',
          icon: cn(
            'flex-shrink-0 w-9 h-9 rounded-lg border-2 border-dashed flex items-center justify-center transition-all duration-300',
            isOpen ? 'border-stone-700 text-stone-700' : 'border-stone-500 text-stone-600'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-stone-600 leading-relaxed',
        };

      case 'neon':
        return {
          container: cn(
            'rounded-lg border-2 transition-all duration-300 bg-black',
            isOpen
              ? 'border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.6)]'
              : 'border-pink-700 hover:border-pink-600'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-white font-bold pr-4',
          icon: cn(
            'flex-shrink-0 w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-300',
            isOpen ? 'border-pink-400 text-pink-400' : 'border-pink-700 text-pink-600'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-gray-300 leading-relaxed',
        };

      case '3d':
        return {
          container: cn(
            'rounded-xl border transition-all duration-300',
            isOpen
              ? 'bg-blue-100 border-blue-400 shadow-[0_15px_40px_rgba(0,0,0,0.3)]'
              : 'bg-indigo-100 border-indigo-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]'
          ),
          button: 'w-full px-6 py-5 flex justify-between items-center text-left',
          question: 'text-indigo-900 font-bold pr-4',
          icon: cn(
            'flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg',
            isOpen
              ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white'
              : 'bg-gradient-to-br from-indigo-400 to-indigo-600 text-white'
          ),
          content: cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ),
          answer: 'px-6 pb-5 text-gray-700 leading-relaxed',
        };

      default:
        throw new Error(
          `Theme "${theme}" is not supported by the FAQ component. ` +
          `Supported themes: minimalist, dark, glassmorphism, neumorphism, gradient, flat, material, luxury, corporate, cyberpunk, pastel, futuristic, monochrome, brutalist, retro, playful, nature, sketch, neon, 3d. ` +
          `For other themes, use the standalone component files.`
        );
    }
  };

  const styles = getThemeStyles();

  const renderIcon = () => {
    if (theme === 'glassmorphism' || theme === 'gradient' || theme === 'playful') {
      return (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      );
    }

    if (theme === 'dark' || theme === 'flat' || theme === 'material' || theme === 'monochrome' || theme === 'corporate') {
      return (
        <svg
          className={cn(
            'w-3 h-3 transition-all duration-300',
            isOpen ? 'text-gray-900 rotate-180' : 'text-gray-400'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      );
    }

    if (theme === 'neumorphism') {
      return (
        <svg
          className={cn(
            'w-5 h-5 text-gray-500 transition-transform duration-300',
            isOpen && 'rotate-45'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      );
    }

    if (theme === 'cyberpunk' || theme === 'futuristic' || theme === 'neon') {
      return (
        <svg
          className={cn(
            'w-4 h-4 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      );
    }

    if (theme === 'brutalist') {
      return (
        <svg
          className="w-5 h-5 font-bold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={3}
        >
          {isOpen ? (
            <path strokeLinecap="square" strokeLinejoin="miter" d="M20 12H4" />
          ) : (
            <path strokeLinecap="square" strokeLinejoin="miter" d="M12 4v16m8-8H4" />
          )}
        </svg>
      );
    }

    if (theme === 'luxury' || theme === 'pastel' || theme === 'nature' || theme === 'retro' || theme === '3d') {
      return (
        <svg
          className={cn(
            'w-4 h-4 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      );
    }

    if (theme === 'sketch') {
      return (
        <svg
          className={cn(
            'w-4 h-4 transition-transform duration-300',
            isOpen && 'rotate-90'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      );
    }

    if (isOpen) {
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4" />
        </svg>
      );
    }

    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
      </svg>
    );
  };

  return (
    <div className={cn(styles.container, className)}>
      <button onClick={onToggle} className={styles.button}>
        <span className={styles.question}>{question}</span>
        <span className={styles.icon}>{renderIcon()}</span>
      </button>
      <div className={styles.content}>
        <div className={styles.answer}>{answer}</div>
      </div>
    </div>
  );
}
