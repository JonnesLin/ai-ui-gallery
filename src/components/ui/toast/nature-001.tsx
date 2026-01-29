import { useState } from 'react';

export default function NatureToast() {
  const [showToasts, setShowToasts] = useState(false);
  return (
    <div className="relative h-[500px] bg-gradient-to-b from-emerald-50 to-amber-50 rounded-lg overflow-hidden">
      {/* Leaf pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M40 20c-15 0-25 15-25 30s20 10 25-5c5 15 25 20 25 5s-10-30-25-30z\' fill=\'%2322c55e\' fill-opacity=\'1\'/%3E%3C/svg%3E")', backgroundSize: '80px 80px' }} />

      {/* Page content simulation */}
      <div className="relative z-10 p-8">
        <h2 className="text-2xl font-medium text-emerald-800 mb-4">Dashboard</h2>
        <p className="text-emerald-600/70">Your workspace content goes here...</p>
        <button
          onClick={() => setShowToasts(true)}
          className="mt-6 px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-emerald-200 transition-shadow"
        >
          Show Toasts
        </button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80 z-20">
            {/* Success toast */}
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl px-4 py-3 flex items-start gap-3 shadow-lg shadow-emerald-100 animate-[natureSlide_0.4s_ease-out]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-emerald-800">Planted!</p>
                <p className="text-xs text-emerald-600/70 mt-0.5">Your seed has been sown successfully.</p>
              </div>
              <button className="text-emerald-400 hover:text-emerald-600 transition-colors">&times;</button>
            </div>

            {/* Error toast */}
            <div className="bg-white/80 backdrop-blur-sm border border-red-200 rounded-2xl px-4 py-3 flex items-start gap-3 shadow-lg shadow-red-100 animate-[natureSlide_0.4s_ease-out]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-red-800">Wilted</p>
                <p className="text-xs text-red-600/70 mt-0.5">Something needs attention.</p>
              </div>
              <button className="text-red-400 hover:text-red-600 transition-colors">&times;</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80 z-20">
            {/* Info toast */}
            <div className="bg-white/80 backdrop-blur-sm border border-sky-200 rounded-2xl px-4 py-3 flex items-start gap-3 shadow-lg shadow-sky-100 animate-[natureSlide_0.4s_ease-out]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-sky-800">Fresh breeze</p>
                <p className="text-xs text-sky-600/70 mt-0.5">New updates are in the air.</p>
              </div>
              <button className="text-sky-400 hover:text-sky-600 transition-colors">&times;</button>
            </div>

            {/* Warning toast */}
            <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl px-4 py-3 flex items-start gap-3 shadow-lg shadow-amber-100 animate-[natureSlide_0.4s_ease-out]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-amber-800">Autumn alert</p>
                <p className="text-xs text-amber-600/70 mt-0.5">Resources running low.</p>
              </div>
              <button className="text-amber-400 hover:text-amber-600 transition-colors">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes natureSlide {
          from {
            opacity: 0;
            transform: translateY(-15px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
