import { useState } from 'react';

export default function FuturisticToast() {
  const [showToasts, setShowToasts] = useState(false);
  return (
    <div className="relative h-[500px] bg-slate-900 rounded-lg overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />

      {/* Page content simulation */}
      <div className="relative z-10 p-8">
        <h2 className="text-2xl font-light text-blue-300 tracking-widest uppercase mb-4">Interface</h2>
        <p className="text-slate-500">Your workspace content goes here...</p>
        <button
          onClick={() => setShowToasts(true)}
          className="mt-6 px-6 py-2 bg-blue-600 border border-blue-400 text-blue-100 rounded font-light tracking-widest uppercase text-sm hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
        >
          Show Toasts
        </button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80 z-20">
            {/* Success toast */}
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-emerald-500/30 rounded-lg px-4 py-3 flex items-start gap-3 animate-[futureSlide_0.4s_ease-out] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent" />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-emerald-600" />
              <div className="relative w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="relative flex-1">
                <p className="text-xs font-medium text-emerald-400 tracking-widest uppercase">Protocol Complete</p>
                <p className="text-xs text-slate-400 mt-1 font-mono">Sync achieved at 99.9%</p>
              </div>
              <button className="relative text-slate-500 hover:text-emerald-400 transition-colors">&times;</button>
            </div>

            {/* Error toast */}
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-red-500/30 rounded-lg px-4 py-3 flex items-start gap-3 animate-[futureSlide_0.4s_ease-out] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent" />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 to-red-600" />
              <div className="relative w-8 h-8 rounded bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
              </div>
              <div className="relative flex-1">
                <p className="text-xs font-medium text-red-400 tracking-widest uppercase">System Alert</p>
                <p className="text-xs text-slate-400 mt-1 font-mono">Error code: 0x7F2A</p>
              </div>
              <button className="relative text-slate-500 hover:text-red-400 transition-colors">&times;</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80 z-20">
            {/* Info toast */}
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-blue-500/30 rounded-lg px-4 py-3 flex items-start gap-3 animate-[futureSlide_0.4s_ease-out] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent" />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600" />
              <div className="relative w-8 h-8 rounded bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
              </div>
              <div className="relative flex-1">
                <p className="text-xs font-medium text-blue-400 tracking-widest uppercase">Data Stream</p>
                <p className="text-xs text-slate-400 mt-1 font-mono">Incoming transmission</p>
              </div>
              <button className="relative text-slate-500 hover:text-blue-400 transition-colors">&times;</button>
            </div>

            {/* Warning toast */}
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-amber-500/30 rounded-lg px-4 py-3 flex items-start gap-3 animate-[futureSlide_0.4s_ease-out] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent" />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 animate-pulse" />
              <div className="relative w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              </div>
              <div className="relative flex-1">
                <p className="text-xs font-medium text-amber-400 tracking-widest uppercase">Threshold</p>
                <p className="text-xs text-slate-400 mt-1 font-mono">Capacity at 87%</p>
              </div>
              <button className="relative text-slate-500 hover:text-amber-400 transition-colors">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes futureSlide {
          from {
            opacity: 0;
            transform: translateX(20px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
}
