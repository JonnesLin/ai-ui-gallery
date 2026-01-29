import { useState } from 'react';

export default function MonochromeToast() {
  const [showToasts, setShowToasts] = useState(false);

  return (
    <div className="relative h-[500px] bg-gray-100 rounded-lg overflow-hidden">
      {/* Page content simulation */}
      <div className="p-8">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Dashboard</h2>
        <p className="text-gray-500">Your workspace content goes here...</p>
        <button
          onClick={() => setShowToasts(true)}
          className="mt-4 px-4 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
        >
          Show Toasts
        </button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80">
            {/* Success toast */}
            <div className="bg-gray-900 rounded-lg px-4 py-3 flex items-start gap-3 shadow-xl animate-[monoSlide_0.3s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-100">Success</p>
                <p className="text-xs text-gray-400 mt-0.5">Action completed.</p>
              </div>
              <button className="text-gray-600 hover:text-gray-400 transition-colors">&times;</button>
            </div>

            {/* Error toast */}
            <div className="bg-white rounded-lg px-4 py-3 flex items-start gap-3 shadow-xl border border-gray-200 animate-[monoSlide_0.3s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Error</p>
                <p className="text-xs text-gray-500 mt-0.5">Action failed.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">&times;</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80">
            {/* Info toast */}
            <div className="bg-gray-800 rounded-lg px-4 py-3 flex items-start gap-3 shadow-xl animate-[monoSlide_0.3s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-100">Information</p>
                <p className="text-xs text-gray-400 mt-0.5">Something to note.</p>
              </div>
              <button className="text-gray-500 hover:text-gray-300 transition-colors">&times;</button>
            </div>

            {/* Warning toast */}
            <div className="bg-gray-200 rounded-lg px-4 py-3 flex items-start gap-3 shadow-xl border border-gray-300 animate-[monoSlide_0.3s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-gray-300 border border-gray-400 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Warning</p>
                <p className="text-xs text-gray-600 mt-0.5">Needs attention.</p>
              </div>
              <button className="text-gray-500 hover:text-gray-700 transition-colors">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes monoSlide {
          from {
            opacity: 0;
            transform: translateX(20px);
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
