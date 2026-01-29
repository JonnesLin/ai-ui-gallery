export default function MaterialSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gray-100">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 bg-white rounded-lg p-6 shadow-md">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 shadow-sm animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse" />
            <div className="h-3 bg-gray-200 rounded w-1/6 animate-pulse" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 bg-white rounded-lg p-6 shadow-md">
          <div className="h-8 bg-gray-400 rounded w-3/4 animate-pulse" />
          <div className="h-3 bg-gray-300 rounded w-full animate-pulse" />
          <div className="h-3 bg-gray-300 rounded w-5/6 animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow space-y-4">
              <div className="h-48 bg-gradient-to-br from-purple-300 to-indigo-400 rounded shadow-inner animate-pulse" />
              <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse" />
              <div className="h-3 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Action Bar Skeleton */}
        <div className="bg-white rounded-lg p-4 shadow-md flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse" />
            <div className="h-4 bg-gray-300 rounded w-32 animate-pulse" />
          </div>
          <div className="flex gap-3">
            <div className="w-24 h-10 bg-blue-400 rounded shadow animate-pulse" />
            <div className="w-24 h-10 bg-gray-300 rounded shadow animate-pulse" />
          </div>
        </div>

        {/* List Skeleton */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 rounded bg-gradient-to-br from-teal-400 to-cyan-500 shadow-sm animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse" />
                <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
