import { useState } from 'react';

export default function CyberpunkToast() {
  const [showToasts, setShowToasts] = useState(false);
  return (
    <div className="relative h-[500px] bg-slate-950 rounded-lg overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,255,255,0.03)_50%,transparent_100%)] bg-[length:100%_4px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,128,0.1)_0%,transparent_70%)]" />

      {/* Page content simulation */}
      <div className="relative z-10 p-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 tracking-wider" style={{ textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff' }}>DASHBOARD</h2>
        <p className="text-pink-300/70">Your workspace content goes here...</p>
        <button onClick={() => setShowToasts(true)} className="mt-6 bg-cyan-500/20 border border-cyan-400 text-cyan-400 px-6 py-2 font-mono text-sm uppercase hover:bg-cyan-500/40 transition-colors" style={{ textShadow: '0 0 5px #00ffff' }}>Show Toasts</button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80 z-20">
            {/* Success toast */}
            <div className="bg-slate-900/90 border border-cyan-500/50 rounded px-4 py-3 flex items-start gap-3 shadow-[0_0_20px_rgba(0,255,255,0.3),inset_0_1px_0_rgba(0,255,255,0.2)] animate-[cyberSlide_0.3s_ease-out] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
              <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-400 flex items-center justify-center clip-corner">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-cyan-400 uppercase tracking-wider">SYNC COMPLETE</p>
                <p className="text-xs text-cyan-300/60 mt-0.5 font-mono">Data transferred successfully.</p>
              </div>
              <button className="text-cyan-500/50 hover:text-cyan-400 transition-colors">&times;</button>
            </div>

            {/* Error toast */}
            <div className="bg-slate-900/90 border border-red-500/50 rounded px-4 py-3 flex items-start gap-3 shadow-[0_0_20px_rgba(255,0,0,0.3),inset_0_1px_0_rgba(255,0,0,0.2)] animate-[cyberSlide_0.3s_ease-out] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" />
              <div className="w-8 h-8 bg-red-500/20 border border-red-400 flex items-center justify-center">
                <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-red-400 uppercase tracking-wider">SYSTEM ERROR</p>
                <p className="text-xs text-red-300/60 mt-0.5 font-mono">Neural link disrupted.</p>
              </div>
              <button className="text-red-500/50 hover:text-red-400 transition-colors">&times;</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80 z-20">
            {/* Info toast */}
            <div className="bg-slate-900/90 border border-purple-500/50 rounded px-4 py-3 flex items-start gap-3 shadow-[0_0_20px_rgba(168,85,247,0.3),inset_0_1px_0_rgba(168,85,247,0.2)] animate-[cyberSlide_0.3s_ease-out] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
              <div className="w-8 h-8 bg-purple-500/20 border border-purple-400 flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-purple-400 uppercase tracking-wider">INCOMING DATA</p>
                <p className="text-xs text-purple-300/60 mt-0.5 font-mono">New transmission detected.</p>
              </div>
              <button className="text-purple-500/50 hover:text-purple-400 transition-colors">&times;</button>
            </div>

            {/* Warning toast */}
            <div className="bg-slate-900/90 border border-pink-500/50 rounded px-4 py-3 flex items-start gap-3 shadow-[0_0_20px_rgba(255,0,128,0.3),inset_0_1px_0_rgba(255,0,128,0.2)] animate-[cyberSlide_0.3s_ease-out] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse" />
              <div className="w-8 h-8 bg-pink-500/20 border border-pink-400 flex items-center justify-center">
                <svg className="w-4 h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-pink-400 uppercase tracking-wider">BREACH ALERT</p>
                <p className="text-xs text-pink-300/60 mt-0.5 font-mono">Firewall integrity at 47%.</p>
              </div>
              <button className="text-pink-500/50 hover:text-pink-400 transition-colors">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes cyberSlide {
          from {
            opacity: 0;
            transform: translateX(20px) skewX(-2deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) skewX(0);
          }
        }
        .clip-corner {
          clip-path: polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%);
        }
      `}</style>
    </div>
  );
}
