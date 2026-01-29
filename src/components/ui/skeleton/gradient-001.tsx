export default function GradientSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gradient-to-r from-yellow-400 to-pink-400 rounded w-1/4 animate-pulse" />
            <div className="h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded w-1/6 animate-pulse" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <div className="h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg w-3/4 animate-pulse" />
          <div className="h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg w-full animate-pulse" />
          <div className="h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg w-5/6 animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <div className="h-48 bg-gradient-to-br from-rose-400 to-orange-400 rounded-xl animate-pulse" />
              <div className="h-4 bg-gradient-to-r from-violet-400 to-purple-400 rounded-lg w-3/4 animate-pulse" />
              <div className="h-3 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-lg w-full animate-pulse" />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-400 animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-lg w-1/3 animate-pulse" />
                <div className="h-3 bg-gradient-to-r from-lime-400 to-green-400 rounded-lg w-2/3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
