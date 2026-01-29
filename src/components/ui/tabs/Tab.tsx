import { useTabsContext } from './TabsContext';
import type { TabProps } from './Tabs.types';
import { cn } from '../_shared/utils';

export function Tab({ value, className, style, disabled = false, children }: TabProps) {
  const { value: activeValue, onChange } = useTabsContext();
  const isActive = value === activeValue;

  const handleClick = () => {
    if (disabled) return;
    onChange(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onChange(value);
    }
  };

  return (
    <button
      role="tab"
      id={`tab-${value}`}
      aria-selected={isActive}
      aria-disabled={disabled}
      aria-controls={`panel-${value}`}
      data-value={value}
      tabIndex={isActive ? 0 : -1}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      className={cn(
        'outline-none transition-all',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
      style={style}
      data-active={isActive}
    >
      {children}
    </button>
  );
}
