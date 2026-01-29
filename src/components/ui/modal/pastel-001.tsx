import { useState } from 'react';
import { Modal, ModalContent, ModalFooter } from './index';

export default function PastelModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-sm font-medium text-purple-600 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
      >
        Open Modal
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        theme="pastel"
        size="md"
        closeOnOverlayClick
        closeOnEsc
        centered
      >
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300" />

          <ModalContent theme="pastel">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-purple-300 hover:text-purple-500 hover:bg-purple-50 rounded-full transition-all"
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

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
                <span className="text-4xl">🎉</span>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">Welcome aboard!</h2>
            <p className="text-center text-gray-500 text-sm mb-6">
              Your account has been created successfully. Ready to start your journey?
            </p>

            <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Complete your profile</p>
                  <p className="text-xs text-gray-500">Add a photo and bio</p>
                </div>
                <svg
                  className="w-5 h-5 text-purple-300 ml-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </ModalContent>

          <ModalFooter theme="pastel">
            <div className="w-full flex gap-3 -mx-6 -mb-6 px-6 pb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 text-sm font-medium text-gray-500 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
              >
                Skip for now
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 text-sm font-medium text-white bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-xl hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 shadow-md shadow-purple-200 transition-all"
              >
                Let's go!
              </button>
            </div>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
}
