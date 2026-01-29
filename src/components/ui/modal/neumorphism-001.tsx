import { useState } from 'react';
import { Modal, ModalContent, ModalFooter } from './index';

export default function NeumorphismModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#e0e5ec] flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-sm font-medium text-gray-600 bg-[#e0e5ec] rounded-xl transition-all"
        style={{
          boxShadow: '6px 6px 12px #b8bec7, -6px -6px 12px #ffffff',
        }}
      >
        Open Modal
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        theme="neumorphism"
        size="md"
        closeOnOverlayClick
        closeOnEsc
        centered
      >
        <div
          className="bg-[#e0e5ec] rounded-3xl p-8"
          style={{
            boxShadow: '20px 20px 60px #b8bec7, -20px -20px 60px #ffffff',
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-gray-500 hover:text-gray-700 rounded-full transition-all"
            style={{
              boxShadow: '4px 4px 8px #b8bec7, -4px -4px 8px #ffffff',
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ModalContent theme="neumorphism">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{
                boxShadow: 'inset 6px 6px 12px #b8bec7, inset -6px -6px 12px #ffffff',
              }}
            >
              <svg
                className="w-8 h-8 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <h2 className="text-xl font-semibold text-gray-700 mb-3">Delete Account?</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              This action is permanent and will delete all your data. Are you sure you want to
              continue?
            </p>
          </ModalContent>

          <ModalFooter theme="neumorphism">
            <div className="flex gap-4 w-full -mx-6 -mb-8 px-6 pb-8">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 text-sm font-medium text-gray-600 rounded-xl transition-all"
                style={{
                  boxShadow: '6px 6px 12px #b8bec7, -6px -6px 12px #ffffff',
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 text-sm font-medium text-white bg-red-400 rounded-xl transition-all hover:bg-red-500"
                style={{
                  boxShadow: '6px 6px 12px #b8bec7, -6px -6px 12px #ffffff',
                }}
              >
                Delete
              </button>
            </div>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
}
