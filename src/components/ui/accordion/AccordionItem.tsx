import { useMemo } from 'react';
import { useAccordionContext } from './AccordionContext';
import { AccordionItemContext } from './AccordionContext';
import type { AccordionItemProps } from './types';
import { cn } from '../_shared/utils';

export function AccordionItem({
  value,
  disabled = false,
  children,
  className,
  style,
}: AccordionItemProps) {
  const { value: openValues } = useAccordionContext();
  const isOpen = openValues.has(value);

  const contextValue = useMemo(
    () => ({
      value,
      disabled,
      isOpen,
    }),
    [value, disabled, isOpen]
  );

  return (
    <AccordionItemContext.Provider value={contextValue}>
      <div data-state={isOpen ? 'open' : 'closed'} className={cn('border-b border-neutral-200', className)} style={style}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}
