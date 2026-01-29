export default function BrutalistTextarea() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2 border-4 border-black p-4">
          <h2 className="text-2xl font-black text-black uppercase">Brutalist Textarea</h2>
          <p className="text-sm font-bold text-black">RAW & BOLD MULTI-LINE INPUT</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Basic Textarea */}
          <div className="space-y-3">
            <label className="text-sm font-black text-black uppercase">Basic</label>
            <textarea
              className="w-full px-4 py-3 bg-white border-4 border-black font-mono text-black placeholder:text-gray-400 focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] resize-none"
              rows={4}
              placeholder="ENTER YOUR TEXT..."
            />
          </div>

          {/* With Label */}
          <div className="space-y-3">
            <label className="text-sm font-black text-black uppercase">Message</label>
            <textarea
              className="w-full px-4 py-3 bg-yellow-300 border-4 border-black font-mono text-black placeholder:text-gray-700 focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] resize-none"
              rows={4}
              placeholder="TYPE YOUR MESSAGE..."
            />
          </div>

          {/* Small Size */}
          <div className="space-y-3">
            <label className="text-sm font-black text-black uppercase">Small</label>
            <textarea
              className="w-full px-3 py-2 text-sm bg-white border-3 border-black font-mono text-black placeholder:text-gray-400 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] resize-none"
              rows={3}
              placeholder="SMALL TEXTAREA..."
            />
          </div>

          {/* Large Size */}
          <div className="space-y-3">
            <label className="text-sm font-black text-black uppercase">Large</label>
            <textarea
              className="w-full px-5 py-4 bg-cyan-400 border-4 border-black font-mono text-black placeholder:text-gray-700 focus:outline-none focus:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] resize-none"
              rows={6}
              placeholder="LARGE TEXTAREA..."
            />
          </div>

          {/* With Character Count */}
          <div className="space-y-3">
            <label className="text-sm font-black text-black uppercase">With Counter</label>
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 bg-white border-4 border-black font-mono text-black placeholder:text-gray-400 focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] resize-none"
                rows={4}
                placeholder="MAX 200 CHARACTERS..."
                maxLength={200}
              />
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-black text-white font-black text-xs">
                0/200
              </div>
            </div>
          </div>

          {/* Error State */}
          <div className="space-y-3">
            <label className="text-sm font-black text-black uppercase">Error</label>
            <textarea
              className="w-full px-4 py-3 bg-red-500 border-4 border-black font-mono text-white placeholder:text-red-200 focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] resize-none"
              rows={4}
              placeholder="ERROR STATE..."
            />
            <p className="text-sm font-black text-red-600 uppercase">THIS FIELD IS REQUIRED!</p>
          </div>

          {/* Disabled State */}
          <div className="space-y-3">
            <label className="text-sm font-black text-gray-400 uppercase">Disabled</label>
            <textarea
              className="w-full px-4 py-3 bg-gray-200 border-4 border-gray-400 font-mono text-gray-500 placeholder:text-gray-400 cursor-not-allowed resize-none"
              rows={4}
              placeholder="DISABLED..."
              disabled
            />
          </div>

          {/* With Helper Text */}
          <div className="space-y-3">
            <label className="text-sm font-black text-black uppercase">Comments</label>
            <textarea
              className="w-full px-4 py-3 bg-pink-400 border-4 border-black font-mono text-black placeholder:text-gray-700 focus:outline-none focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] resize-none"
              rows={4}
              placeholder="ADD YOUR COMMENTS..."
            />
            <p className="text-sm font-black text-black uppercase">BE RESPECTFUL!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
