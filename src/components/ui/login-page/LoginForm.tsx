import { useState } from 'react';
import type { FormEvent } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { LoginFormProps, LoginFormData } from './types';

export function LoginForm({
  theme,
  onSubmit,
  loading = false,
  error,
  showRememberMe = true,
  showForgotPassword = true,
  onForgotPasswordClick,
}: LoginFormProps) {
  const themeConfig = getTheme(theme);
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputBaseClass = cn(
    'w-full px-4 py-3 transition-all outline-none',
    theme === 'minimalist' ?
      'px-0 border-0 border-b border-gray-200 focus:border-gray-900 bg-transparent rounded-none' :
    theme === 'glassmorphism' ?
      'bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-purple-400/50 focus:border-transparent backdrop-blur-sm' :
    theme === 'material' ?
      'px-3 py-4 border-b-2 border-gray-300 bg-transparent focus:border-indigo-600 rounded-none' :
    theme === 'gradient' ?
      'bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200' :
    'bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
  );

  const labelClass = cn(
    'block text-sm font-medium mb-2',
    theme === 'glassmorphism' ? 'text-white/80' :
    theme === 'material' ? 'text-gray-600' :
    'text-gray-700'
  );

  const buttonClass = cn(
    'w-full py-3 font-semibold rounded-lg transition-all',
    loading && 'cursor-wait opacity-75',
    theme === 'minimalist' ?
      'bg-black text-white hover:bg-gray-800 text-sm font-medium mt-8' :
    theme === 'glassmorphism' ?
      'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 py-3.5' :
    theme === 'material' ?
      'bg-indigo-600 text-white hover:bg-indigo-700 shadow hover:shadow-lg active:shadow-md font-medium' :
    theme === 'gradient' ?
      'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40' :
    'bg-blue-600 text-white hover:bg-blue-700'
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className={cn(
          'p-3 rounded-lg text-sm',
          theme === 'glassmorphism' ? 'bg-red-500/20 border border-red-400/30 text-red-200' :
          'bg-red-50 border border-red-200 text-red-600'
        )}>
          {error}
        </div>
      )}

      <div className={theme === 'material' ? 'relative' : ''}>
        {theme !== 'material' && (
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
        )}
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder={theme === 'material' ? 'Email' : 'you@example.com'}
          required
          disabled={loading}
          className={cn(
            inputBaseClass,
            theme === 'material' && 'peer placeholder-transparent'
          )}
        />
        {theme === 'material' && (
          <label
            htmlFor="email"
            className="absolute left-3 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-indigo-600 peer-focus:text-sm"
          >
            Email
          </label>
        )}
      </div>

      <div className={theme === 'material' ? 'relative' : ''}>
        {theme !== 'material' && (
          <label htmlFor="password" className={labelClass}>
            Password
          </label>
        )}
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          placeholder={theme === 'material' ? 'Password' : 'Enter your password'}
          required
          disabled={loading}
          className={cn(
            inputBaseClass,
            theme === 'material' && 'peer placeholder-transparent'
          )}
        />
        {theme === 'material' && (
          <label
            htmlFor="password"
            className="absolute left-3 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-indigo-600 peer-focus:text-sm"
          >
            Password
          </label>
        )}
      </div>

      {(showRememberMe || showForgotPassword) && (
        <div className="flex items-center justify-between pt-2">
          {showRememberMe && (
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                disabled={loading}
                className={cn(
                  'w-4 h-4 rounded focus:ring-offset-0',
                  theme === 'minimalist' ?
                    'border border-gray-300 text-black focus:ring-0' :
                  theme === 'glassmorphism' ?
                    'bg-white/10 border-white/30 text-purple-500 focus:ring-purple-400/50' :
                  theme === 'material' ?
                    'text-indigo-600 border-gray-300 focus:ring-2 focus:ring-indigo-500' :
                  'text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500'
                )}
              />
              <span className={cn(
                'text-sm',
                theme === 'minimalist' ? 'text-gray-500' :
                theme === 'glassmorphism' ? 'text-white/70' :
                'text-gray-700'
              )}>
                Remember me
              </span>
            </label>
          )}

          {showForgotPassword && (
            <button
              type="button"
              onClick={onForgotPasswordClick}
              disabled={loading}
              className={cn(
                'text-sm transition-colors',
                theme === 'minimalist' ? 'text-gray-500 hover:text-gray-900' :
                theme === 'glassmorphism' ? 'text-purple-300 hover:text-purple-200' :
                theme === 'material' ? 'text-indigo-600 hover:text-indigo-800 font-medium' :
                theme === 'gradient' ? 'text-purple-600 hover:text-purple-700 font-medium' :
                'text-blue-600 hover:text-blue-700'
              )}
            >
              Forgot password?
            </button>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className={buttonClass}
      >
        {loading ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  );
}
