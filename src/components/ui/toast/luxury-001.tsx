import { useState } from 'react';

export default function LuxuryToast() {
  const [showToasts, setShowToasts] = useState(false);
  return (
    <div className="relative h-[500px] bg-neutral-950 rounded-lg overflow-hidden">
      {/* Subtle gold pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0L60 30L30 60L0 30L30 0z\' fill=\'%23D4AF37\' fill-opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '30px 30px' }} />

      {/* Page content simulation */}
      <div className="relative z-10 p-8">
        <h2 className="text-2xl font-light text-amber-200 tracking-[0.2em] uppercase mb-4">Dashboard</h2>
        <p className="text-neutral-500">Your workspace content goes here...</p>
        <button
          onClick={() => setShowToasts(true)}
          className="mt-6 px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-neutral-900 rounded font-light tracking-widest uppercase text-sm hover:shadow-xl hover:shadow-amber-500/50 transition-shadow"
        >
          Show Toasts
        </button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80 z-20">
            {/* Success toast */}
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 border border-amber-500/30 rounded px-4 py-4 flex items-start gap-4 shadow-2xl animate-[luxurySlide_0.5s_ease-out]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <svg className="w-5 h-5 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-amber-200 tracking-wide uppercase">Confirmed</p>
                <p className="text-xs text-neutral-400 mt-1">Your reservation has been secured.</p>
              </div>
              <button className="text-neutral-600 hover:text-amber-400 transition-colors">&times;</button>
            </div>

            {/* Error toast */}
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 border border-rose-500/30 rounded px-4 py-4 flex items-start gap-4 shadow-2xl animate-[luxurySlide_0.5s_ease-out]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-500/20">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-rose-200 tracking-wide uppercase">Declined</p>
                <p className="text-xs text-neutral-400 mt-1">Please verify your credentials.</p>
              </div>
              <button className="text-neutral-600 hover:text-rose-400 transition-colors">&times;</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80 z-20">
            {/* Info toast */}
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 border border-sky-500/30 rounded px-4 py-4 flex items-start gap-4 shadow-2xl animate-[luxurySlide_0.5s_ease-out]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-sky-200 tracking-wide uppercase">Exclusive</p>
                <p className="text-xs text-neutral-400 mt-1">A private event awaits you.</p>
              </div>
              <button className="text-neutral-600 hover:text-sky-400 transition-colors">&times;</button>
            </div>

            {/* Warning toast */}
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 border border-amber-700/30 rounded px-4 py-4 flex items-start gap-4 shadow-2xl animate-[luxurySlide_0.5s_ease-out]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-lg shadow-amber-700/20">
                <svg className="w-5 h-5 text-amber-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-amber-300 tracking-wide uppercase">Limited</p>
                <p className="text-xs text-neutral-400 mt-1">Only 3 seats remaining.</p>
              </div>
              <button className="text-neutral-600 hover:text-amber-500 transition-colors">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes luxurySlide {
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
