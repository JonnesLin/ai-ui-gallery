import { useState } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from './index';

export default function BrutalistModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-yellow-300 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-sm font-black uppercase tracking-wider text-black bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
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
        <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-black text-white px-6 py-4">
            <ModalHeader theme="flat">
              <div className="flex items-center justify-between">
                <h2 className="font-black text-lg uppercase tracking-wider">Warning!</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-red-500 border-2 border-white flex items-center justify-center font-black hover:bg-red-600 transition-colors"
                >
                  X
                </button>
              </div>
            </ModalHeader>
          </div>

          <ModalContent theme="flat">
            <div className="border-4 border-black bg-yellow-300 p-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-black flex items-center justify-center">
                  <span className="text-2xl font-black text-yellow-300">!</span>
                </div>
                <p className="font-bold text-sm uppercase">This action cannot be undone</p>
              </div>
            </div>

            <p className="font-mono text-sm mb-6 leading-relaxed">
              You are about to delete your entire project. All files, settings, and history will be
              permanently removed from the system.
            </p>

            <div className="bg-gray-100 border-2 border-black p-4 font-mono text-xs">
              <p className="font-bold mb-2">Affected items:</p>
              <ul className="space-y-1">
                <li>- 247 files</li>
                <li>- 12 folders</li>
                <li>- 1,432 commits</li>
              </ul>
            </div>
          </ModalContent>

          <ModalFooter theme="flat">
            <div className="w-full p-6 pt-0 flex gap-4 -mx-6 -mb-6 px-6 pb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 text-sm font-black uppercase tracking-wider text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 text-sm font-black uppercase tracking-wider text-white bg-red-500 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
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
