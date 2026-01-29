import { forwardRef, type ReactNode } from 'react';
import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';
import type { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      size = 'md',
      theme,
      error,
      success,
      label,
      helperText,
      leftIcon,
      rightIcon,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const themeConfig = getTheme(theme);
    const hasError = Boolean(error);
    const hasSuccess = Boolean(success);
    const errorMessage = typeof error === 'string' ? error : '';

    const sizeStyles: Record<string, string> = {
      xs: 'px-3 py-1.5 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg',
      xl: 'px-6 py-5 text-xl',
    };

    const getVariantStyles = () => {
      // Define all 20 valid themes
      const validThemes = new Set([
        'minimalist', 'glassmorphism', 'neumorphism', 'dark', 'gradient', 'flat',
        'material', 'luxury', 'corporate', 'cyberpunk', 'pastel', 'futuristic',
        'monochrome', 'brutalist', 'retro', 'playful', 'nature', 'sketch', 'neon', '3d'
      ]);

      // Validate theme
      if (theme && !validThemes.has(theme)) {
        throw new Error(`Theme "${theme}" is not supported in Input component. Supported themes: ${Array.from(validThemes).join(', ')}`);
      }

      // Themes with custom implementations
      if (theme === 'minimalist') {
        return {
          wrapper: 'flex flex-col gap-2',
          label: cn(
            'text-xs font-medium tracking-wide uppercase',
            hasError && 'text-red-500',
            hasSuccess && 'text-green-600',
            disabled && 'text-gray-300',
            !hasError && !hasSuccess && !disabled && 'text-gray-500'
          ),
          input: cn(
            'w-full bg-transparent border-0 focus:outline-none transition-colors duration-300',
            'text-gray-900 placeholder-gray-300',
            variant === 'default' && 'px-0 border-b',
            variant === 'outlined' && 'border',
            hasError && 'border-red-400',
            hasSuccess && 'border-green-600',
            disabled && 'border-gray-100 text-gray-300 cursor-not-allowed',
            !hasError && !hasSuccess && !disabled && 'border-gray-200 focus:border-gray-900'
          ),
          helper: cn(
            'text-xs',
            hasError && 'text-red-400',
            hasSuccess && 'text-green-600',
            !hasError && !hasSuccess && 'text-gray-400'
          ),
        };
      }

      if (theme === 'dark') {
        return {
          wrapper: 'flex flex-col gap-2',
          label: cn(
            'text-sm font-medium',
            hasError && 'text-red-400',
            hasSuccess && 'text-emerald-400',
            disabled && 'text-gray-600',
            !hasError && !hasSuccess && !disabled && 'text-gray-400'
          ),
          input: cn(
            'w-full rounded-lg bg-[#1a1a1a] border focus:outline-none transition-all duration-200',
            'text-white placeholder-gray-600',
            hasError && 'border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]',
            hasSuccess && 'border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] text-emerald-400',
            disabled && 'bg-[#141414] border-[#1f1f1f] text-gray-600 cursor-not-allowed',
            !hasError && !hasSuccess && !disabled && 'border-[#2a2a2a] focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
          ),
          helper: cn(
            'text-xs flex items-center gap-1',
            hasError && 'text-red-400',
            hasSuccess && 'text-emerald-400',
            !hasError && !hasSuccess && 'text-gray-500'
          ),
        };
      }

      if (theme === 'neumorphism') {
        const getBoxShadow = () => {
          if (hasError) return { boxShadow: 'inset 6px 6px 12px #d4a5a5, inset -6px -6px 12px #ffffff' };
          if (disabled) return { boxShadow: '2px 2px 4px #b8bec7, -2px -2px 4px #ffffff' };
          if (variant === 'outlined') return { boxShadow: '8px 8px 16px #b8bec7, -8px -8px 16px #ffffff' };
          return { boxShadow: 'inset 6px 6px 12px #b8bec7, inset -6px -6px 12px #ffffff' };
        };

        return {
          wrapper: 'flex flex-col gap-3',
          label: cn(
            'text-sm font-medium ml-2',
            hasError && 'text-red-500',
            hasSuccess && 'text-blue-600',
            disabled && 'text-gray-400',
            !hasError && !hasSuccess && !disabled && 'text-gray-600'
          ),
          input: cn(
            'w-full rounded-2xl bg-[#e0e5ec] border-none focus:outline-none transition-all duration-300',
            'text-gray-700 placeholder-gray-400',
            hasError && 'text-red-600',
            disabled && 'text-gray-400 cursor-not-allowed'
          ),
          inputStyle: getBoxShadow(),
          helper: cn(
            'text-xs ml-2 flex items-center gap-1',
            hasError && 'text-red-400',
            hasSuccess && 'text-blue-600',
            !hasError && !hasSuccess && 'text-gray-500'
          ),
        };
      }

      if (theme === 'glassmorphism') {
        return {
          wrapper: 'flex flex-col gap-2',
          label: cn(
            'text-sm font-medium',
            hasError && 'text-red-400',
            hasSuccess && 'text-green-400',
            disabled && 'text-white/40',
            !hasError && !hasSuccess && !disabled && 'text-white/70'
          ),
          input: cn(
            'w-full rounded-xl border backdrop-blur-md focus:outline-none transition-all duration-200',
            'bg-white/10 text-white placeholder-white/40',
            hasError && 'border-red-400/50 focus:border-red-400',
            hasSuccess && 'border-green-400/50 focus:border-green-400',
            disabled && 'border-white/10 cursor-not-allowed opacity-50',
            !hasError && !hasSuccess && !disabled && 'border-white/20 focus:border-white/40'
          ),
          helper: cn(
            'text-xs',
            hasError && 'text-red-400',
            hasSuccess && 'text-green-400',
            !hasError && !hasSuccess && 'text-white/60'
          ),
        };
      }

      // All other themes use the themeConfig-based generic implementation
      // Themes: gradient, flat, material, luxury, corporate, cyberpunk, pastel,
      // futuristic, monochrome, brutalist, retro, playful, nature, sketch, neon, 3d
      return {
        wrapper: 'flex flex-col gap-2',
        label: cn(
          'text-sm font-medium',
          hasError && 'text-red-600',
          hasSuccess && 'text-green-600',
          disabled && 'text-gray-400',
          !hasError && !hasSuccess && !disabled && 'text-gray-700'
        ),
        input: cn(
          'w-full rounded-lg border focus:outline-none transition-all duration-200',
          themeConfig.base.background,
          themeConfig.base.text,
          hasError && 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200',
          hasSuccess && 'border-green-500 focus:border-green-600 focus:ring-2 focus:ring-green-200',
          disabled && 'opacity-50 cursor-not-allowed bg-gray-100',
          !hasError && !hasSuccess && !disabled && 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
        ),
        helper: cn(
          'text-xs',
          hasError && 'text-red-600',
          hasSuccess && 'text-green-600',
          !hasError && !hasSuccess && 'text-gray-500'
        ),
      };
    };

    const styles = getVariantStyles();
    const inputStyles = 'inputStyle' in styles ? styles.inputStyle : undefined;

    const renderIcon = (icon: ReactNode, position: 'left' | 'right') => {
      if (!icon) return null;

      const iconColor = hasError ? 'text-red-500' : hasSuccess ? 'text-green-500' : theme === 'dark' ? 'text-gray-500' : 'text-gray-400';
      const iconPosition = position === 'left' ? 'left-4' : 'right-4';

      return (
        <div className={cn('absolute top-1/2 -translate-y-1/2', iconPosition, iconColor)}>
          {icon}
        </div>
      );
    };

    const renderHelperContent = () => {
      if (hasError && errorMessage) {
        return (
          <>
            {theme === 'dark' || theme === 'minimalist' ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : null}
            <span>{errorMessage}</span>
          </>
        );
      }
      if (helperText) {
        return <span>{helperText}</span>;
      }
      return null;
    };

    const inputElement = (
      <input
        ref={ref}
        disabled={disabled}
        className={cn(
          styles.input,
          sizeStyles[size],
          leftIcon && 'pl-12',
          rightIcon && 'pr-12',
          className
        )}
        style={inputStyles}
        {...props}
      />
    );

    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <div className="relative">
          {renderIcon(leftIcon, 'left')}
          {inputElement}
          {renderIcon(rightIcon, 'right')}
        </div>
        {(helperText || errorMessage) && (
          <div className={styles.helper}>
            {renderHelperContent()}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
