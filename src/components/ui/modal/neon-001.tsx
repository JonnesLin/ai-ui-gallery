import { useState } from 'react';
import { Modal, ModalContent, ModalFooter } from './index';

export default function NeonModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-pink-400 bg-transparent border-2 border-pink-500 rounded-lg hover:bg-pink-500/10 transition-all"
        style={{
          textShadow: '0 0 10px #ec4899, 0 0 20px #ec4899',
          boxShadow: '0 0 10px #ec4899, inset 0 0 10px rgba(236, 72, 153, 0.2)',
        }}
      >
        Open Modal
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
        <div
          className="bg-gray-900 rounded-xl overflow-hidden border-2 border-cyan-500"
          style={{
            boxShadow:
              '0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.3), inset 0 0 30px rgba(6, 182, 212, 0.1)',
          }}
        >
          <ModalContent theme="cyberpunk">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-pink-400 hover:text-pink-300 transition-colors"
              style={{ textShadow: '0 0 10px #ec4899' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex justify-center mb-6">
              <div
                className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center border-2 border-purple-500"
                style={{
                  boxShadow:
                    '0 0 20px rgba(168, 85, 247, 0.6), inset 0 0 20px rgba(168, 85, 247, 0.2)',
                }}
              >
                <svg
                  className="w-10 h-10 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ filter: 'drop-shadow(0 0 8px #a855f7)' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>

            <h2
              className="text-2xl font-bold text-center text-cyan-400 mb-2"
              style={{ textShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4' }}
            >
              Power Surge!
            </h2>
            <p className="text-center text-gray-400 text-sm mb-6">
              Your energy levels are at maximum capacity. Ready to unleash?
            </p>

            <div className="bg-gray-800 rounded-lg p-4 mb-6 border border-cyan-500/30">
              <div className="flex justify-between items-center mb-3">
                <span
                  className="text-sm font-bold text-pink-400"
                  style={{ textShadow: '0 0 8px #ec4899' }}
                >
                  Energy Level
                </span>
                <span
                  className="text-sm font-bold text-cyan-400"
                  style={{ textShadow: '0 0 8px #06b6d4' }}
                >
                  98%
                </span>
              </div>
              <div
                className="h-3 bg-gray-700 rounded-full overflow-hidden"
                style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}
              >
                <div
                  className="h-full w-[98%] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full"
                  style={{
                    boxShadow: '0 0 10px rgba(168, 85, 247, 0.8)',
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { value: '847', label: 'Watts', color: 'pink' },
                { value: '12.5', label: 'Volts', color: 'purple' },
                { value: '∞', label: 'Power', color: 'cyan' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-3 text-center border"
                  style={{
                    borderColor:
                      stat.color === 'pink'
                        ? '#ec4899'
                        : stat.color === 'purple'
                        ? '#a855f7'
                        : '#06b6d4',
                    boxShadow: `0 0 10px ${
                      stat.color === 'pink'
                        ? 'rgba(236,72,153,0.3)'
                        : stat.color === 'purple'
                        ? 'rgba(168,85,247,0.3)'
                        : 'rgba(6,182,212,0.3)'
                    }`,
                  }}
                >
                  <p
                    className={`text-xl font-bold ${
                      stat.color === 'pink'
                        ? 'text-pink-400'
                        : stat.color === 'purple'
                        ? 'text-purple-400'
                        : 'text-cyan-400'
                    }`}
                    style={{ textShadow: '0 0 10px currentColor' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </ModalContent>

          <ModalFooter theme="cyberpunk">
            <div className="w-full flex gap-3 -mx-6 -mb-6 px-6 pb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 text-sm font-bold uppercase tracking-wider text-gray-400 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-750 hover:text-gray-300 transition-all"
              >
                Standby
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 text-sm font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border-2 border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-all"
                style={{
                  textShadow: '0 0 10px #06b6d4',
                  boxShadow:
                    '0 0 15px rgba(6, 182, 212, 0.4), inset 0 0 15px rgba(6, 182, 212, 0.1)',
                }}
              >
                Activate
              </button>
            </div>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
}
