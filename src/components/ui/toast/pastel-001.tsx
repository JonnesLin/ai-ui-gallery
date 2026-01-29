import { useState } from 'react';

export default function PastelToast() {
  const [showToasts, setShowToasts] = useState(false);
  return (
    <div className="relative h-[500px] bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-lg overflow-hidden">
      {/* Page content simulation */}
      <div className="p-8">
        <h2 className="text-2xl font-medium text-purple-400 mb-4">Dashboard</h2>
        <p className="text-purple-300">Your workspace content goes here...</p>
        <button onClick={() => setShowToasts(true)} className="mt-6 bg-purple-200 text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-purple-300 transition-colors shadow-sm">Show Toasts</button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80">
            {/* Success toast */}
            <div className="bg-green-100 border border-green-200 rounded-2xl px-4 py-3 flex items-start gap-3 shadow-sm animate-[pastelSlide_0.4s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-green-600">Yay! Success</p>
                <p className="text-xs text-green-500/70 mt-0.5">Everything went perfectly.</p>
              </div>
              <button className="text-green-400 hover:text-green-600 transition-colors">&times;</button>
            </div>

            {/* Error toast */}
            <div className="bg-red-100 border border-red-200 rounded-2xl px-4 py-3 flex items-start gap-3 shadow-sm animate-[pastelSlide_0.4s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-red-500">Oops!</p>
                <p className="text-xs text-red-400/70 mt-0.5">Something didn&apos;t work out.</p>
              </div>
              <button className="text-red-300 hover:text-red-500 transition-colors">&times;</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80">
            {/* Info toast */}
            <div className="bg-blue-100 border border-blue-200 rounded-2xl px-4 py-3 flex items-start gap-3 shadow-sm animate-[pastelSlide_0.4s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-500">Hey there!</p>
                <p className="text-xs text-blue-400/70 mt-0.5">Here&apos;s something you might like.</p>
              </div>
              <button className="text-blue-300 hover:text-blue-500 transition-colors">&times;</button>
            </div>

            {/* Warning toast */}
            <div className="bg-amber-100 border border-amber-200 rounded-2xl px-4 py-3 flex items-start gap-3 shadow-sm animate-[pastelSlide_0.4s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-amber-600">Heads up!</p>
                <p className="text-xs text-amber-500/70 mt-0.5">You might want to check this.</p>
              </div>
              <button className="text-amber-400 hover:text-amber-600 transition-colors">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes pastelSlide {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
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
