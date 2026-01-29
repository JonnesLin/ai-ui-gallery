import { cn } from '../../_shared/utils';
import type { VariantProps } from './types';

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

const iconSizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

export function ButtonVariant({
  theme,
  mode,
  effectiveMode,
  onChange,
  size,
  showLabel,
  className,
}: VariantProps) {
  const isDark = effectiveMode === 'dark';

  const handleToggle = () => {
    if (mode === 'system') {
      onChange(isDark ? 'light' : 'dark');
    } else {
      onChange(mode === 'dark' ? 'light' : 'dark');
    }
  };

  const Icon = isDark ? MoonIcon : SunIcon;

  return (
    <button
      onClick={handleToggle}
      className={cn(
        'flex items-center gap-2 font-medium transition-all duration-300',
        theme.base.radius,
        theme.base.border,
        theme.variants.primary.background,
        theme.variants.primary.text,
        theme.variants.primary.hover,
        theme.states.hover,
        theme.states.focus,
        sizeClasses[size],
        className
      )}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
    >
      <Icon className={iconSizeClasses[size]} />
      {showLabel && (
        <span>
          {mode === 'system' ? `System (${effectiveMode})` : mode === 'dark' ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );
}
