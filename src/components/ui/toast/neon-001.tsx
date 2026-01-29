import { useState } from 'react';

export default function NeonToast() {
  const [showToasts, setShowToasts] = useState(false);

  return (
    <div className="relative h-[500px] bg-black rounded-lg overflow-hidden">
      {/* Neon glow background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full filter blur-[120px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-[120px] opacity-20" />
      </div>

      {/* Page content simulation */}
      <div className="relative z-10 p-8">
        <h2 className="text-2xl font-bold text-white mb-4" style={{ textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff' }}>Dashboard</h2>
        <p className="text-gray-400">Your workspace content goes here...</p>
        <button
          onClick={() => setShowToasts(true)}
          className="mt-4 px-4 py-2 border-2 border-pink-500 text-pink-500 font-bold rounded-lg hover:bg-pink-500/10 transition-colors"
          style={{ textShadow: '0 0 10px #ec4899', boxShadow: '0 0 10px rgba(236, 72, 153, 0.5)' }}
        >
          Show Toasts
        </button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80 z-20">
            {/* Success toast */}
            <div className="bg-black/80 border border-green-400 rounded-lg px-4 py-3 flex items-start gap-3 animate-[neonSlide_0.3s_ease-out]" style={{ boxShadow: '0 0 10px #22c55e, 0 0 20px #22c55e, inset 0 0 10px rgba(34, 197, 94, 0.1)' }}>
              <div className="w-8 h-8 rounded-full border-2 border-green-400 flex items-center justify-center" style={{ boxShadow: '0 0 10px #22c55e, inset 0 0 10px rgba(34, 197, 94, 0.3)' }}>
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ filter: 'drop-shadow(0 0 3px #22c55e)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-green-400" style={{ textShadow: '0 0 10px #22c55e' }}>SUCCESS</p>
                <p className="text-xs text-green-300/70 mt-0.5">System online.</p>
              </div>
              <button className="text-green-400/50 hover:text-green-400 transition-colors" style={{ textShadow: '0 0 5px #22c55e' }}>&times;</button>
            </div>

            {/* Error toast */}
            <div className="bg-black/80 border border-red-400 rounded-lg px-4 py-3 flex items-start gap-3 animate-[neonSlide_0.3s_ease-out]" style={{ boxShadow: '0 0 10px #f87171, 0 0 20px #f87171, inset 0 0 10px rgba(248, 113, 113, 0.1)' }}>
              <div className="w-8 h-8 rounded-full border-2 border-red-400 flex items-center justify-center animate-pulse" style={{ boxShadow: '0 0 10px #f87171, inset 0 0 10px rgba(248, 113, 113, 0.3)' }}>
                <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ filter: 'drop-shadow(0 0 3px #f87171)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-red-400" style={{ textShadow: '0 0 10px #f87171' }}>ERROR</p>
                <p className="text-xs text-red-300/70 mt-0.5">Connection lost.</p>
              </div>
              <button className="text-red-400/50 hover:text-red-400 transition-colors" style={{ textShadow: '0 0 5px #f87171' }}>&times;</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80 z-20">
            {/* Info toast */}
            <div className="bg-black/80 border border-cyan-400 rounded-lg px-4 py-3 flex items-start gap-3 animate-[neonSlide_0.3s_ease-out]" style={{ boxShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee, inset 0 0 10px rgba(34, 211, 238, 0.1)' }}>
              <div className="w-8 h-8 rounded-full border-2 border-cyan-400 flex items-center justify-center" style={{ boxShadow: '0 0 10px #22d3ee, inset 0 0 10px rgba(34, 211, 238, 0.3)' }}>
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ filter: 'drop-shadow(0 0 3px #22d3ee)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-cyan-400" style={{ textShadow: '0 0 10px #22d3ee' }}>INFO</p>
                <p className="text-xs text-cyan-300/70 mt-0.5">New data incoming.</p>
              </div>
              <button className="text-cyan-400/50 hover:text-cyan-400 transition-colors" style={{ textShadow: '0 0 5px #22d3ee' }}>&times;</button>
            </div>

            {/* Warning toast */}
            <div className="bg-black/80 border border-pink-400 rounded-lg px-4 py-3 flex items-start gap-3 animate-[neonSlide_0.3s_ease-out]" style={{ boxShadow: '0 0 10px #f472b6, 0 0 20px #f472b6, inset 0 0 10px rgba(244, 114, 182, 0.1)' }}>
              <div className="w-8 h-8 rounded-full border-2 border-pink-400 flex items-center justify-center" style={{ boxShadow: '0 0 10px #f472b6, inset 0 0 10px rgba(244, 114, 182, 0.3)' }}>
                <svg className="w-4 h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ filter: 'drop-shadow(0 0 3px #f472b6)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-pink-400" style={{ textShadow: '0 0 10px #f472b6' }}>WARNING</p>
                <p className="text-xs text-pink-300/70 mt-0.5">Power fluctuation.</p>
              </div>
              <button className="text-pink-400/50 hover:text-pink-400 transition-colors" style={{ textShadow: '0 0 5px #f472b6' }}>&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes neonSlide {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
