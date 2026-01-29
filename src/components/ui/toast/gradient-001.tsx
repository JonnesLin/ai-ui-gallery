import { useState } from 'react';

export default function GradientToast() {
  const [showToasts, setShowToasts] = useState(false);

  return (
    <div className="relative h-[500px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg overflow-hidden">
      {/* Page content simulation */}
      <div className="p-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">Dashboard</h2>
        <p className="text-slate-500">Your workspace content goes here...</p>
        <button onClick={() => setShowToasts(true)} className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
          Show Toasts
        </button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80">
        {/* Success toast */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl px-4 py-3 flex items-start gap-3 shadow-lg shadow-emerald-500/25 animate-[gradientSlide_0.4s_ease-out]">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">Success!</p>
            <p className="text-xs text-white/80 mt-0.5">Your profile has been updated.</p>
          </div>
          <button className="text-white/60 hover:text-white transition-colors">&times;</button>
        </div>

        {/* Error toast */}
        <div className="bg-gradient-to-r from-red-500 to-rose-500 rounded-xl px-4 py-3 flex items-start gap-3 shadow-lg shadow-red-500/25 animate-[gradientSlide_0.4s_ease-out]">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">Error</p>
            <p className="text-xs text-white/80 mt-0.5">Connection lost. Retrying...</p>
          </div>
          <button className="text-white/60 hover:text-white transition-colors">&times;</button>
        </div>
      </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80">
            {/* Info toast */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl px-4 py-3 flex items-start gap-3 shadow-lg shadow-blue-500/25 animate-[gradientSlide_0.4s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">New Message</p>
                <p className="text-xs text-white/80 mt-0.5">You have 3 unread messages.</p>
              </div>
              <button className="text-white/60 hover:text-white transition-colors">&times;</button>
            </div>

            {/* Warning toast */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl px-4 py-3 flex items-start gap-3 shadow-lg shadow-amber-500/25 animate-[gradientSlide_0.4s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Warning</p>
                <p className="text-xs text-white/80 mt-0.5">Memory usage is high.</p>
              </div>
              <button className="text-white/60 hover:text-white transition-colors">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes gradientSlide {
          from {
            opacity: 0;
            transform: translateX(20px) scale(0.9);
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
