import { Skeleton } from './Skeleton';
import { SkeletonCircle } from './SkeletonCircle';
import { SkeletonText } from './SkeletonText';

export default function FlatSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gray-50">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 bg-white rounded-lg p-6">
          <SkeletonCircle size="4rem" className="bg-blue-500" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" height="1rem" width="25%" className="bg-blue-400" />
            <Skeleton variant="text" height="0.75rem" width="16.67%" className="bg-gray-300" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 bg-white rounded-lg p-6">
          <Skeleton variant="text" height="2rem" width="75%" className="bg-indigo-500" />
          <SkeletonText lines={2} className="bg-gray-300" />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg p-6 space-y-4">
              <Skeleton variant="text" height="12rem" width="100%" className="bg-purple-400" />
              <Skeleton variant="text" height="1rem" width="75%" className="bg-purple-500" />
              <Skeleton variant="text" height="0.75rem" width="100%" className="bg-gray-300" />
              <Skeleton variant="text" height="0.75rem" width="66.67%" className="bg-gray-300" />
            </div>
          ))}
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg p-6 space-y-2">
              <Skeleton variant="text" height="2.5rem" width="50%" className="bg-teal-500" />
              <Skeleton variant="text" height="0.75rem" width="75%" className="bg-gray-300" />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-lg p-4">
              <Skeleton variant="text" width="3rem" height="3rem" className="bg-pink-500" />
              <div className="flex-1 space-y-2">
                <Skeleton variant="text" height="1rem" width="33.33%" className="bg-pink-400" />
                <Skeleton variant="text" height="0.75rem" width="66.67%" className="bg-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
