export default function CorporateSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-slate-50">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="w-16 h-16 rounded bg-slate-200 animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-slate-200 rounded w-1/4 animate-pulse" />
            <div className="h-3 bg-slate-100 rounded w-1/6 animate-pulse" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="h-8 bg-slate-300 rounded w-3/4 animate-pulse" />
          <div className="h-3 bg-slate-200 rounded w-full animate-pulse" />
          <div className="h-3 bg-slate-200 rounded w-5/6 animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-4">
              <div className="h-48 bg-slate-200 rounded animate-pulse" />
              <div className="h-4 bg-slate-300 rounded w-3/4 animate-pulse" />
              <div className="h-3 bg-slate-200 rounded w-full animate-pulse" />
              <div className="h-3 bg-slate-200 rounded w-2/3 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Table Skeleton */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-slate-200 p-4 bg-slate-50">
            <div className="h-4 bg-slate-300 rounded w-1/4 animate-pulse" />
          </div>
          <div className="divide-y divide-slate-200">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 p-4">
                <div className="w-10 h-10 rounded bg-slate-200 animate-pulse" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-slate-200 rounded w-1/3 animate-pulse" />
                  <div className="h-3 bg-slate-100 rounded w-2/3 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
