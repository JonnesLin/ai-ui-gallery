import { useState } from 'react';

export default function MaterialToast() {
  const [showToasts, setShowToasts] = useState(false);

  return (
    <div className="relative h-[500px] bg-gray-100 rounded-lg overflow-hidden">
      {/* Page content simulation */}
      <div className="p-8">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Dashboard</h2>
        <p className="text-gray-600">Your workspace content goes here...</p>
        <button
          onClick={() => setShowToasts(true)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors shadow-md"
        >
          Show Toasts
        </button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-96">
            {/* Success toast (Snackbar style) */}
            <div className="bg-[#323232] rounded px-4 py-3 flex items-center gap-3 shadow-[0_3px_5px_-1px_rgba(0,0,0,0.2),0_6px_10px_0_rgba(0,0,0,0.14),0_1px_18px_0_rgba(0,0,0,0.12)] animate-[materialSlide_0.3s_cubic-bezier(0,0,0.2,1)]">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-white flex-1">Changes saved successfully</p>
              <button className="text-teal-400 text-sm font-medium uppercase tracking-wide hover:bg-white/10 px-2 py-1 rounded transition-colors">
                Undo
              </button>
              <button className="text-gray-400 hover:text-white transition-colors ml-2">&times;</button>
            </div>

            {/* Error toast */}
            <div className="bg-[#323232] rounded px-4 py-3 flex items-center gap-3 shadow-[0_3px_5px_-1px_rgba(0,0,0,0.2),0_6px_10px_0_rgba(0,0,0,0.14),0_1px_18px_0_rgba(0,0,0,0.12)] animate-[materialSlide_0.3s_cubic-bezier(0,0,0.2,1)]">
              <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-white flex-1">Failed to delete item</p>
              <button className="text-teal-400 text-sm font-medium uppercase tracking-wide hover:bg-white/10 px-2 py-1 rounded transition-colors">
                Retry
              </button>
              <button className="text-gray-400 hover:text-white transition-colors ml-2">&times;</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-96">
            {/* Info toast */}
            <div className="bg-[#323232] rounded px-4 py-3 flex items-center gap-3 shadow-[0_3px_5px_-1px_rgba(0,0,0,0.2),0_6px_10px_0_rgba(0,0,0,0.14),0_1px_18px_0_rgba(0,0,0,0.12)] animate-[materialSlide_0.3s_cubic-bezier(0,0,0.2,1)]">
              <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-white flex-1">3 new notifications</p>
              <button className="text-teal-400 text-sm font-medium uppercase tracking-wide hover:bg-white/10 px-2 py-1 rounded transition-colors">
                View
              </button>
              <button className="text-gray-400 hover:text-white transition-colors ml-2">&times;</button>
            </div>

            {/* Warning toast */}
            <div className="bg-[#323232] rounded px-4 py-3 flex items-center gap-3 shadow-[0_3px_5px_-1px_rgba(0,0,0,0.2),0_6px_10px_0_rgba(0,0,0,0.14),0_1px_18px_0_rgba(0,0,0,0.12)] animate-[materialSlide_0.3s_cubic-bezier(0,0,0.2,1)]">
              <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-sm text-white flex-1">Your session expires in 5 minutes</p>
              <button className="text-teal-400 text-sm font-medium uppercase tracking-wide hover:bg-white/10 px-2 py-1 rounded transition-colors">
                Extend
              </button>
              <button className="text-gray-400 hover:text-white transition-colors ml-2">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes materialSlide {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
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
