import { Skeleton } from './Skeleton';
import { SkeletonCircle } from './SkeletonCircle';
import { SkeletonText } from './SkeletonText';
import { SkeletonCard } from './SkeletonCard';

export default function MinimalistSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4">
          <SkeletonCircle size="4rem" className="bg-gray-200" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" height="1rem" width="25%" className="bg-gray-200" />
            <Skeleton variant="text" height="0.75rem" width="16.67%" className="bg-gray-200" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3">
          <Skeleton variant="text" height="2rem" width="75%" className="bg-gray-200" />
          <SkeletonText lines={2} className="bg-gray-200" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <SkeletonCard
              key={i}
              imageHeight="12rem"
              textLines={2}
              className="bg-gray-200"
            />
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton variant="rounded" width="3rem" height="3rem" className="bg-gray-200" />
              <div className="flex-1 space-y-2">
                <Skeleton variant="text" height="1rem" width="33.33%" className="bg-gray-200" />
                <Skeleton variant="text" height="0.75rem" width="66.67%" className="bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
