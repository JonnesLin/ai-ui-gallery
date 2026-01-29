export default function CyberpunkSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-black">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 border-2 border-cyan-400 p-6 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
          <div className="w-16 h-16 border-2 border-fuchsia-400 bg-fuchsia-500/20 shadow-[0_0_15px_rgba(232,121,249,0.6)] animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 border border-cyan-400 bg-cyan-500/20 shadow-[0_0_10px_rgba(34,211,238,0.6)] w-1/4 animate-pulse" />
            <div className="h-3 border border-pink-400 bg-pink-500/20 shadow-[0_0_10px_rgba(236,72,153,0.6)] w-1/6 animate-pulse" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 border-2 border-fuchsia-400 p-6 bg-gradient-to-r from-fuchsia-900/50 to-purple-900/50 shadow-[0_0_20px_rgba(232,121,249,0.5)]">
          <div className="h-8 border border-yellow-400 bg-yellow-500/20 shadow-[0_0_15px_rgba(250,204,21,0.6)] w-3/4 animate-pulse" />
          <div className="h-3 border border-cyan-400 bg-cyan-500/20 shadow-[0_0_10px_rgba(34,211,238,0.6)] w-full animate-pulse" />
          <div className="h-3 border border-cyan-400 bg-cyan-500/20 shadow-[0_0_10px_rgba(34,211,238,0.6)] w-5/6 animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-2 border-pink-400 p-6 bg-gradient-to-br from-pink-900/50 to-purple-900/50 shadow-[0_0_20px_rgba(236,72,153,0.5)] space-y-4">
              <div className="h-48 border border-cyan-400 bg-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-pulse" />
              <div className="h-4 border border-fuchsia-400 bg-fuchsia-500/20 shadow-[0_0_10px_rgba(232,121,249,0.6)] w-3/4 animate-pulse" />
              <div className="h-3 border border-pink-400 bg-pink-500/20 shadow-[0_0_10px_rgba(236,72,153,0.6)] w-full animate-pulse" />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 border border-cyan-400 p-4 bg-cyan-900/20 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              <div className="w-12 h-12 border border-fuchsia-400 bg-fuchsia-500/20 shadow-[0_0_10px_rgba(232,121,249,0.6)] animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 border border-yellow-400 bg-yellow-500/20 shadow-[0_0_10px_rgba(250,204,21,0.6)] w-1/3 animate-pulse" />
                <div className="h-3 border border-pink-400 bg-pink-500/20 shadow-[0_0_10px_rgba(236,72,153,0.6)] w-2/3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
