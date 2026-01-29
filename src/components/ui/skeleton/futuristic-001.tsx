export default function FuturisticSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/30 rounded-lg p-6 shadow-[0_0_30px_rgba(59,130,246,0.3)] backdrop-blur-sm">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gradient-to-r from-blue-400/40 to-indigo-400/40 rounded-sm w-1/4 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
            <div className="h-3 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-sm w-1/6 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.3)]" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-400/30 rounded-lg p-6 shadow-[0_0_30px_rgba(99,102,241,0.3)] backdrop-blur-sm">
          <div className="h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-sm w-3/4 animate-pulse shadow-[0_0_15px_rgba(129,140,248,0.4)]" />
          <div className="h-3 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-sm w-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
          <div className="h-3 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-sm w-5/6 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-400/30 rounded-lg p-6 shadow-[0_0_25px_rgba(59,130,246,0.25)] backdrop-blur-sm space-y-4">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded shadow-[0_0_20px_rgba(99,102,241,0.4)] animate-pulse" />
              <div className="h-4 bg-gradient-to-r from-cyan-400/50 to-blue-400/50 rounded-sm w-3/4 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.3)]" />
              <div className="h-3 bg-gradient-to-r from-blue-400/40 to-indigo-400/40 rounded-sm w-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-lg p-4 shadow-[0_0_20px_rgba(34,211,238,0.2)] backdrop-blur-sm">
              <div className="w-12 h-12 rounded bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(34,211,238,0.4)] animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gradient-to-r from-blue-400/40 to-indigo-400/40 rounded-sm w-1/3 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
                <div className="h-3 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-sm w-2/3 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.3)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
