import { useState } from 'react';

export default function GlassmorphismToast() {
  const [showToasts, setShowToasts] = useState(false);

  return (
    <div className="relative h-[500px] bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-800 rounded-lg overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
      </div>

      {/* Page content simulation */}
      <div className="relative z-10 p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
        <p className="text-white/70">Your workspace content goes here...</p>
        <button onClick={() => setShowToasts(true)} className="mt-4 px-4 py-2 backdrop-blur-xl bg-white/20 border border-white/30 rounded-lg text-white text-sm font-semibold hover:bg-white/30 transition-colors">
          Show Toasts
        </button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80 z-20">
        {/* Success toast */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-3 flex items-start gap-3 shadow-xl animate-[glassSlide_0.4s_ease-out]">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 backdrop-blur flex items-center justify-center">
            <svg className="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">Success!</p>
            <p className="text-xs text-white/60 mt-0.5">Your file has been uploaded.</p>
          </div>
          <button className="text-white/40 hover:text-white/80 transition-colors">&times;</button>
        </div>

        {/* Error toast */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-3 flex items-start gap-3 shadow-xl animate-[glassSlide_0.4s_ease-out]">
          <div className="w-8 h-8 rounded-full bg-red-500/20 backdrop-blur flex items-center justify-center">
            <svg className="w-4 h-4 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">Error</p>
            <p className="text-xs text-white/60 mt-0.5">Something went wrong.</p>
          </div>
          <button className="text-white/40 hover:text-white/80 transition-colors">&times;</button>
        </div>
      </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80 z-20">
            {/* Info toast */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-3 flex items-start gap-3 shadow-xl animate-[glassSlide_0.4s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 backdrop-blur flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">New feature</p>
                <p className="text-xs text-white/60 mt-0.5">Check out the new dashboard.</p>
              </div>
              <button className="text-white/40 hover:text-white/80 transition-colors">&times;</button>
            </div>

            {/* Warning toast */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-3 flex items-start gap-3 shadow-xl animate-[glassSlide_0.4s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 backdrop-blur flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Warning</p>
                <p className="text-xs text-white/60 mt-0.5">Session expires in 5 minutes.</p>
              </div>
              <button className="text-white/40 hover:text-white/80 transition-colors">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes glassSlide {
          from {
            opacity: 0;
            transform: translateX(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
