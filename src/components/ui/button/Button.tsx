import { forwardRef } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ButtonProps } from './Button.types';

const LoadingSpinner = () => (
  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      theme: themeName = 'minimalist',
      loading = false,
      disabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const theme = getTheme(themeName);
    const variantStyles = theme.variants[variant];
    const sizeStyles = theme.sizes[size];

    const isDisabled = disabled || loading;

    const baseClasses = cn(
      'inline-flex items-center justify-center gap-2',
      'font-medium tracking-wide',
      theme.base.radius,
      theme.states.hover,
      sizeStyles,
    );

    const stateClasses = isDisabled
      ? cn(
          variantStyles.background,
          variantStyles.border,
          loading ? theme.states.loading : theme.states.disabled,
          'pointer-events-none',
        )
      : cn(
          theme.states.focus,
          variantStyles.background,
          variantStyles.text,
          variantStyles.border,
          variantStyles.hover,
          variantStyles.active,
          variantStyles.shadow,
        );

    const widthClasses = fullWidth ? 'w-full' : '';

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(baseClasses, stateClasses, widthClasses, className)}
        {...props}
      >
        {loading && <LoadingSpinner />}
        {!loading && leftIcon}
        {children}
        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
