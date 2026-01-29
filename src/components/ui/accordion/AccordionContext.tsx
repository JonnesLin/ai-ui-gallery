import { createContext, useContext } from 'react';
import type { AccordionContextValue } from './types';

export const AccordionContext = createContext<AccordionContextValue | null>(null);

export const AccordionItemContext = createContext<{
  value: string;
  disabled: boolean;
  isOpen: boolean;
} | null>(null);

export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within Accordion');
  }
  return context;
}

export function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('AccordionTrigger and AccordionContent must be used within AccordionItem');
  }
  return context;
}
