import { cn } from '../_shared/utils';
import type { ModalHeaderProps } from './Modal.types';

export function ModalHeader({ theme, onClose, children }: ModalHeaderProps) {
  return (
    <div className="flex items-center justify-between p-6" data-theme={theme}>
      <div className="flex-1">{children}</div>

      {onClose && (
        <button
          onClick={onClose}
          className="p-1 ml-4 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
