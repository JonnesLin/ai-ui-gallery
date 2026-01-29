'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { getSearchBoxTheme } from './themes';
import { cn } from '../_shared/utils';
import type { SearchBoxProps, SearchBoxSize } from './types';

const sizeStyles: Record<SearchBoxSize, { padding: string; iconSize: string; textSize: string; buttonPadding: string }> = {
  sm: {
    padding: 'px-2.5 py-2',
    iconSize: 'w-3.5 h-3.5',
    textSize: 'text-sm',
    buttonPadding: 'p-1.5',
  },
  md: {
    padding: 'px-3 py-3',
    iconSize: 'w-4 h-4',
    textSize: 'text-base',
    buttonPadding: 'p-2',
  },
  lg: {
    padding: 'px-4 py-4',
    iconSize: 'w-5 h-5',
    textSize: 'text-lg',
    buttonPadding: 'p-2',
  },
};

export function SearchBox({
  value: controlledValue,
  defaultValue = '',
  onChange,
  onSearch,
  placeholder = 'Search...',
  size = 'md',
  theme: themeName,
  loading = false,
  clearable = true,
  suggestions = [],
  showSuggestions: controlledShowSuggestions,
  disabled = false,
  className,
}: SearchBoxProps) {
  const theme = getSearchBoxTheme(themeName);
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [internalShowSuggestions, setInternalShowSuggestions] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const value = isControlled ? controlledValue : internalValue;
  const showSuggestions = controlledShowSuggestions ?? internalShowSuggestions;

  const handleValueChange = useCallback((newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      onSearch?.(newValue);
    }, 300);
  }, [isControlled, onChange, onSearch]);

  const handleClear = useCallback(() => {
    handleValueChange('');
    inputRef.current?.focus();
  }, [handleValueChange]);

  const handleSuggestionClick = useCallback((suggestion: string) => {
    handleValueChange(suggestion);
    setInternalShowSuggestions(false);
    onSearch?.(suggestion);
  }, [handleValueChange, onSearch]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    if (suggestions.length > 0) {
      setInternalShowSuggestions(true);
    }
  }, [suggestions.length]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setTimeout(() => setInternalShowSuggestions(false), 200);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch?.(value);
      setInternalShowSuggestions(false);
    } else if (e.key === 'Escape') {
      setInternalShowSuggestions(false);
      inputRef.current?.blur();
    }
  }, [onSearch, value]);

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const sizeStyle = sizeStyles[size];
  const hasSuggestions = suggestions.length > 0 && showSuggestions;

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <div
        className={cn(
          theme.container,
          isFocused && theme.containerFocused,
          sizeStyle.padding,
          disabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        <svg
          className={cn(
            sizeStyle.iconSize,
            theme.icon,
            'flex-shrink-0'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => handleValueChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            theme.input,
            sizeStyle.textSize,
            'px-3',
            disabled && 'cursor-not-allowed'
          )}
        />

        {loading && (
          <div className={cn('animate-spin', sizeStyle.buttonPadding)}>
            <svg
              className={cn(sizeStyle.iconSize, theme.icon)}
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )}

        {!loading && clearable && value && (
          <button
            type="button"
            onClick={handleClear}
            disabled={disabled}
            className={cn(
              theme.clearButton,
              theme.clearButtonHover,
              sizeStyle.buttonPadding,
              disabled && 'cursor-not-allowed'
            )}
          >
            <svg className={cn(sizeStyle.iconSize)} fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>

      {hasSuggestions && (
        <div className={cn(theme.suggestionsContainer, 'z-50')}>
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className={cn(
                theme.suggestionItem,
                theme.suggestionItemHover
              )}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
