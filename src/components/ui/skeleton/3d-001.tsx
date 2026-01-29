export default function ThreeDSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-slate-100 to-gray-200">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform hover:translate-y-[-4px] transition-transform">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-[0_8px_16px_rgba(99,102,241,0.4),inset_0_-2px_8px_rgba(0,0,0,0.2)] animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.1)] w-1/4 animate-pulse" />
            <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.1)] w-1/6 animate-pulse" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 bg-white rounded-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          <div className="h-8 bg-gradient-to-r from-purple-300 to-indigo-400 rounded-lg shadow-[0_8px_16px_rgba(129,140,248,0.3),inset_0_-2px_8px_rgba(0,0,0,0.2)] w-3/4 animate-pulse" />
          <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.1)] w-full animate-pulse" />
          <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.1)] w-5/6 animate-pulse" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform hover:translate-y-[-8px] hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] transition-all space-y-4">
              <div className="h-48 bg-gradient-to-br from-rose-300 to-orange-400 rounded-lg shadow-[0_12px_24px_rgba(251,113,133,0.3),inset_0_-4px_12px_rgba(0,0,0,0.2)] animate-pulse" />
              <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.1)] w-3/4 animate-pulse" />
              <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.1)] w-full animate-pulse" />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-[0_12px_24px_rgba(0,0,0,0.1)] transform hover:translate-x-2 transition-transform">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 shadow-[0_8px_16px_rgba(20,184,166,0.4),inset_0_-2px_8px_rgba(0,0,0,0.2)] animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.1)] w-1/3 animate-pulse" />
                <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.1)] w-2/3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
