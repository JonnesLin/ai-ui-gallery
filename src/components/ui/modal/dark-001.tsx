import { useState } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from './index';

export default function DarkModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-all"
      >
        Open Modal
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        theme="dark"
        size="md"
        closeOnOverlayClick
        closeOnEsc
        centered
      >
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl">
          <div className="p-6 border-b border-gray-800">
            <ModalHeader theme="dark" onClose={() => setIsOpen(false)}>
              <h2 className="text-lg font-semibold text-white">System Update</h2>
            </ModalHeader>
          </div>

          <ModalContent theme="dark">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white mb-1">Version 2.4.1 Available</h3>
                <p className="text-sm text-gray-400">
                  This update includes security patches and performance improvements.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Download Progress</span>
                <span className="text-gray-300">67%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
              </div>
            </div>
          </ModalContent>

          <ModalFooter theme="dark">
            <div className="w-full flex justify-end gap-3 bg-gray-800/30 -mx-6 -my-4 px-6 py-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Later
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
              >
                Install Now
              </button>
            </div>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
}
