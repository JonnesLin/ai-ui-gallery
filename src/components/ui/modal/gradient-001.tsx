import { useState } from 'react';
import { Modal, ModalContent, ModalFooter } from './index';

export default function GradientModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 transition-all shadow-lg shadow-violet-500/25"
      >
        Open Modal
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        theme="gradient"
        size="md"
        closeOnOverlayClick
        closeOnEsc
        centered
      >
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 opacity-90" />

          <div className="relative bg-white/95 m-[2px] rounded-2xl">
            <div className="p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
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

              <ModalContent theme="gradient">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-5 shadow-lg shadow-violet-500/30">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-2">You earned a reward!</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Congratulations! You have unlocked an exclusive 25% discount on your next purchase.
                </p>

                <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-xl p-4 mb-6 border border-violet-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Promo Code</span>
                    <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                      REWARD25
                    </span>
                  </div>
                </div>
              </ModalContent>
            </div>

            <ModalFooter theme="gradient">
              <div className="w-full px-6 py-4 bg-gray-50 flex gap-3 -mx-6 -mb-6 rounded-b-2xl">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Maybe Later
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2.5 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 transition-all shadow-lg shadow-violet-500/25"
                >
                  Claim Now
                </button>
              </div>
            </ModalFooter>
          </div>
        </div>
      </Modal>
    </div>
  );
}
