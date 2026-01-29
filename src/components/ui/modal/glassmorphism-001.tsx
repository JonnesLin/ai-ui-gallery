import { useState } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from './index';

export default function GlassmorphismModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      }}
    >
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-sm font-medium text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white/30 transition-all"
      >
        Open Modal
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        theme="glassmorphism"
        size="md"
        closeOnOverlayClick
        closeOnEsc
        centered
      >
        <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
          <ModalHeader theme="glassmorphism" onClose={() => setIsOpen(false)}>
            <h2 className="text-xl font-semibold text-white">Welcome Back</h2>
          </ModalHeader>

          <ModalContent theme="glassmorphism">
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Your session has expired. Please sign in again to continue accessing your account and all
              its features.
            </p>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              />
            </div>
          </ModalContent>

          <ModalFooter theme="glassmorphism">
            <div className="w-full flex justify-end gap-3 bg-white/5 -mx-6 -my-4 px-6 py-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 text-sm font-medium text-white bg-white/20 border border-white/30 rounded-xl hover:bg-white/30 transition-all"
              >
                Sign In
              </button>
            </div>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
}
