import { useEffect, useRef, useCallback, useId, useContext } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../_shared/utils';
import type { ModalProps } from './Modal.types';
import { PortalContainerContext } from './PortalContainerContext';

const SIZE_CLASSES: Record<string, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full mx-4',
};

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export function Modal({
  open,
  onClose,
  theme,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEsc = true,
  centered = true,
  children,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
}: ModalProps & { 'aria-labelledby'?: string; 'aria-describedby'?: string }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const modalId = useId();
  const portalContainer = useContext(PortalContainerContext);

  const handleFocusTrap = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Tab' || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(FOCUSABLE_SELECTOR);
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    previousActiveElement.current = document.activeElement as HTMLElement;

    // 仅在 portal 到 document.body 时锁定滚动，预览容器内不需要
    const shouldLockScroll = !portalContainer;
    let originalOverflow: string | undefined;
    if (shouldLockScroll) {
      originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }

    const focusableElements = modalRef.current?.querySelectorAll(FOCUSABLE_SELECTOR);
    if (focusableElements && focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    } else {
      modalRef.current?.focus();
    }

    return () => {
      if (shouldLockScroll && originalOverflow !== undefined) {
        document.body.style.overflow = originalOverflow;
      }
      previousActiveElement.current?.focus();
    };
  }, [open, portalContainer]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEsc) {
        event.stopPropagation();
        onClose();
      }
      handleFocusTrap(event);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, closeOnEsc, onClose, handleFocusTrap]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!open) return null;

  if (typeof document === 'undefined') return null;

  const modalContent = (
    <div
      className={cn(
        'fixed inset-0 z-50 flex',
        centered ? 'items-center justify-center' : 'items-start justify-center pt-16'
      )}
      onClick={handleOverlayClick}
    >
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        className={cn('relative w-full overflow-hidden', SIZE_CLASSES[size])}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledby || `${modalId}-title`}
        aria-describedby={ariaDescribedby}
        data-theme={theme}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, portalContainer ?? document.body);
}
