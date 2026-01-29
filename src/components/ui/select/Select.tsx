import { useState, useRef, useEffect, createContext, useContext } from 'react';
import type { SelectProps, SelectContextValue, SelectValue } from './Select.types';
import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { SelectOption } from './SelectOption';

const SelectContext = createContext<SelectContextValue | null>(null);

export function useSelectContext() {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('Select components must be used within Select');
  }
  return context;
}

export function Select({
  value: controlledValue,
  defaultValue = '',
  onChange,
  options,
  multiple = false,
  searchable = false,
  clearable = false,
  placeholder = 'Select option',
  size = 'md',
  theme = 'minimalist',
  disabled = false,
  error = false,
  label,
  className,
}: SelectProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState<SelectValue>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;
  const isControlled = controlledValue !== undefined;

  const themeConfig = getTheme(theme);

  const dropdownBg = themeConfig.base.background === 'bg-transparent'
    ? 'bg-white'
    : themeConfig.base.background;

  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const toggleOpen = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (isOpen) {
        setSearchQuery('');
      }
    }
  };

  const selectOption = (optionValue: string) => {
    let newValue: SelectValue;

    if (multiple) {
      const currentArray = Array.isArray(value) ? value : value ? [value as string] : [];
      if (currentArray.includes(optionValue)) {
        newValue = currentArray.filter(v => v !== optionValue);
      } else {
        newValue = [...currentArray, optionValue];
      }
    } else {
      newValue = optionValue;
      setIsOpen(false);
      setSearchQuery('');
    }

    if (isControlled) {
      onChange?.(newValue);
    } else {
      setUncontrolledValue(newValue);
      onChange?.(newValue);
    }
  };

  const clearValue = () => {
    const newValue = multiple ? [] : '';
    if (isControlled) {
      onChange?.(newValue);
    } else {
      setUncontrolledValue(newValue);
      onChange?.(newValue);
    }
  };

  const flatOptions = options.flatMap(item =>
    'options' in item ? item.options : [item]
  );

  const filteredOptions = searchable && searchQuery
    ? flatOptions.filter(opt =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : flatOptions;

  const getDisplayValue = () => {
    if (multiple) {
      const selectedArray = Array.isArray(value) ? value : value ? [value as string] : [];
      if (selectedArray.length === 0) return placeholder;
      const labels = selectedArray
        .map(v => flatOptions.find(opt => opt.value === v)?.label)
        .filter(Boolean);
      return labels.join(', ');
    }

    const selectedOption = flatOptions.find(opt => opt.value === value);
    return selectedOption ? selectedOption.label : placeholder;
  };

  const hasValue = multiple
    ? (Array.isArray(value) ? value.length > 0 : false)
    : value !== '' && value !== null && value !== undefined;

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5',
    lg: 'px-5 py-3 text-lg',
  };

  const contextValue: SelectContextValue = {
    value,
    multiple,
    disabled,
    isOpen,
    searchQuery,
    setSearchQuery,
    toggleOpen,
    selectOption,
    clearValue,
  };

  return (
    <SelectContext.Provider value={contextValue}>
      <div ref={containerRef} className={cn('relative', className)}>
        {label && (
          <label className={cn('block text-sm font-medium mb-2', themeConfig.base.text)}>
            {label}
          </label>
        )}

        <button
          type="button"
          onClick={toggleOpen}
          disabled={disabled}
          className={cn(
            'w-full flex items-center justify-between gap-2',
            sizeClasses[size],
            themeConfig.base.background,
            themeConfig.base.border,
            themeConfig.base.radius,
            themeConfig.base.text,
            error && 'border-red-500',
            disabled ? themeConfig.states.disabled : themeConfig.states.hover,
            'transition-all duration-200 focus:outline-none',
            themeConfig.states.focus
          )}
        >
          <span className={cn('flex-1 text-left truncate', !hasValue && 'opacity-50')}>
            {getDisplayValue()}
          </span>

          <div className="flex items-center gap-2">
            {clearable && hasValue && !disabled && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  clearValue();
                }}
                className="hover:opacity-70 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}

            <svg
              className={cn(
                'w-4 h-4 transition-transform duration-200',
                isOpen && 'rotate-180'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {isOpen && (
          <div
            className={cn(
              'absolute z-50 w-full mt-2',
              dropdownBg,
              themeConfig.base.border,
              themeConfig.base.radius,
              themeConfig.base.shadow,
              'overflow-hidden'
            )}
          >
            {searchable && (
              <div className="p-2 border-b" style={{ borderColor: 'inherit' }}>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn(
                    'w-full px-3 py-2 rounded',
                    'bg-opacity-50',
                    themeConfig.base.background,
                    themeConfig.base.text,
                    'focus:outline-none',
                    themeConfig.states.focus
                  )}
                />
              </div>
            )}

            <div className="max-h-60 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <SelectOption key={option.value} option={option} theme={theme} />
                ))
              ) : (
                <div className={cn('px-4 py-3 text-center opacity-50', themeConfig.base.text)}>
                  No results found
                </div>
              )}
            </div>
          </div>
        )}

        {error && typeof error === 'string' && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    </SelectContext.Provider>
  );
}
