export default function GlassmorphismProgress() {
  return (
    <div
      className="min-h-screen p-8 md:p-12"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
      }}
    >
      <div className="max-w-xl mx-auto space-y-10">
        {/* Basic Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-white/80 uppercase tracking-widest">Basic Progress</h3>
          <div className="space-y-4">
            <div className="h-2 backdrop-blur-xl bg-white/10 rounded-full overflow-hidden border border-white/20">
              <div className="h-full w-1/4 bg-white/40 rounded-full" />
            </div>
            <div className="h-2 backdrop-blur-xl bg-white/10 rounded-full overflow-hidden border border-white/20">
              <div className="h-full w-1/2 bg-white/40 rounded-full" />
            </div>
            <div className="h-2 backdrop-blur-xl bg-white/10 rounded-full overflow-hidden border border-white/20">
              <div className="h-full w-3/4 bg-white/40 rounded-full" />
            </div>
          </div>
        </div>

        {/* With Label */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-white/80 uppercase tracking-widest">With Label</h3>
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-white/90">Uploading files...</span>
              <span className="text-white/70">65%</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[65%] bg-gradient-to-r from-white/60 to-white/30 rounded-full" />
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-white/80 uppercase tracking-widest">Status Colors</h3>
          <div className="space-y-4">
            <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/20">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-emerald-200">Success</span>
                <span className="text-emerald-200/70">100%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-emerald-400/80 to-emerald-300/60 rounded-full" />
              </div>
            </div>
            <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/20">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-amber-200">Warning</span>
                <span className="text-amber-200/70">70%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[70%] bg-gradient-to-r from-amber-400/80 to-amber-300/60 rounded-full" />
              </div>
            </div>
            <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/20">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-rose-200">Error</span>
                <span className="text-rose-200/70">35%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[35%] bg-gradient-to-r from-rose-400/80 to-rose-300/60 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-white/80 uppercase tracking-widest">Circular</h3>
          <div className="flex items-center justify-around">
            <div className="relative w-24 h-24 backdrop-blur-xl bg-white/10 rounded-full border border-white/20 p-2">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="6"
                  strokeDasharray="213.63"
                  strokeDashoffset="160.22"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-medium text-white">25%</span>
            </div>
            <div className="relative w-24 h-24 backdrop-blur-xl bg-white/10 rounded-full border border-white/20 p-2">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="6"
                  strokeDasharray="213.63"
                  strokeDashoffset="53.41"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(167,139,250,0.9)" />
                    <stop offset="100%" stopColor="rgba(236,72,153,0.9)" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-medium text-white">75%</span>
            </div>
          </div>
        </div>

        {/* Striped Animated */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-white/80 uppercase tracking-widest">Striped Animated</h3>
          <div className="h-4 backdrop-blur-xl bg-white/10 rounded-full overflow-hidden border border-white/20">
            <div
              className="h-full w-[60%] rounded-full animate-[stripes_1s_linear_infinite]"
              style={{
                backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.3) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.3) 75%, transparent 75%, transparent)',
                backgroundSize: '1rem 1rem',
                backgroundColor: 'rgba(255,255,255,0.4)'
              }}
            />
          </div>
          <style>{`
            @keyframes stripes {
              0% { background-position: 1rem 0; }
              100% { background-position: 0 0; }
            }
          `}</style>
        </div>

        {/* Glow Effect */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-white/80 uppercase tracking-widest">Glow Effect</h3>
          <div className="h-3 backdrop-blur-xl bg-white/10 rounded-full overflow-hidden border border-white/20">
            <div
              className="h-full w-[80%] bg-gradient-to-r from-cyan-400/80 to-blue-400/80 rounded-full"
              style={{ boxShadow: '0 0 20px rgba(103,232,249,0.5), 0 0 40px rgba(103,232,249,0.3)' }}
            />
          </div>
        </div>

        {/* Multi Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-white/80 uppercase tracking-widest">Storage Usage</h3>
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 space-y-4">
            <div className="h-4 bg-white/10 rounded-full overflow-hidden flex">
              <div className="h-full w-[35%] bg-blue-400/60" />
              <div className="h-full w-[25%] bg-purple-400/60" />
              <div className="h-full w-[15%] bg-pink-400/60" />
            </div>
            <div className="flex justify-between text-xs text-white/70">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400/60" />
                Documents 35%
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400/60" />
                Media 25%
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-400/60" />
                Other 15%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
