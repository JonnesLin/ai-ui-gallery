export default function CyberpunkTextarea() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2 border-l-4 border-cyan-400 pl-4">
          <h2 className="text-2xl font-black text-cyan-400 uppercase tracking-wider">
            Cyberpunk Textarea
          </h2>
          <p className="text-sm text-purple-400 font-mono">NEON FUTURE MULTI-LINE INPUT</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Basic Textarea */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-cyan-400 uppercase tracking-wide">Basic</label>
            <textarea
              className="w-full px-4 py-3 bg-black border-2 border-cyan-400 rounded-none font-mono text-cyan-300 placeholder:text-cyan-700 focus:outline-none focus:border-cyan-300 focus:shadow-[0_0_15px_rgba(34,211,238,0.5)] resize-none"
              rows={4}
              placeholder="ENTER YOUR TEXT..."
            />
          </div>

          {/* With Label */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-purple-400 uppercase tracking-wide">Message</label>
            <textarea
              className="w-full px-4 py-3 bg-purple-950/30 border-2 border-purple-500 rounded-none font-mono text-purple-300 placeholder:text-purple-700 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.5)] resize-none"
              rows={4}
              placeholder="TYPE YOUR MESSAGE..."
            />
          </div>

          {/* Small Size */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-pink-400 uppercase tracking-wide">Small</label>
            <textarea
              className="w-full px-3 py-2 text-sm bg-black border-2 border-pink-500 rounded-none font-mono text-pink-300 placeholder:text-pink-700 focus:outline-none focus:border-pink-400 focus:shadow-[0_0_10px_rgba(236,72,153,0.5)] resize-none"
              rows={3}
              placeholder="SMALL TEXTAREA..."
            />
          </div>

          {/* Large Size */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-cyan-400 uppercase tracking-wide">Large</label>
            <textarea
              className="w-full px-5 py-4 bg-cyan-950/20 border-2 border-cyan-400 rounded-none font-mono text-cyan-300 placeholder:text-cyan-700 focus:outline-none focus:border-cyan-300 focus:shadow-[0_0_20px_rgba(34,211,238,0.5)] resize-none"
              rows={6}
              placeholder="LARGE TEXTAREA..."
            />
          </div>

          {/* With Character Count */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-yellow-400 uppercase tracking-wide">With Counter</label>
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 bg-black border-2 border-yellow-400 rounded-none font-mono text-yellow-300 placeholder:text-yellow-700 focus:outline-none focus:border-yellow-300 focus:shadow-[0_0_15px_rgba(250,204,21,0.5)] resize-none"
                rows={4}
                placeholder="MAX 200 CHARACTERS..."
                maxLength={200}
              />
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-yellow-400 text-black font-black text-xs uppercase">
                0/200
              </div>
            </div>
          </div>

          {/* Error State */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-red-400 uppercase tracking-wide">Error</label>
            <textarea
              className="w-full px-4 py-3 bg-red-950/30 border-2 border-red-500 rounded-none font-mono text-red-300 placeholder:text-red-700 focus:outline-none focus:border-red-400 focus:shadow-[0_0_15px_rgba(239,68,68,0.5)] resize-none"
              rows={4}
              placeholder="ERROR STATE..."
            />
            <p className="text-sm text-red-400 font-mono uppercase">ERROR: FIELD REQUIRED</p>
          </div>

          {/* Disabled State */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">Disabled</label>
            <textarea
              className="w-full px-4 py-3 bg-gray-950 border-2 border-gray-800 rounded-none font-mono text-gray-600 placeholder:text-gray-800 cursor-not-allowed resize-none"
              rows={4}
              placeholder="DISABLED..."
              disabled
            />
          </div>

          {/* With Helper Text */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-green-400 uppercase tracking-wide">Comments</label>
            <textarea
              className="w-full px-4 py-3 bg-black border-2 border-green-400 rounded-none font-mono text-green-300 placeholder:text-green-700 focus:outline-none focus:border-green-300 focus:shadow-[0_0_15px_rgba(34,197,94,0.5)] resize-none"
              rows={4}
              placeholder="ADD YOUR COMMENTS..."
            />
            <p className="text-sm text-green-400 font-mono uppercase">BE RESPECTFUL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
