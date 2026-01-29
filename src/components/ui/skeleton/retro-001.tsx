export default function RetroSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-amber-50">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 border-2 border-amber-900 p-6 bg-orange-200 shadow-[4px_4px_0px_0px_rgba(120,53,15,1)]">
          <div className="w-16 h-16 rounded-full border-2 border-amber-900 bg-amber-400 animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 border-2 border-amber-900 bg-amber-400 rounded w-1/4 animate-pulse" />
            <div className="h-3 border-2 border-amber-900 bg-amber-300 rounded w-1/6 animate-pulse" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 border-2 border-amber-900 p-6 bg-yellow-200 shadow-[4px_4px_0px_0px_rgba(120,53,15,1)]">
          <div className="h-8 border-2 border-amber-900 bg-yellow-400 rounded w-3/4 animate-pulse" />
          <div className="h-3 border-2 border-amber-900 bg-yellow-300 rounded w-full animate-pulse" />
          <div className="h-3 border-2 border-amber-900 bg-yellow-300 rounded w-5/6 animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-2 border-amber-900 p-5 bg-rose-200 shadow-[4px_4px_0px_0px_rgba(120,53,15,1)] space-y-3">
              <div className="h-48 border-2 border-amber-900 bg-rose-300 rounded animate-pulse" />
              <div className="h-4 border-2 border-amber-900 bg-rose-400 rounded w-3/4 animate-pulse" />
              <div className="h-3 border-2 border-amber-900 bg-rose-300 rounded w-full animate-pulse" />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 border-2 border-amber-900 p-4 bg-teal-200 shadow-[3px_3px_0px_0px_rgba(120,53,15,1)]">
              <div className="w-12 h-12 border-2 border-amber-900 bg-teal-400 rounded animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 border-2 border-amber-900 bg-teal-400 rounded w-1/3 animate-pulse" />
                <div className="h-3 border-2 border-amber-900 bg-teal-300 rounded w-2/3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
