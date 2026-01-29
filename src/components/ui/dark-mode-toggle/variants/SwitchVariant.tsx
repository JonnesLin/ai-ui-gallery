import { cn } from '../../_shared/utils';
import type { VariantProps } from './types';

const sizeClasses = {
  sm: {
    container: 'w-12 h-6',
    knob: 'w-4 h-4 top-1',
    knobOffset: 'left-1',
    knobOffsetActive: 'left-7',
  },
  md: {
    container: 'w-16 h-8',
    knob: 'w-6 h-6 top-1',
    knobOffset: 'left-1',
    knobOffsetActive: 'left-9',
  },
  lg: {
    container: 'w-20 h-10',
    knob: 'w-8 h-8 top-1',
    knobOffset: 'left-1',
    knobOffsetActive: 'left-11',
  },
};

export function SwitchVariant({
  theme,
  mode,
  effectiveMode,
  onChange,
  size,
  showLabel,
  className,
}: VariantProps) {
  const sizeConfig = sizeClasses[size];
  const isDark = effectiveMode === 'dark';

  const handleToggle = () => {
    if (mode === 'system') {
      onChange(isDark ? 'light' : 'dark');
    } else {
      onChange(mode === 'dark' ? 'light' : 'dark');
    }
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <button
        onClick={handleToggle}
        className={cn(
          'relative rounded-full transition-all duration-300',
          theme.base.border,
          theme.states.hover,
          theme.states.focus,
          sizeConfig.container,
          isDark ? theme.variants.primary.background : theme.base.background
        )}
        aria-label="Toggle dark mode"
        aria-pressed={isDark}
      >
        <div
          className={cn(
            'absolute rounded-full transition-all duration-300',
            sizeConfig.knob,
            isDark ? sizeConfig.knobOffsetActive : sizeConfig.knobOffset,
            isDark ? theme.base.background : theme.variants.primary.background
          )}
        />
      </button>
      {showLabel && (
        <span className={cn('text-sm font-medium', theme.base.text)}>
          {mode === 'system' ? `System (${effectiveMode})` : mode === 'dark' ? 'Dark' : 'Light'}
        </span>
      )}
    </div>
  );
}
