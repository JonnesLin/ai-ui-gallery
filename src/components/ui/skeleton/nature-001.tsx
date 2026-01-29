export default function NatureSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-green-200 rounded-2xl p-6 shadow-lg">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-300 to-emerald-400 animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gradient-to-r from-green-200 to-emerald-200 rounded-lg w-1/4 animate-pulse" />
            <div className="h-3 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-lg w-1/6 animate-pulse" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl p-6 shadow-lg">
          <div className="h-8 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-lg w-3/4 animate-pulse" />
          <div className="h-3 bg-gradient-to-r from-green-200 to-lime-200 rounded-lg w-full animate-pulse" />
          <div className="h-3 bg-gradient-to-r from-green-200 to-lime-200 rounded-lg w-5/6 animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-2xl p-6 shadow-lg space-y-4">
              <div className="h-48 bg-gradient-to-br from-lime-200 via-green-200 to-emerald-200 rounded-xl animate-pulse" />
              <div className="h-4 bg-gradient-to-r from-green-200 to-emerald-200 rounded-lg w-3/4 animate-pulse" />
              <div className="h-3 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-lg w-full animate-pulse" />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-4 shadow-md">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-lime-300 to-green-400 animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-lg w-1/3 animate-pulse" />
                <div className="h-3 bg-gradient-to-r from-green-200 to-lime-200 rounded-lg w-2/3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
