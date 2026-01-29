import { useEffect, useRef, useState } from 'react';
import { useAccordionItemContext } from './AccordionContext';
import type { AccordionContentProps } from './types';
import { cn } from '../_shared/utils';

export function AccordionContent({ children, className, style }: AccordionContentProps) {
  const { isOpen, value } = useAccordionItemContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      const resizeObserver = new ResizeObserver(() => {
        if (contentRef.current) {
          setHeight(contentRef.current.scrollHeight);
        }
      });

      resizeObserver.observe(contentRef.current);
      setHeight(contentRef.current.scrollHeight);

      return () => resizeObserver.disconnect();
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      ref={contentRef}
      id={`accordion-content-${value}`}
      role="region"
      aria-labelledby={`accordion-trigger-${value}`}
      className={cn('overflow-hidden transition-all duration-300 ease-in-out')}
      style={{
        maxHeight: isOpen ? `${height}px` : '0px',
        opacity: isOpen ? 1 : 0,
      }}
      hidden={!isOpen}
    >
      <div className={cn('pb-4', className)} style={style}>{children}</div>
    </div>
  );
}
