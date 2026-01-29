import { Skeleton } from './Skeleton';
import { SkeletonCircle } from './SkeletonCircle';
import { SkeletonText } from './SkeletonText';
import { SkeletonCard } from './SkeletonCard';

export default function DarkSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gray-950">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4">
          <SkeletonCircle size="4rem" animation="wave" className="bg-gray-800" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" height="1rem" width="25%" animation="wave" className="bg-gray-800" />
            <Skeleton variant="text" height="0.75rem" width="16.67%" animation="wave" className="bg-gray-800" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3">
          <Skeleton variant="text" height="2rem" width="75%" animation="wave" className="bg-gray-800" />
          <SkeletonText lines={2} animation="wave" className="bg-gray-800" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <SkeletonCard
                imageHeight="12rem"
                textLines={2}
                animation="wave"
                className="bg-gray-800"
              />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-lg">
              <Skeleton variant="text" width="3rem" height="3rem" animation="wave" className="bg-gray-800" />
              <div className="flex-1 space-y-2">
                <Skeleton variant="text" height="1rem" width="33.33%" animation="wave" className="bg-gray-800" />
                <Skeleton variant="text" height="0.75rem" width="66.67%" animation="wave" className="bg-gray-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
