export default function PastelSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-pink-50">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 bg-lavender-100 rounded-3xl p-6">
          <div className="w-16 h-16 rounded-full bg-purple-200 animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-purple-200 rounded-full w-1/4 animate-pulse" />
            <div className="h-3 bg-pink-200 rounded-full w-1/6 animate-pulse" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 bg-blue-50 rounded-3xl p-6">
          <div className="h-8 bg-blue-200 rounded-full w-3/4 animate-pulse" />
          <div className="h-3 bg-sky-200 rounded-full w-full animate-pulse" />
          <div className="h-3 bg-sky-200 rounded-full w-5/6 animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-yellow-50 rounded-3xl p-6 space-y-4">
              <div className="h-48 bg-amber-200 rounded-2xl animate-pulse" />
              <div className="h-4 bg-orange-200 rounded-full w-3/4 animate-pulse" />
              <div className="h-3 bg-peach-200 rounded-full w-full animate-pulse" />
              <div className="h-3 bg-peach-200 rounded-full w-2/3 animate-pulse" />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 bg-green-50 rounded-2xl p-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-200 animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-teal-200 rounded-full w-1/3 animate-pulse" />
                <div className="h-3 bg-cyan-200 rounded-full w-2/3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
