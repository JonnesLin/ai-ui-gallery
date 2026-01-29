import { useState } from 'react';

export default function SketchToast() {
  const [showToasts, setShowToasts] = useState(false);
  return (
    <div className="relative h-[500px] bg-amber-50 rounded-lg overflow-hidden" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h100v100H0z\' fill=\'none\'/%3E%3Cpath d=\'M0 50h100M50 0v100\' stroke=\'%23d4a574\' stroke-opacity=\'0.1\' stroke-width=\'0.5\'/%3E%3C/svg%3E")', backgroundSize: '20px 20px' }}>
      {/* Page content simulation */}
      <div className="p-8">
        <h2 className="text-2xl text-gray-700 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Dashboard</h2>
        <p className="text-gray-500" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Your workspace content goes here...</p>
        <button
          onClick={() => setShowToasts(true)}
          className="mt-6 px-6 py-2 bg-white border-2 border-gray-800 text-gray-800 rounded-lg font-bold shadow-[3px_3px_0_0_#374151] hover:shadow-[5px_5px_0_0_#374151] transition-shadow"
          style={{ fontFamily: 'Comic Sans MS, cursive' }}
        >
          Show Toasts
        </button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80">
            {/* Success toast */}
            <div className="bg-white border-2 border-gray-800 rounded-lg px-4 py-3 flex items-start gap-3 shadow-[3px_3px_0_0_#374151] animate-[sketchSlide_0.3s_ease-out] transform rotate-[0.5deg]" style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
              <div className="w-8 h-8 rounded-full border-2 border-green-600 flex items-center justify-center bg-green-50">
                <span className="text-green-600 text-lg" style={{ fontFamily: 'Comic Sans MS, cursive' }}>✓</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Done!</p>
                <p className="text-xs text-gray-600 mt-0.5" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Your doodle was saved.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors" style={{ fontFamily: 'Comic Sans MS, cursive' }}>&times;</button>
            </div>

            {/* Error toast */}
            <div className="bg-white border-2 border-gray-800 rounded-lg px-4 py-3 flex items-start gap-3 shadow-[3px_3px_0_0_#374151] animate-[sketchSlide_0.3s_ease-out] transform -rotate-[0.5deg]" style={{ borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px' }}>
              <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center bg-red-50">
                <span className="text-red-500 text-lg" style={{ fontFamily: 'Comic Sans MS, cursive' }}>✗</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Oops!</p>
                <p className="text-xs text-gray-600 mt-0.5" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Eraser malfunction.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors" style={{ fontFamily: 'Comic Sans MS, cursive' }}>&times;</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80">
            {/* Info toast */}
            <div className="bg-white border-2 border-gray-800 rounded-lg px-4 py-3 flex items-start gap-3 shadow-[3px_3px_0_0_#374151] animate-[sketchSlide_0.3s_ease-out] transform rotate-[0.3deg]" style={{ borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px' }}>
              <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center bg-blue-50">
                <span className="text-blue-500 text-lg" style={{ fontFamily: 'Comic Sans MS, cursive' }}>i</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Note!</p>
                <p className="text-xs text-gray-600 mt-0.5" style={{ fontFamily: 'Comic Sans MS, cursive' }}>New sketch tools added.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors" style={{ fontFamily: 'Comic Sans MS, cursive' }}>&times;</button>
            </div>

            {/* Warning toast */}
            <div className="bg-white border-2 border-gray-800 rounded-lg px-4 py-3 flex items-start gap-3 shadow-[3px_3px_0_0_#374151] animate-[sketchSlide_0.3s_ease-out] transform -rotate-[0.3deg]" style={{ borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px' }}>
              <div className="w-8 h-8 rounded-full border-2 border-amber-500 flex items-center justify-center bg-amber-50">
                <span className="text-amber-500 text-lg" style={{ fontFamily: 'Comic Sans MS, cursive' }}>!</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Careful!</p>
                <p className="text-xs text-gray-600 mt-0.5" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Pencil getting dull.</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors" style={{ fontFamily: 'Comic Sans MS, cursive' }}>&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes sketchSlide {
          from {
            opacity: 0;
            transform: translateY(-10px) rotate(-2deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(0);
          }
        }
      `}</style>
    </div>
  );
}
