import { Skeleton } from './Skeleton';
import { SkeletonCircle } from './SkeletonCircle';
import { SkeletonCard } from './SkeletonCard';

export default function GlassmorphismSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 shadow-xl">
          <SkeletonCircle size="4rem" className="bg-white/40" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="rounded" height="1rem" width="25%" className="bg-white/40" />
            <Skeleton variant="rounded" height="0.75rem" width="16.67%" className="bg-white/30" />
          </div>
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 shadow-xl">
              <SkeletonCard
                imageHeight="10rem"
                textLines={2}
                className="bg-white/40"
              />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 shadow-xl space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
              <Skeleton variant="rounded" width="3rem" height="3rem" className="bg-white/40" />
              <div className="flex-1 space-y-2">
                <Skeleton variant="rounded" height="1rem" width="33.33%" className="bg-white/40" />
                <Skeleton variant="rounded" height="0.75rem" width="66.67%" className="bg-white/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
