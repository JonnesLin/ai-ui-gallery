import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { LoginHeaderProps } from './types';

export function LoginHeader({ theme, logo, title, subtitle }: LoginHeaderProps) {
  const themeConfig = getTheme(theme);

  const defaultLogo = (
    <div className={cn(
      'w-12 h-12 mx-auto mb-4 flex items-center justify-center',
      theme === 'minimalist' ? 'bg-black rounded-lg' :
      theme === 'glassmorphism' ? 'bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl shadow-lg' :
      theme === 'material' ? 'bg-indigo-600 rounded-full shadow-lg' :
      theme === 'gradient' ? 'bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl' :
      'bg-gray-900 rounded-lg'
    )}>
      {theme === 'glassmorphism' && (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )}
      {theme === 'material' && (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )}
    </div>
  );

  return (
    <div className="text-center mb-8">
      {logo || defaultLogo}

      <h1 className={cn(
        'font-bold mb-2',
        theme === 'minimalist' ? 'text-xl text-gray-900' :
        theme === 'glassmorphism' ? 'text-2xl text-white' :
        theme === 'material' ? 'text-3xl font-normal text-gray-900' :
        theme === 'gradient' ? 'text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent' :
        'text-2xl',
        themeConfig.base.text
      )}>
        {title}
      </h1>

      {subtitle && (
        <p className={cn(
          'text-sm',
          theme === 'minimalist' ? 'text-gray-600' :
          theme === 'glassmorphism' ? 'text-white/60' :
          theme === 'material' ? 'text-gray-600' :
          theme === 'gradient' ? 'text-gray-600' :
          'text-gray-500'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
