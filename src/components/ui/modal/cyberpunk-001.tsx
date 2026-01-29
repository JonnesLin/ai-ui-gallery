import { useState } from 'react';
import { Modal, ModalContent, ModalFooter } from './index';

export default function CyberpunkModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="relative px-6 py-3 text-sm font-bold uppercase tracking-widest text-cyan-400 bg-transparent border border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
        style={{
          clipPath:
            'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
        }}
      >
        <span className="relative z-10">Open Modal</span>
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        theme="cyberpunk"
        size="md"
        closeOnOverlayClick
        closeOnEsc
        centered
      >
        <div className="relative">
          <div
            className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 opacity-75 blur-sm animate-pulse"
            style={{
              clipPath:
                'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
            }}
          />

          <div
            className="relative bg-slate-950 border border-cyan-500/30"
            style={{
              clipPath:
                'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
            }}
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />

            <ModalContent theme="cyberpunk">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 animate-pulse" />
                  <h2 className="font-mono font-bold text-cyan-400 uppercase tracking-wider text-sm">
                    Neural Link Active
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 border border-fuchsia-500/50 text-fuchsia-400 flex items-center justify-center hover:bg-fuchsia-500/20 hover:border-fuchsia-400 transition-all"
                  style={{
                    clipPath:
                      'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)',
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-6 p-4 bg-slate-900/50 border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-cyan-400 uppercase tracking-wider">
                      System Override
                    </p>
                    <p className="font-mono text-lg text-white font-bold">ACCESS GRANTED</p>
                  </div>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Connection:</span>
                    <span className="text-green-400">SECURE</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Bandwidth:</span>
                    <span className="text-cyan-400">847.2 TB/s</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Latency:</span>
                    <span className="text-fuchsia-400">0.003ms</span>
                  </div>
                </div>
              </div>

              <p className="font-mono text-sm text-slate-400 mb-6 leading-relaxed">
                Neural interface synchronized. Ready to upload consciousness to the network.
              </p>
            </ModalContent>

            <ModalFooter theme="cyberpunk">
              <div className="w-full flex gap-3 -mx-6 -mb-6 px-6 pb-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 font-mono text-sm font-bold uppercase tracking-wider text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-slate-300 transition-all"
                  style={{
                    clipPath:
                      'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                  }}
                >
                  Abort
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 font-mono text-sm font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/50 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                  style={{
                    clipPath:
                      'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                  }}
                >
                  Execute
                </button>
              </div>
            </ModalFooter>
          </div>
        </div>
      </Modal>
    </div>
  );
}
