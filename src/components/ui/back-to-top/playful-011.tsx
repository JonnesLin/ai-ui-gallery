export default function PlayfulBackToTop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-cyan-100 relative">
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-6">
          Playful Back to Top
        </h1>
        <div className="rounded-3xl p-6 bg-white shadow-xl border-4 border-dashed border-pink-300">
          <p className="text-purple-600 leading-relaxed mb-4 text-lg">
            Playful designs are fun, bouncy, and full of personality! Bright colors,
            rounded shapes, and delightful interactions make every click enjoyable.
          </p>
          {Array.from({ length: 5 }).map((_, i) => (
            <p key={i} className="text-purple-400 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>

      {/* Variant 1: Bouncy emoji button */}
      <button
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-yellow-400
                   flex items-center justify-center transition-all duration-300
                   hover:scale-125 hover:rotate-12 shadow-lg shadow-yellow-400/50
                   active:scale-95 border-4 border-yellow-500"
        aria-label="Back to top"
      >
        <span className="text-2xl">🚀</span>
      </button>

      {/* Variant 2: Rainbow pill */}
      <button
        className="fixed bottom-6 right-28 px-5 py-3 rounded-full
                   bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400
                   flex items-center gap-2 transition-all duration-300
                   hover:scale-110 shadow-lg animate-pulse"
        aria-label="Back to top"
      >
        <span className="text-white font-bold text-lg">↑</span>
        <span className="text-white font-bold">Wheee!</span>
      </button>

      {/* Variant 3: Wobble square */}
      <button
        className="fixed bottom-24 right-6 w-14 h-14 rounded-2xl bg-pink-500
                   flex items-center justify-center transition-all duration-300
                   hover:scale-110 hover:-rotate-6 shadow-lg shadow-pink-500/50
                   border-4 border-pink-300"
        aria-label="Back to top"
      >
        <span className="text-white text-2xl font-black">⬆</span>
      </button>

      {/* Variant 4: Bubble with face */}
      <button
        className="fixed bottom-6 left-6 w-16 h-16 rounded-full bg-cyan-400
                   flex flex-col items-center justify-center transition-all duration-300
                   hover:scale-110 hover:bg-cyan-300 shadow-lg shadow-cyan-400/50
                   border-4 border-cyan-300"
        aria-label="Back to top"
      >
        <span className="text-xl">👆</span>
        <span className="text-[10px] text-cyan-800 font-bold">UP!</span>
      </button>

      {/* Variant 5: Sticker style */}
      <button
        className="fixed bottom-24 left-6 px-4 py-3 rounded-xl bg-white
                   border-4 border-purple-400 flex items-center gap-2
                   transition-all duration-300 hover:scale-105 hover:rotate-3
                   shadow-[4px_4px_0_0_#c084fc] hover:shadow-[6px_6px_0_0_#c084fc]"
        aria-label="Back to top"
      >
        <span className="text-xl">✨</span>
        <span className="text-purple-600 font-black">TOP</span>
        <span className="text-xl">✨</span>
      </button>
    </div>
  );
}
