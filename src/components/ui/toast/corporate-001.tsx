import { useState } from 'react';

export default function CorporateToast() {
  const [showToasts, setShowToasts] = useState(false);
  return (
    <div className="relative h-[500px] bg-slate-50 rounded-lg overflow-hidden">
      {/* Page content simulation */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Dashboard</h2>
        <p className="text-slate-500">Your workspace content goes here...</p>
        <button onClick={() => setShowToasts(true)} className="mt-6 bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition-colors shadow-sm">Show Toasts</button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-96">
            {/* Success toast */}
            <div className="bg-white border-l-4 border-green-600 rounded-r shadow-md px-4 py-3 flex items-start gap-3 animate-[corpSlide_0.3s_ease-out]">
              <div className="w-10 h-10 rounded bg-green-50 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800">Operation Successful</p>
                <p className="text-sm text-slate-500 mt-0.5">Your request has been processed successfully.</p>
              </div>
              <button className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0">&times;</button>
            </div>

            {/* Error toast */}
            <div className="bg-white border-l-4 border-red-600 rounded-r shadow-md px-4 py-3 flex items-start gap-3 animate-[corpSlide_0.3s_ease-out]">
              <div className="w-10 h-10 rounded bg-red-50 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800">Action Failed</p>
                <p className="text-sm text-slate-500 mt-0.5">Please contact IT support if the issue persists.</p>
              </div>
              <button className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0">&times;</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-96">
            {/* Info toast */}
            <div className="bg-white border-l-4 border-blue-600 rounded-r shadow-md px-4 py-3 flex items-start gap-3 animate-[corpSlide_0.3s_ease-out]">
              <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800">System Notice</p>
                <p className="text-sm text-slate-500 mt-0.5">Scheduled maintenance window: Saturday 2AM-4AM EST.</p>
              </div>
              <button className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0">&times;</button>
            </div>

            {/* Warning toast */}
            <div className="bg-white border-l-4 border-amber-500 rounded-r shadow-md px-4 py-3 flex items-start gap-3 animate-[corpSlide_0.3s_ease-out]">
              <div className="w-10 h-10 rounded bg-amber-50 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800">Compliance Alert</p>
                <p className="text-sm text-slate-500 mt-0.5">Your password will expire in 7 days.</p>
              </div>
              <button className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes corpSlide {
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
