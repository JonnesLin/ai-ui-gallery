import { useState } from 'react';

export default function MinimalistToast() {
  const [showToasts, setShowToasts] = useState(false);

  return (
    <div className="relative h-[500px] bg-white rounded-lg overflow-hidden">
      {/* Page content simulation */}
      <div className="p-8">
        <h2 className="text-2xl font-light text-neutral-900 mb-4">Dashboard</h2>
        <p className="text-neutral-500">Your workspace content goes here...</p>
        <button onClick={() => setShowToasts(true)} className="mt-4 px-4 py-2 border border-neutral-900 rounded text-neutral-900 text-sm font-light hover:bg-neutral-50 transition-colors">
          Show Toasts
        </button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80">
        {/* Success toast */}
        <div className="bg-white border border-neutral-100 shadow-sm rounded px-4 py-3 flex items-start gap-3 animate-[slideIn_0.3s_ease-out]">
          <span className="w-1 h-full min-h-[40px] bg-neutral-900 rounded-full" />
          <div className="flex-1">
            <p className="text-sm font-medium text-neutral-900">Changes saved</p>
            <p className="text-xs text-neutral-500 mt-0.5">Your settings have been updated.</p>
          </div>
          <button className="text-neutral-400 hover:text-neutral-600 transition-colors text-lg leading-none">&times;</button>
        </div>

        {/* Error toast */}
        <div className="bg-white border border-neutral-100 shadow-sm rounded px-4 py-3 flex items-start gap-3 animate-[slideIn_0.3s_ease-out]">
          <span className="w-1 h-full min-h-[40px] bg-red-500 rounded-full" />
          <div className="flex-1">
            <p className="text-sm font-medium text-neutral-900">Upload failed</p>
            <p className="text-xs text-neutral-500 mt-0.5">Please try again later.</p>
          </div>
          <button className="text-neutral-400 hover:text-neutral-600 transition-colors text-lg leading-none">&times;</button>
        </div>
      </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80">
            {/* Info toast */}
            <div className="bg-white border border-neutral-100 shadow-sm rounded px-4 py-3 flex items-start gap-3 animate-[slideIn_0.3s_ease-out]">
              <span className="w-1 h-full min-h-[40px] bg-neutral-400 rounded-full" />
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-900">New update available</p>
                <p className="text-xs text-neutral-500 mt-0.5">Version 2.0 is ready to install.</p>
              </div>
              <button className="text-neutral-400 hover:text-neutral-600 transition-colors text-lg leading-none">&times;</button>
            </div>

            {/* Warning toast */}
            <div className="bg-white border border-neutral-100 shadow-sm rounded px-4 py-3 flex items-start gap-3 animate-[slideIn_0.3s_ease-out]">
              <span className="w-1 h-full min-h-[40px] bg-amber-500 rounded-full" />
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-900">Low storage</p>
                <p className="text-xs text-neutral-500 mt-0.5">Only 2GB remaining.</p>
              </div>
              <button className="text-neutral-400 hover:text-neutral-600 transition-colors text-lg leading-none">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideIn {
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
