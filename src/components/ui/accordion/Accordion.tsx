import { useState, useCallback, useMemo } from 'react';
import { AccordionContext } from './AccordionContext';
import type { AccordionProps } from './types';
import { cn } from '../_shared/utils';

function normalizeValue(value: string | string[] | undefined): Set<string> {
  if (!value) return new Set();
  return new Set(Array.isArray(value) ? value : [value]);
}

function denormalizeValue(set: Set<string>, type: 'single' | 'multiple'): string | string[] {
  const arr = Array.from(set);
  return type === 'single' ? (arr[0] || '') : arr;
}

export function Accordion({
  type = 'single',
  defaultValue,
  value: controlledValue,
  onValueChange,
  theme = 'minimalist',
  collapsible = true,
  children,
  className,
}: AccordionProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState<Set<string>>(
    () => normalizeValue(defaultValue)
  );

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? normalizeValue(controlledValue) : uncontrolledValue;

  const onItemToggle = useCallback(
    (itemValue: string) => {
      const newSet = new Set(value);

      if (newSet.has(itemValue)) {
        if (!collapsible && type === 'single' && newSet.size === 1) {
          return;
        }
        newSet.delete(itemValue);
      } else {
        if (type === 'single') {
          newSet.clear();
        }
        newSet.add(itemValue);
      }

      const newValue = denormalizeValue(newSet, type);

      if (!isControlled) {
        setUncontrolledValue(newSet);
      }

      onValueChange?.(newValue);
    },
    [value, type, collapsible, isControlled, onValueChange]
  );

  const contextValue = useMemo(
    () => ({
      type,
      value,
      onItemToggle,
      theme,
      collapsible,
    }),
    [type, value, onItemToggle, theme, collapsible]
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={cn('space-y-2', className)}>{children}</div>
    </AccordionContext.Provider>
  );
}
