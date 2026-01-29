import { useState } from 'react';

export default function PlayfulToast() {
  const [showToasts, setShowToasts] = useState(false);
  return (
    <div className="relative h-[500px] bg-gradient-to-br from-yellow-200 via-pink-200 to-cyan-200 rounded-lg overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-50 animate-bounce" />
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-pink-400 rounded-lg rotate-45 opacity-50 animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-cyan-400 rounded-full opacity-50 animate-ping" />
      </div>

      {/* Page content simulation */}
      <div className="relative z-10 p-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Dashboard</h2>
        <p className="text-purple-500">Your workspace content goes here...</p>
        <button
          onClick={() => setShowToasts(true)}
          className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold hover:shadow-lg hover:shadow-purple-300/50 transition-shadow"
        >
          Show Toasts
        </button>
      </div>

      {showToasts && (
        <>
          {/* Toast container - top right */}
          <div className="absolute top-4 right-4 space-y-3 w-80 z-20">
            {/* Success toast */}
            <div className="bg-white rounded-3xl px-4 py-3 flex items-start gap-3 shadow-xl shadow-green-200/50 animate-[playfulBounce_0.5s_ease-out] border-2 border-green-300">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center transform rotate-3">
                <span className="text-white text-xl">✨</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-green-600">Woohoo!</p>
                <p className="text-xs text-green-500/70 mt-0.5">That worked like magic!</p>
              </div>
              <button className="w-6 h-6 rounded-full bg-green-100 text-green-400 hover:bg-green-200 hover:text-green-600 transition-colors text-sm flex items-center justify-center">&times;</button>
            </div>

            {/* Error toast */}
            <div className="bg-white rounded-3xl px-4 py-3 flex items-start gap-3 shadow-xl shadow-red-200/50 animate-[playfulBounce_0.5s_ease-out] border-2 border-red-300">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center transform -rotate-3">
                <span className="text-white text-xl">💥</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-red-500">Oopsie!</p>
                <p className="text-xs text-red-400/70 mt-0.5">Something went boom!</p>
              </div>
              <button className="w-6 h-6 rounded-full bg-red-100 text-red-400 hover:bg-red-200 hover:text-red-600 transition-colors text-sm flex items-center justify-center">&times;</button>
            </div>
          </div>

          {/* Toast container - bottom right */}
          <div className="absolute bottom-4 right-4 space-y-3 w-80 z-20">
            {/* Info toast */}
            <div className="bg-white rounded-3xl px-4 py-3 flex items-start gap-3 shadow-xl shadow-blue-200/50 animate-[playfulBounce_0.5s_ease-out] border-2 border-blue-300">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center transform rotate-6">
                <span className="text-white text-xl">💡</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-blue-500">Hey there!</p>
                <p className="text-xs text-blue-400/70 mt-0.5">Got something cool for you!</p>
              </div>
              <button className="w-6 h-6 rounded-full bg-blue-100 text-blue-400 hover:bg-blue-200 hover:text-blue-600 transition-colors text-sm flex items-center justify-center">&times;</button>
            </div>

            {/* Warning toast */}
            <div className="bg-white rounded-3xl px-4 py-3 flex items-start gap-3 shadow-xl shadow-orange-200/50 animate-[playfulBounce_0.5s_ease-out] border-2 border-orange-300">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center transform -rotate-6">
                <span className="text-white text-xl">⚡</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-orange-500">Watch out!</p>
                <p className="text-xs text-orange-400/70 mt-0.5">Better take a look at this!</p>
              </div>
              <button className="w-6 h-6 rounded-full bg-orange-100 text-orange-400 hover:bg-orange-200 hover:text-orange-600 transition-colors text-sm flex items-center justify-center">&times;</button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes playfulBounce {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.8) rotate(-5deg);
          }
          50% {
            transform: translateY(5px) scale(1.02) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
