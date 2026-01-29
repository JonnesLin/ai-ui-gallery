import { useState } from 'react';

export default function NeumorphismToast() {
  const [showToasts, setShowToasts] = useState(false);

  return (
    <div className="relative h-[500px] bg-[#e0e5ec] rounded-lg overflow-hidden">
      {/* Page content simulation */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dashboard</h2>
        <p className="text-gray-500">Your workspace content goes here...</p>
        <button onClick={() => setShowToasts(true)} className="mt-4 px-4 py-2 bg-[#e0e5ec] rounded-full shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] text-gray-700 text-sm font-semibold hover:shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff] transition-all">
          Show Toasts
        </button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80">
        {/* Success toast */}
        <div className="bg-[#e0e5ec] rounded-2xl px-4 py-4 flex items-start gap-3 shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff] animate-[neuSlide_0.4s_ease-out]">
          <div className="w-10 h-10 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-700">Success</p>
            <p className="text-xs text-gray-500 mt-1">Operation completed successfully.</p>
          </div>
          <button className="w-6 h-6 rounded-full bg-[#e0e5ec] shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff] flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors text-sm">
            &times;
          </button>
        </div>

        {/* Error toast */}
        <div className="bg-[#e0e5ec] rounded-2xl px-4 py-4 flex items-start gap-3 shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff] animate-[neuSlide_0.4s_ease-out]">
          <div className="w-10 h-10 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
            <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-700">Error</p>
            <p className="text-xs text-gray-500 mt-1">Failed to save changes.</p>
          </div>
          <button className="w-6 h-6 rounded-full bg-[#e0e5ec] shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff] flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors text-sm">
            &times;
          </button>
        </div>
      </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80">
            {/* Info toast */}
            <div className="bg-[#e0e5ec] rounded-2xl px-4 py-4 flex items-start gap-3 shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff] animate-[neuSlide_0.4s_ease-out]">
              <div className="w-10 h-10 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-700">Information</p>
                <p className="text-xs text-gray-500 mt-1">New features are available.</p>
              </div>
              <button className="w-6 h-6 rounded-full bg-[#e0e5ec] shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff] flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors text-sm">
                &times;
              </button>
            </div>

            {/* Warning toast */}
            <div className="bg-[#e0e5ec] rounded-2xl px-4 py-4 flex items-start gap-3 shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff] animate-[neuSlide_0.4s_ease-out]">
              <div className="w-10 h-10 rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-700">Warning</p>
                <p className="text-xs text-gray-500 mt-1">Storage space is running low.</p>
              </div>
              <button className="w-6 h-6 rounded-full bg-[#e0e5ec] shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff] flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors text-sm">
                &times;
              </button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes neuSlide {
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
