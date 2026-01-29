import { useState } from 'react';
import { Modal, ModalContent, ModalFooter } from './index';

export default function LuxuryModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-3 text-sm font-light tracking-[0.3em] uppercase text-amber-400 border border-amber-400/30 hover:border-amber-400 hover:bg-amber-400/5 transition-all duration-500"
      >
        Open Modal
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        theme="luxury"
        size="md"
        closeOnOverlayClick
        closeOnEsc
        centered
      >
        <div className="relative">
          <div className="absolute inset-0 border border-amber-400/20" />
          <div className="absolute top-2 left-2 right-2 bottom-2 border border-amber-400/10" />

          <div className="relative bg-gradient-to-b from-stone-900 to-stone-950 p-8 m-1">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-amber-400/50 hover:text-amber-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ModalContent theme="luxury">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                  <svg
                    className="w-full h-full text-amber-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={0.5}
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p className="text-amber-400/60 text-xs tracking-[0.4em] uppercase mb-2">
                  Exclusive Access
                </p>
                <h2 className="text-2xl font-light text-white tracking-wide">Private Collection</h2>
              </div>

              <div className="space-y-6 mb-8">
                <p className="text-stone-400 text-sm text-center leading-relaxed font-light">
                  You have been selected to preview our limited edition collection. Only 100 pieces
                  will be created worldwide.
                </p>

                <div className="border-t border-b border-amber-400/10 py-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs tracking-[0.2em] uppercase text-stone-500">
                      Collection
                    </span>
                    <span className="text-sm text-white font-light">Heritage Series</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs tracking-[0.2em] uppercase text-stone-500">Edition</span>
                    <span className="text-sm text-white font-light">23 of 100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs tracking-[0.2em] uppercase text-stone-500">Release</span>
                    <span className="text-sm text-white font-light">February 2024</span>
                  </div>
                </div>
              </div>
            </ModalContent>

            <ModalFooter theme="luxury">
              <div className="w-full space-y-3 -mx-8 -mb-8 px-8 pb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 text-xs tracking-[0.3em] uppercase text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:via-amber-200 hover:to-amber-300 transition-all duration-500"
                >
                  Reserve Now
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 text-xs tracking-[0.3em] uppercase text-amber-400/70 hover:text-amber-400 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-500"
                >
                  Request Consultation
                </button>
              </div>
            </ModalFooter>
          </div>
        </div>
      </Modal>
    </div>
  );
}
