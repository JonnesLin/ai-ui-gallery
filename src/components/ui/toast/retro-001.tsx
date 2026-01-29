import { useState } from 'react';

export default function RetroToast() {
  const [showToasts, setShowToasts] = useState(false);
  return (
    <div className="relative h-[500px] bg-amber-50 rounded-lg overflow-hidden" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0V0zm1 1h38v38H1V1z\' fill=\'%23d4a574\' fill-opacity=\'0.1\'/%3E%3C/svg%3E")' }}>
      {/* Page content simulation */}
      <div className="p-8">
        <h2 className="text-2xl font-serif text-amber-900 mb-4">Dashboard</h2>
        <p className="text-amber-700 font-serif">Your workspace content goes here...</p>
        <button onClick={() => setShowToasts(true)} className="mt-6 bg-amber-800 text-amber-50 px-6 py-2 font-serif rounded hover:bg-amber-900 transition-colors shadow-[2px_2px_0_0_#92400e]">Show Toasts</button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80">
            {/* Success toast */}
            <div className="bg-amber-100 border-2 border-amber-800 rounded px-4 py-3 flex items-start gap-3 shadow-[3px_3px_0_0_#92400e] animate-[retroSlide_0.3s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-green-700 border-2 border-amber-900 flex items-center justify-center">
                <span className="text-amber-100 text-lg">✓</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-amber-900 font-serif">Success!</p>
                <p className="text-xs text-amber-700 font-serif mt-0.5">Your document has been saved.</p>
              </div>
              <button className="text-amber-600 hover:text-amber-900 transition-colors font-serif">&times;</button>
            </div>

            {/* Error toast */}
            <div className="bg-red-100 border-2 border-red-800 rounded px-4 py-3 flex items-start gap-3 shadow-[3px_3px_0_0_#991b1b] animate-[retroSlide_0.3s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-red-700 border-2 border-red-900 flex items-center justify-center">
                <span className="text-red-100 text-lg">✗</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-red-900 font-serif">Error!</p>
                <p className="text-xs text-red-700 font-serif mt-0.5">Could not complete the action.</p>
              </div>
              <button className="text-red-600 hover:text-red-900 transition-colors font-serif">&times;</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80">
            {/* Info toast */}
            <div className="bg-blue-100 border-2 border-blue-800 rounded px-4 py-3 flex items-start gap-3 shadow-[3px_3px_0_0_#1e40af] animate-[retroSlide_0.3s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-blue-700 border-2 border-blue-900 flex items-center justify-center">
                <span className="text-blue-100 text-lg font-serif italic">i</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-blue-900 font-serif">Notice</p>
                <p className="text-xs text-blue-700 font-serif mt-0.5">A new bulletin is available.</p>
              </div>
              <button className="text-blue-600 hover:text-blue-900 transition-colors font-serif">&times;</button>
            </div>

            {/* Warning toast */}
            <div className="bg-orange-100 border-2 border-orange-800 rounded px-4 py-3 flex items-start gap-3 shadow-[3px_3px_0_0_#9a3412] animate-[retroSlide_0.3s_ease-out]">
              <div className="w-8 h-8 rounded-full bg-orange-600 border-2 border-orange-900 flex items-center justify-center">
                <span className="text-orange-100 text-lg">!</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-orange-900 font-serif">Caution</p>
                <p className="text-xs text-orange-700 font-serif mt-0.5">Please review before proceeding.</p>
              </div>
              <button className="text-orange-600 hover:text-orange-900 transition-colors font-serif">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes retroSlide {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
