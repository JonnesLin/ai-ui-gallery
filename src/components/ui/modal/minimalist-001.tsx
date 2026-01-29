import { useState } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from './index';

export default function MinimalistModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
      >
        Open Modal
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        theme="minimalist"
        size="md"
        closeOnOverlayClick
        closeOnEsc
        centered
      >
        <div className="bg-white rounded-lg shadow-sm">
          <ModalHeader theme="minimalist" onClose={() => setIsOpen(false)}>
            <h2 className="text-lg font-medium text-gray-900">Confirm Action</h2>
          </ModalHeader>

          <ModalContent theme="minimalist">
            <p className="text-sm text-gray-600 leading-relaxed">
              Are you sure you want to proceed with this action? This cannot be undone.
            </p>
          </ModalContent>

          <ModalFooter theme="minimalist">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors"
            >
              Confirm
            </button>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
}
