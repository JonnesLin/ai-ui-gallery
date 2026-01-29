export default function BrutalistSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 border-4 border-black p-6 bg-yellow-300">
          <div className="w-16 h-16 border-4 border-black bg-black animate-pulse" />
          <div className="flex-1 space-y-3">
            <div className="h-6 border-4 border-black bg-black w-1/4 animate-pulse" />
            <div className="h-4 border-4 border-black bg-black w-1/6 animate-pulse" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-4 border-4 border-black p-6 bg-cyan-300">
          <div className="h-10 border-4 border-black bg-black w-3/4 animate-pulse" />
          <div className="h-4 border-4 border-black bg-black w-full animate-pulse" />
          <div className="h-4 border-4 border-black bg-black w-5/6 animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-4 border-black p-6 bg-pink-300 space-y-4">
              <div className="h-48 border-4 border-black bg-black animate-pulse" />
              <div className="h-5 border-4 border-black bg-black w-3/4 animate-pulse" />
              <div className="h-4 border-4 border-black bg-black w-full animate-pulse" />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 border-4 border-black p-4 bg-lime-300">
              <div className="w-14 h-14 border-4 border-black bg-black animate-pulse" />
              <div className="flex-1 space-y-3">
                <div className="h-5 border-4 border-black bg-black w-1/3 animate-pulse" />
                <div className="h-4 border-4 border-black bg-black w-2/3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
