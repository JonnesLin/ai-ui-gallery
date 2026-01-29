'use client';

import { cloneElement, isValidElement } from 'react';
import type { PopoverTriggerProps } from './Popover.types';
import { usePopoverContext } from './Popover';
import { cn } from '../_shared/utils';

export function PopoverTrigger({
  children,
  asChild = false,
  className,
  style,
}: PopoverTriggerProps) {
  const { setOpen, open, triggerRef } = usePopoverContext();

  const handleClick = () => {
    setOpen(!open);
  };

  if (asChild && isValidElement<Record<string, unknown>>(children)) {
    const childProps = children.props as Record<string, unknown>;
    return cloneElement(children, {
      ...childProps,
      ref: triggerRef,
      onClick: (e: React.MouseEvent) => {
        (childProps.onClick as ((e: React.MouseEvent) => void) | undefined)?.(e);
        handleClick();
      },
      className: cn(childProps.className as string | undefined, className),
    } as Record<string, unknown>);
  }

  return (
    <button
      ref={triggerRef as React.RefObject<HTMLButtonElement>}
      onClick={handleClick}
      className={className}
      style={style}
      type="button"
    >
      {children}
    </button>
  );
}
