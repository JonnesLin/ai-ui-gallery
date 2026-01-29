export default function MonochromeSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-black">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 border border-white p-6">
          <div className="w-16 h-16 bg-white animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-white w-1/4 animate-pulse" />
            <div className="h-3 bg-gray-400 w-1/6 animate-pulse" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 border border-white p-6">
          <div className="h-8 bg-white w-3/4 animate-pulse" />
          <div className="h-3 bg-gray-300 w-full animate-pulse" />
          <div className="h-3 bg-gray-400 w-5/6 animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-white p-6 space-y-4">
              <div className="h-48 bg-gray-200 animate-pulse" />
              <div className="h-4 bg-white w-3/4 animate-pulse" />
              <div className="h-3 bg-gray-300 w-full animate-pulse" />
              <div className="h-3 bg-gray-400 w-2/3 animate-pulse" />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 border border-white p-4">
              <div className="w-12 h-12 bg-white animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-white w-1/3 animate-pulse" />
                <div className="h-3 bg-gray-400 w-2/3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-white p-6 space-y-2">
              <div className="h-10 bg-white w-1/2 animate-pulse" />
              <div className="h-3 bg-gray-400 w-3/4 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
