export default function LuxurySkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border border-amber-700/30 rounded-lg p-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-yellow-700 shadow-[0_0_20px_rgba(251,191,36,0.3)] animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gradient-to-r from-amber-600/50 to-yellow-600/50 rounded w-1/4 animate-pulse" />
            <div className="h-3 bg-gradient-to-r from-amber-700/40 to-yellow-700/40 rounded w-1/6 animate-pulse" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 bg-gradient-to-r from-amber-950/40 to-yellow-950/40 border border-amber-800/30 rounded-lg p-6 shadow-2xl">
          <div className="h-8 bg-gradient-to-r from-amber-500 to-yellow-500 shadow-[0_0_15px_rgba(251,191,36,0.3)] rounded w-3/4 animate-pulse" />
          <div className="h-3 bg-gradient-to-r from-amber-600/50 to-yellow-600/50 rounded w-full animate-pulse" />
          <div className="h-3 bg-gradient-to-r from-amber-600/50 to-yellow-600/50 rounded w-5/6 animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gradient-to-br from-amber-950/30 to-yellow-950/30 border border-amber-800/30 rounded-lg p-6 shadow-2xl space-y-4">
              <div className="h-48 bg-gradient-to-br from-amber-700 to-yellow-700 shadow-[0_0_20px_rgba(251,191,36,0.2)] rounded animate-pulse" />
              <div className="h-4 bg-gradient-to-r from-amber-600/60 to-yellow-600/60 rounded w-3/4 animate-pulse" />
              <div className="h-3 bg-gradient-to-r from-amber-700/50 to-yellow-700/50 rounded w-full animate-pulse" />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 bg-gradient-to-r from-amber-950/30 to-yellow-950/30 border border-amber-800/30 rounded-lg p-4 shadow-xl">
              <div className="w-12 h-12 rounded bg-gradient-to-br from-amber-600 to-yellow-700 shadow-[0_0_15px_rgba(251,191,36,0.3)] animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gradient-to-r from-amber-600/50 to-yellow-600/50 rounded w-1/3 animate-pulse" />
                <div className="h-3 bg-gradient-to-r from-amber-700/40 to-yellow-700/40 rounded w-2/3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
