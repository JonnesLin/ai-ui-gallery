import type { ModalContentProps } from './Modal.types';

export function ModalContent({ theme, children }: ModalContentProps) {
  return (
    <div className="p-6" data-theme={theme}>
      {children}
    </div>
  );
}
