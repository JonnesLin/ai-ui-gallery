import { useState } from 'react';

export default function FlatToast() {
  const [showToasts, setShowToasts] = useState(false);

  return (
    <div className="relative h-[500px] bg-gray-50 rounded-lg overflow-hidden">
      {/* Page content simulation */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h2>
        <p className="text-gray-500">Your workspace content goes here...</p>
        <button
          onClick={() => setShowToasts(true)}
          className="mt-4 px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-900 transition-colors"
        >
          Show Toasts
        </button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80">
            {/* Success toast */}
            <div className="bg-emerald-500 rounded-lg px-4 py-3 flex items-start gap-3 animate-[flatSlide_0.25s_ease-out]">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Success</p>
                <p className="text-xs text-emerald-100 mt-0.5">Task completed successfully.</p>
              </div>
              <button className="text-emerald-200 hover:text-white transition-colors">&times;</button>
            </div>

            {/* Error toast */}
            <div className="bg-red-500 rounded-lg px-4 py-3 flex items-start gap-3 animate-[flatSlide_0.25s_ease-out]">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Error</p>
                <p className="text-xs text-red-100 mt-0.5">An error has occurred.</p>
              </div>
              <button className="text-red-200 hover:text-white transition-colors">&times;</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80">
            {/* Info toast */}
            <div className="bg-blue-500 rounded-lg px-4 py-3 flex items-start gap-3 animate-[flatSlide_0.25s_ease-out]">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Information</p>
                <p className="text-xs text-blue-100 mt-0.5">Update available.</p>
              </div>
              <button className="text-blue-200 hover:text-white transition-colors">&times;</button>
            </div>

            {/* Warning toast */}
            <div className="bg-amber-500 rounded-lg px-4 py-3 flex items-start gap-3 animate-[flatSlide_0.25s_ease-out]">
              <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Warning</p>
                <p className="text-xs text-amber-100 mt-0.5">Check your settings.</p>
              </div>
              <button className="text-amber-200 hover:text-white transition-colors">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes flatSlide {
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
