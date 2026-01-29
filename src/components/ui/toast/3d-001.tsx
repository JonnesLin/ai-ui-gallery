import { useState } from 'react';

export default function ThreeDToast() {
  const [showToasts, setShowToasts] = useState(false);

  return (
    <div className="relative h-[500px] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Page content simulation */}
      <div className="p-8">
        <h2 className="text-2xl font-bold text-indigo-900 mb-4">Dashboard</h2>
        <p className="text-indigo-600/70">Your workspace content goes here...</p>
        <button
          onClick={() => setShowToasts(true)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
        >
          Show Toasts
        </button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80" style={{ transformStyle: 'preserve-3d' }}>
            {/* Success toast */}
            <div
              className="bg-white rounded-xl px-4 py-3 flex items-start gap-3 animate-[threeDSlide_0.5s_ease-out]"
              style={{
                boxShadow: '0 10px 30px -5px rgba(16, 185, 129, 0.3), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                transform: 'rotateX(5deg) rotateY(-5deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center"
                style={{ transform: 'translateZ(10px)' }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">Success</p>
                <p className="text-xs text-gray-500 mt-0.5">Operation completed.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">&times;</button>
            </div>

            {/* Error toast */}
            <div
              className="bg-white rounded-xl px-4 py-3 flex items-start gap-3 animate-[threeDSlide_0.5s_ease-out]"
              style={{
                boxShadow: '0 10px 30px -5px rgba(239, 68, 68, 0.3), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                transform: 'rotateX(5deg) rotateY(-5deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center"
                style={{ transform: 'translateZ(10px)' }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">Error</p>
                <p className="text-xs text-gray-500 mt-0.5">Something went wrong.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">&times;</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80" style={{ transformStyle: 'preserve-3d' }}>
            {/* Info toast */}
            <div
              className="bg-white rounded-xl px-4 py-3 flex items-start gap-3 animate-[threeDSlide_0.5s_ease-out]"
              style={{
                boxShadow: '0 10px 30px -5px rgba(59, 130, 246, 0.3), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                transform: 'rotateX(-5deg) rotateY(-5deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center"
                style={{ transform: 'translateZ(10px)' }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">Information</p>
                <p className="text-xs text-gray-500 mt-0.5">New features available.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">&times;</button>
            </div>

            {/* Warning toast */}
            <div
              className="bg-white rounded-xl px-4 py-3 flex items-start gap-3 animate-[threeDSlide_0.5s_ease-out]"
              style={{
                boxShadow: '0 10px 30px -5px rgba(245, 158, 11, 0.3), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                transform: 'rotateX(-5deg) rotateY(-5deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center"
                style={{ transform: 'translateZ(10px)' }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">Warning</p>
                <p className="text-xs text-gray-500 mt-0.5">Please review settings.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes threeDSlide {
          from {
            opacity: 0;
            transform: rotateX(20deg) rotateY(-20deg) translateX(50px);
          }
          to {
            opacity: 1;
            transform: rotateX(5deg) rotateY(-5deg) translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
