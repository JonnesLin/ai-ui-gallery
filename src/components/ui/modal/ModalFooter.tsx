import type { ModalFooterProps } from './Modal.types';

export function ModalFooter({ theme, children }: ModalFooterProps) {
  return (
    <div className="px-6 py-4 flex justify-end gap-3" data-theme={theme}>
      {children}
    </div>
  );
}
