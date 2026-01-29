import { useState, useCallback } from 'react';
import type { FAQProps } from './types';
import { FAQItem } from './FAQItem';
import { cn } from '../_shared/utils';

export function FAQ({
  theme = 'minimalist',
  variant = 'accordion',
  items,
  allowMultiple = false,
  defaultOpenIndex = 0,
  className,
}: FAQProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => {
    if (typeof defaultOpenIndex === 'number') {
      return new Set([defaultOpenIndex]);
    }
    return new Set(defaultOpenIndex);
  });

  const handleToggle = useCallback(
    (index: number) => {
      setOpenIndices((prev) => {
        const next = new Set(prev);

        if (next.has(index)) {
          next.delete(index);
        } else {
          if (!allowMultiple) {
            next.clear();
          }
          next.add(index);
        }

        return next;
      });
    },
    [allowMultiple]
  );

  const getContainerStyles = () => {
    switch (theme) {
      case 'minimalist':
        return variant === 'accordion' ? 'divide-y divide-gray-200' : 'space-y-4';

      case 'glassmorphism':
        return 'space-y-4';

      case 'dark':
        return 'space-y-3';

      case 'neumorphism':
        return 'space-y-4';

      default:
        return 'space-y-4';
    }
  };

  return (
    <div className={cn(getContainerStyles(), className)}>
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          index={index}
          isOpen={openIndices.has(index)}
          onToggle={() => handleToggle(index)}
          theme={theme}
          variant={variant}
        />
      ))}
    </div>
  );
}
