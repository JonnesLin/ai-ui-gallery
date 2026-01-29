import { useState } from 'react';

export default function BrutalistToast() {
  const [showToasts, setShowToasts] = useState(false);
  return (
    <div className="relative h-[500px] bg-yellow-300 rounded-lg overflow-hidden">
      {/* Page content simulation */}
      <div className="p-8">
        <h2 className="text-3xl font-black text-black uppercase tracking-tight mb-4">DASHBOARD</h2>
        <p className="text-black font-mono">Your workspace content goes here...</p>
        <button onClick={() => setShowToasts(true)} className="mt-6 bg-black text-yellow-300 px-6 py-3 font-black text-sm uppercase border-4 border-black hover:bg-yellow-300 hover:text-black transition-colors">Show Toasts</button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80">
            {/* Success toast */}
            <div className="bg-black border-4 border-black px-4 py-3 flex items-start gap-3 animate-[brutalistSlide_0.2s_ease-out] transform hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 bg-lime-400 border-2 border-black flex items-center justify-center font-black text-black">
                OK
              </div>
              <div className="flex-1">
                <p className="text-sm font-black text-lime-400 uppercase">SUCCESS</p>
                <p className="text-xs text-white font-mono mt-0.5">OPERATION COMPLETE.</p>
              </div>
              <button className="text-white hover:text-lime-400 transition-colors font-black text-xl">X</button>
            </div>

            {/* Error toast */}
            <div className="bg-red-600 border-4 border-black px-4 py-3 flex items-start gap-3 animate-[brutalistSlide_0.2s_ease-out] transform hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center font-black text-red-600">
                !!
              </div>
              <div className="flex-1">
                <p className="text-sm font-black text-white uppercase">ERROR</p>
                <p className="text-xs text-white/90 font-mono mt-0.5">SOMETHING BROKE.</p>
              </div>
              <button className="text-white hover:text-black transition-colors font-black text-xl">X</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80">
            {/* Info toast */}
            <div className="bg-blue-600 border-4 border-black px-4 py-3 flex items-start gap-3 animate-[brutalistSlide_0.2s_ease-out] transform hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center font-black text-blue-600">
                i
              </div>
              <div className="flex-1">
                <p className="text-sm font-black text-white uppercase">INFO</p>
                <p className="text-xs text-white/90 font-mono mt-0.5">NEW UPDATE READY.</p>
              </div>
              <button className="text-white hover:text-black transition-colors font-black text-xl">X</button>
            </div>

            {/* Warning toast */}
            <div className="bg-white border-4 border-black px-4 py-3 flex items-start gap-3 animate-[brutalistSlide_0.2s_ease-out] transform hover:-translate-y-1 transition-transform shadow-[4px_4px_0_0_#000]">
              <div className="w-8 h-8 bg-yellow-400 border-2 border-black flex items-center justify-center font-black text-black">
                !
              </div>
              <div className="flex-1">
                <p className="text-sm font-black text-black uppercase">WARNING</p>
                <p className="text-xs text-black/80 font-mono mt-0.5">DISK SPACE LOW.</p>
              </div>
              <button className="text-black hover:text-red-600 transition-colors font-black text-xl">X</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes brutalistSlide {
          from {
            opacity: 0;
            transform: translateX(100%);
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
