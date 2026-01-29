export default function SketchSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 border-2 border-gray-800 rounded-none p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative after:absolute after:inset-0 after:border-2 after:border-gray-800 after:translate-x-1 after:translate-y-1 after:-z-10">
          <div className="w-16 h-16 border-2 border-gray-800 rounded-full bg-gray-100 animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 border-2 border-gray-800 bg-gray-100 w-1/4 animate-pulse" />
            <div className="h-3 border-2 border-gray-800 bg-gray-100 w-1/6 animate-pulse" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 border-2 border-gray-800 rounded-none p-6 bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
          <div className="h-8 border-2 border-gray-800 bg-gray-100 w-3/4 animate-pulse" />
          <div className="h-3 border-2 border-gray-800 bg-gray-100 w-full animate-pulse" />
          <div className="h-3 border-2 border-gray-800 bg-gray-100 w-5/6 animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-2 border-gray-800 rounded-none p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4">
              <div className="h-48 border-2 border-gray-800 bg-gray-100 animate-pulse relative after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.03)_10px,rgba(0,0,0,0.03)_20px)]" />
              <div className="h-4 border-2 border-gray-800 bg-gray-100 w-3/4 animate-pulse" />
              <div className="h-3 border-2 border-gray-800 bg-gray-100 w-full animate-pulse" />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 border-2 border-gray-800 rounded-none p-4 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 border-2 border-gray-800 bg-gray-100 animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 border-2 border-gray-800 bg-gray-100 w-1/3 animate-pulse" />
                <div className="h-3 border-2 border-gray-800 bg-gray-100 w-2/3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
