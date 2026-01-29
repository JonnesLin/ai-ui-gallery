import { forwardRef, useEffect, useRef } from 'react';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { TextareaProps } from './Textarea.types';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      size = 'md',
      theme: themeName,
      variant = 'default',
      resize = 'vertical',
      autoResize = false,
      minRows = 3,
      maxRows,
      error = false,
      label,
      helperText,
      showCount = false,
      className,
      value,
      defaultValue,
      maxLength,
      disabled,
      ...props
    },
    ref
  ) => {
    const theme = getTheme(themeName);
    const internalRef = useRef<HTMLTextAreaElement>(null);
    const textareaRef = (ref as React.MutableRefObject<HTMLTextAreaElement>) || internalRef;

    const hasError = Boolean(error);
    const errorMessage = typeof error === 'string' ? error : undefined;
    const displayHelperText = errorMessage || helperText;

    const currentLength = typeof value === 'string' ? value.length : 0;
    const shouldShowCount = showCount && maxLength !== undefined;

    useEffect(() => {
      if (!autoResize) return;

      const textarea = textareaRef.current;
      if (!textarea) return;

      const updateHeight = () => {
        textarea.style.height = 'auto';
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
        const minHeight = minRows * lineHeight;
        const maxHeight = maxRows ? maxRows * lineHeight : Infinity;
        const newHeight = Math.min(Math.max(textarea.scrollHeight, minHeight), maxHeight);
        textarea.style.height = `${newHeight}px`;
      };

      updateHeight();
      textarea.addEventListener('input', updateHeight);
      return () => textarea.removeEventListener('input', updateHeight);
    }, [autoResize, minRows, maxRows, value]);

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg',
    }[size];

    const variantClasses = {
      default: cn(
        theme.base.background,
        theme.base.text,
        theme.base.border,
        'border-2',
        theme.states.focus
      ),
      filled: cn(
        'bg-gray-100 dark:bg-gray-800',
        theme.base.text,
        'border-b-2',
        theme.base.border,
        theme.states.focus
      ),
      outlined: cn(
        'bg-transparent',
        theme.base.text,
        'border-2',
        theme.base.border,
        theme.states.focus
      ),
    }[variant];

    const resizeClasses = {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize',
    }[resize];

    const errorClasses = hasError
      ? 'border-red-600 focus:border-red-700 text-red-900'
      : '';

    const disabledClasses = disabled
      ? theme.states.disabled
      : '';

    const baseClasses = cn(
      'w-full',
      'font-medium',
      'placeholder:text-gray-400',
      'transition-all duration-200',
      theme.base.radius,
      sizeClasses,
      variantClasses,
      resizeClasses,
      errorClasses,
      disabledClasses,
      className
    );

    const textareaElement = (
      <textarea
        ref={textareaRef}
        value={value}
        defaultValue={defaultValue}
        maxLength={maxLength}
        disabled={disabled}
        rows={autoResize ? minRows : props.rows}
        className={baseClasses}
        {...props}
      />
    );

    if (!label && !displayHelperText && !shouldShowCount) {
      return textareaElement;
    }

    return (
      <div className="space-y-2 w-full">
        {label && (
          <label
            className={cn(
              'block text-sm font-semibold',
              hasError ? 'text-red-600' : theme.base.text
            )}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {textareaElement}
          {shouldShowCount && (
            <div
              className={cn(
                'absolute bottom-3 right-3 text-xs font-medium',
                hasError ? 'text-red-600' : 'text-gray-600'
              )}
            >
              {currentLength}/{maxLength}
            </div>
          )}
        </div>
        {displayHelperText && (
          <p
            className={cn(
              'text-xs font-medium',
              hasError ? 'text-red-600' : 'text-gray-600'
            )}
          >
            {displayHelperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
