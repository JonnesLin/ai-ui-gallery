export default function PlayfulSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 bg-white rounded-[2rem] p-6 shadow-lg transform hover:rotate-1 transition-transform">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full w-1/4 animate-pulse" />
            <div className="h-3 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full w-1/6 animate-pulse" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 bg-white rounded-[2rem] p-6 shadow-lg transform hover:-rotate-1 transition-transform">
          <div className="h-8 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full w-3/4 animate-pulse" />
          <div className="h-3 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full w-full animate-pulse" />
          <div className="h-3 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full w-5/6 animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-[2rem] p-6 shadow-lg transform hover:scale-105 transition-transform space-y-4">
              <div className="h-48 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 rounded-[1.5rem] animate-pulse" />
              <div className="h-4 bg-gradient-to-r from-orange-300 to-red-300 rounded-full w-3/4 animate-pulse" />
              <div className="h-3 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full w-full animate-pulse" />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-[1.5rem] p-4 shadow-md transform hover:translate-x-2 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lime-300 to-green-400 animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full w-1/3 animate-pulse" />
                <div className="h-3 bg-gradient-to-r from-violet-300 to-purple-300 rounded-full w-2/3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
