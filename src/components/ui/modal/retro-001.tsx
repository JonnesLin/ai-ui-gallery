import { useState } from 'react';
import { Modal, ModalContent, ModalFooter } from './index';

export default function RetroModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-teal-900 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 font-mono text-sm font-bold text-amber-900 bg-gradient-to-b from-amber-200 to-amber-400 border-2 border-amber-600 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_0_#92400e,0_6px_10px_rgba(0,0,0,0.3)] hover:translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_0_#92400e,0_4px_8px_rgba(0,0,0,0.3)] active:translate-y-1 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0px_0_#92400e] transition-all"
      >
        Open Modal
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        theme="material"
        size="md"
        closeOnOverlayClick
        closeOnEsc
        centered
      >
        <div className="bg-gradient-to-b from-slate-600 to-slate-700 rounded-lg p-1 shadow-[0_0_0_3px_#0f172a,0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="bg-gradient-to-b from-amber-50 to-amber-100 rounded-md overflow-hidden">
            <div className="bg-gradient-to-b from-teal-600 to-teal-700 px-4 py-3 flex items-center justify-between border-b-2 border-teal-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 border border-red-700" />
                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-600" />
                <div className="w-3 h-3 rounded-full bg-green-500 border border-green-700" />
              </div>
              <h2 className="font-mono font-bold text-sm text-white tracking-wider">
                MESSAGE.EXE
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 bg-gradient-to-b from-red-400 to-red-500 rounded border border-red-700 text-white text-xs font-bold flex items-center justify-center hover:from-red-500 hover:to-red-600 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]"
              >
                X
              </button>
            </div>

            <ModalContent theme="material">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg border-2 border-teal-700 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]">
                  <span className="text-3xl">💾</span>
                </div>
                <div>
                  <h3 className="font-mono font-bold text-teal-800 mb-1">SYSTEM ALERT</h3>
                  <p className="font-mono text-sm text-amber-800">
                    Your file has been saved successfully to the floppy disk.
                  </p>
                </div>
              </div>

              <div className="bg-black/80 rounded p-4 font-mono text-sm text-green-400 mb-6 border-2 border-slate-600">
                <p className="mb-1">&gt; FILE: document.txt</p>
                <p className="mb-1">&gt; SIZE: 24 KB</p>
                <p className="mb-1">&gt; STATUS: SAVED</p>
                <p className="animate-pulse">&gt; _</p>
              </div>
            </ModalContent>

            <ModalFooter theme="material">
              <div className="w-full px-6 py-4 bg-amber-200/50 border-t-2 border-amber-300 flex justify-center -mx-6 -mb-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-2.5 font-mono text-sm font-bold text-amber-900 bg-gradient-to-b from-amber-200 to-amber-400 border-2 border-amber-600 rounded shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_3px_0_#92400e] hover:translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_1px_0_#92400e] active:translate-y-1 active:shadow-none transition-all"
                >
                  OK
                </button>
              </div>
            </ModalFooter>
          </div>
        </div>
      </Modal>
    </div>
  );
}
