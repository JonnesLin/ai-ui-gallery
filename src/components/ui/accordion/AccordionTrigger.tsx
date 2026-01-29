import { useAccordionContext, useAccordionItemContext } from './AccordionContext';
import type { AccordionTriggerProps } from './types';
import { cn } from '../_shared/utils';
import { getTheme } from '../_themes';

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { onItemToggle, theme } = useAccordionContext();
  const { value, disabled, isOpen } = useAccordionItemContext();
  const themeConfig = getTheme(theme);

  const handleClick = () => {
    if (disabled) return;
    onItemToggle(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onItemToggle(value);
    }
  };

  return (
    <button
      type="button"
      id={`accordion-trigger-${value}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      data-state={isOpen ? 'open' : 'closed'}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${value}`}
      aria-disabled={disabled}
      className={cn(
        'flex w-full items-center justify-between py-4 text-left',
        themeConfig.base.text,
        themeConfig.states.hover,
        disabled && themeConfig.states.disabled,
        className
      )}
    >
      {children}
    </button>
  );
}
