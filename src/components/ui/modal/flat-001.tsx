import { useState } from 'react';
import { Modal, ModalHeader, ModalContent } from './index';

export default function FlatModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-sm font-semibold text-blue-500 bg-white rounded-sm hover:bg-blue-50 transition-colors"
      >
        Open Modal
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        theme="flat"
        size="md"
        closeOnOverlayClick
        closeOnEsc
        centered
      >
        <div className="bg-white">
          <div className="bg-teal-500 px-6 py-4">
            <ModalHeader theme="flat">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">Subscribe to Updates</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-white hover:bg-teal-600 transition-colors"
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
              </div>
            </ModalHeader>
          </div>

          <ModalContent theme="flat">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-amber-400 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-800 font-medium">Stay in the loop!</p>
                <p className="text-sm text-gray-500">Get weekly updates about our latest features.</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-gray-200 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-gray-200 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {['News', 'Products', 'Tips', 'Events'].map((tag) => (
                <label
                  key={tag}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  <input type="checkbox" className="w-4 h-4 accent-teal-500" />
                  <span className="text-sm text-gray-700">{tag}</span>
                </label>
              ))}
            </div>
          </ModalContent>

          <div className="flex">
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 py-4 text-sm font-semibold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              No Thanks
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 py-4 text-sm font-semibold text-white bg-teal-500 hover:bg-teal-600 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
