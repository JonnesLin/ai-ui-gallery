'use client';

import { createContext, useContext, useEffect, useId, useState, useRef, useCallback } from 'react';
import type { DropdownContextValue, DropdownProps } from './Dropdown.types';

const DropdownContext = createContext<DropdownContextValue | null>(null);

export function useDropdownContext() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown components must be used within a Dropdown');
  }
  return context;
}

export function Dropdown({
  children,
  open: controlledOpen,
  onOpenChange,
  theme = 'minimalist',
  placement = 'bottom-start',
}: DropdownProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const itemsCountRef = useRef(0);
  const itemsRegistryRef = useRef(new Set<number>());

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = useCallback((value: boolean) => {
    if (onOpenChange) {
      onOpenChange(value);
    }
    if (!isControlled) {
      setUncontrolledOpen(value);
    }
  }, [isControlled, onOpenChange]);

  const triggerId = useId();
  const menuId = useId();

  const registerItem = useCallback(() => {
    const index = itemsCountRef.current;
    itemsCountRef.current += 1;
    itemsRegistryRef.current.add(index);
    return index;
  }, []);

  const unregisterItem = useCallback((index: number) => {
    itemsRegistryRef.current.delete(index);
  }, []);

  useEffect(() => {
    if (!open) {
      setFocusedIndex(-1);
    }
  }, [open]);

  const value: DropdownContextValue = {
    open,
    setOpen,
    theme,
    placement,
    triggerId,
    menuId,
    focusedIndex,
    setFocusedIndex,
    itemsCount: itemsCountRef.current,
    registerItem,
    unregisterItem,
  };

  return (
    <DropdownContext.Provider value={value}>
      <div className="relative inline-block">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}
