export default function FuturisticTextarea() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-blue-400 tracking-wider">
            Futuristic Textarea
          </h2>
          <p className="text-sm text-blue-300/70">Advanced multi-line input</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Basic Textarea */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-blue-400 tracking-wide">Basic</label>
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-blue-100 placeholder:text-blue-600/50 focus:outline-none focus:border-blue-400 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-sm resize-none"
                rows={4}
                placeholder="Enter your text..."
              />
              <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* With Label */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-cyan-400 tracking-wide">Message</label>
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-cyan-100 placeholder:text-cyan-600/50 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] backdrop-blur-sm resize-none"
                rows={4}
                placeholder="Type your message..."
              />
              <div className="absolute -top-1 -right-1 flex gap-1">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse delay-75"></div>
              </div>
            </div>
          </div>

          {/* Small Size */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-purple-400 tracking-wide">Small</label>
            <textarea
              className="w-full px-3 py-2 text-sm bg-slate-900/50 border border-purple-500/30 rounded-md text-purple-100 placeholder:text-purple-600/50 focus:outline-none focus:border-purple-400 focus:shadow-[0_0_10px_rgba(168,85,247,0.3)] backdrop-blur-sm resize-none"
              rows={3}
              placeholder="Small textarea..."
            />
          </div>

          {/* Large Size */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-blue-400 tracking-wide">Large</label>
            <textarea
              className="w-full px-5 py-4 bg-slate-900/50 border border-blue-500/30 rounded-lg text-blue-100 placeholder:text-blue-600/50 focus:outline-none focus:border-blue-400 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-sm resize-none"
              rows={6}
              placeholder="Large textarea..."
            />
          </div>

          {/* With Character Count */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-indigo-400 tracking-wide">With Counter</label>
            <div className="relative">
              <textarea
                className="w-full px-4 py-3 bg-slate-900/50 border border-indigo-500/30 rounded-lg text-indigo-100 placeholder:text-indigo-600/50 focus:outline-none focus:border-indigo-400 focus:shadow-[0_0_15px_rgba(99,102,241,0.3)] backdrop-blur-sm resize-none"
                rows={4}
                placeholder="Max 200 characters..."
                maxLength={200}
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 rounded-md text-xs font-mono backdrop-blur-sm">
                0/200
              </div>
            </div>
          </div>

          {/* Error State */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-red-400 tracking-wide">Error</label>
            <textarea
              className="w-full px-4 py-3 bg-red-950/30 border border-red-500/50 rounded-lg text-red-100 placeholder:text-red-600/50 focus:outline-none focus:border-red-400 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)] backdrop-blur-sm resize-none"
              rows={4}
              placeholder="This field has an error..."
            />
            <p className="text-sm text-red-400 font-mono">ERROR: Field required</p>
          </div>

          {/* Disabled State */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-600 tracking-wide">Disabled</label>
            <textarea
              className="w-full px-4 py-3 bg-slate-900/20 border border-slate-700/30 rounded-lg text-slate-600 placeholder:text-slate-700 cursor-not-allowed backdrop-blur-sm resize-none"
              rows={4}
              placeholder="Disabled textarea..."
              disabled
            />
          </div>

          {/* With Helper Text */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-teal-400 tracking-wide">Comments</label>
            <textarea
              className="w-full px-4 py-3 bg-slate-900/50 border border-teal-500/30 rounded-lg text-teal-100 placeholder:text-teal-600/50 focus:outline-none focus:border-teal-400 focus:shadow-[0_0_15px_rgba(20,184,166,0.3)] backdrop-blur-sm resize-none"
              rows={4}
              placeholder="Add your comments..."
            />
            <p className="text-sm text-teal-300/70 font-mono">Please be respectful</p>
          </div>
        </div>
      </div>
    </div>
  );
}
