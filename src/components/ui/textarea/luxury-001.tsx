export default function LuxuryTextarea() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2 border-b border-amber-500/30 pb-4">
          <h2 className="text-2xl font-serif font-light text-amber-400 tracking-wide">
            Luxury Textarea
          </h2>
          <p className="text-sm text-amber-300/70">Premium multi-line input</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Basic Textarea */}
          <div className="space-y-3">
            <label className="text-sm font-light text-amber-400 tracking-wide">Basic</label>
            <textarea
              className="w-full px-4 py-3 bg-slate-800/50 border border-amber-500/30 rounded-lg text-amber-100 placeholder:text-amber-600/50 focus:outline-none focus:border-amber-400 focus:shadow-[0_0_20px_rgba(251,191,36,0.2)] backdrop-blur-sm resize-none"
              rows={4}
              placeholder="Enter your text..."
            />
          </div>

          {/* With Label */}
          <div className="space-y-3">
            <label className="text-sm font-light text-amber-400 tracking-wide">Message</label>
            <textarea
              className="w-full px-4 py-3 bg-slate-800/50 border border-amber-500/30 rounded-lg text-amber-100 placeholder:text-amber-600/50 focus:outline-none focus:border-amber-400 focus:shadow-[0_0_20px_rgba(251,191,36,0.2)] backdrop-blur-sm resize-none"
              rows={4}
              placeholder="Type your message..."
            />
          </div>

          {/* Small Size */}
          <div className="space-y-3">
            <label className="text-sm font-light text-amber-400 tracking-wide">Small</label>
            <textarea
              className="w-full px-3 py-2 text-sm bg-slate-800/50 border border-amber-500/30 rounded-md text-amber-100 placeholder:text-amber-600/50 focus:outline-none focus:border-amber-400 focus:shadow-[0_0_15px_rgba(251,191,36,0.2)] backdrop-blur-sm resize-none"
              rows={3}
              placeholder="Small textarea..."
            />
          </div>

          {/* Large Size */}
          <div className="space-y-3">
            <label className="text-sm font-light text-amber-400 tracking-wide">Large</label>
            <textarea
              className="w-full px-5 py-4 bg-slate-800/50 border border-amber-500/30 rounded-lg text-amber-100 placeholder:text-amber-600/50 focus:outline-none focus:border-amber-400 focus:shadow-[0_0_25px_rgba(251,191,36,0.2)] backdrop-blur-sm resize-none"
              rows={6}
              placeholder="Large textarea..."
            />
          </div>

          {/* With Character Count */}
          <div className="space-y-3">
            <label className="text-sm font-light text-amber-400 tracking-wide">With Counter</label>
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 bg-slate-800/50 border border-amber-500/30 rounded-lg text-amber-100 placeholder:text-amber-600/50 focus:outline-none focus:border-amber-400 focus:shadow-[0_0_20px_rgba(251,191,36,0.2)] backdrop-blur-sm resize-none"
                rows={4}
                placeholder="Max 200 characters..."
                maxLength={200}
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-md text-xs font-light tracking-wide">
                0/200
              </div>
            </div>
          </div>

          {/* Error State */}
          <div className="space-y-3">
            <label className="text-sm font-light text-amber-400 tracking-wide">Error</label>
            <textarea
              className="w-full px-4 py-3 bg-red-950/30 border border-red-500/50 rounded-lg text-red-100 placeholder:text-red-600/50 focus:outline-none focus:border-red-400 focus:shadow-[0_0_20px_rgba(239,68,68,0.2)] backdrop-blur-sm resize-none"
              rows={4}
              placeholder="This field has an error..."
            />
            <p className="text-sm text-red-400 font-light">This field is required</p>
          </div>

          {/* Disabled State */}
          <div className="space-y-3">
            <label className="text-sm font-light text-amber-600/50 tracking-wide">Disabled</label>
            <textarea
              className="w-full px-4 py-3 bg-slate-800/20 border border-amber-500/10 rounded-lg text-amber-600/40 placeholder:text-amber-600/30 cursor-not-allowed backdrop-blur-sm resize-none"
              rows={4}
              placeholder="Disabled textarea..."
              disabled
            />
          </div>

          {/* With Helper Text */}
          <div className="space-y-3">
            <label className="text-sm font-light text-amber-400 tracking-wide">Comments</label>
            <textarea
              className="w-full px-4 py-3 bg-slate-800/50 border border-amber-500/30 rounded-lg text-amber-100 placeholder:text-amber-600/50 focus:outline-none focus:border-amber-400 focus:shadow-[0_0_20px_rgba(251,191,36,0.2)] backdrop-blur-sm resize-none"
              rows={4}
              placeholder="Add your comments..."
            />
            <p className="text-sm text-amber-300/70 font-light">Please be respectful and constructive</p>
          </div>
        </div>
      </div>
    </div>
  );
}
