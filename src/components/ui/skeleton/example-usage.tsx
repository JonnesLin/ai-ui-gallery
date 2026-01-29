/**
 * Skeleton Component System Usage Example
 *
 * This file demonstrates how to use the new Skeleton component system.
 * The system provides:
 * - Skeleton: Base component with variants (text, circular, rectangular, rounded)
 * - SkeletonCircle: Specialized circular skeleton (for avatars)
 * - SkeletonText: Multi-line text skeleton
 * - SkeletonCard: Pre-composed card skeleton with image and text
 */

import { Skeleton } from './Skeleton';
import { SkeletonCircle } from './SkeletonCircle';
import { SkeletonText } from './SkeletonText';
import { SkeletonCard } from './SkeletonCard';

export default function SkeletonUsageExample() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white space-y-12">
      {/* Basic Skeleton Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Basic Skeleton Variants</h2>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">Text (default rounded corners)</p>
            <Skeleton variant="text" width="75%" height="1rem" className="bg-gray-200" />
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Rectangular (no rounded corners)</p>
            <Skeleton variant="rectangular" width="75%" height="2rem" className="bg-gray-200" />
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Rounded (larger border radius)</p>
            <Skeleton variant="rounded" width="75%" height="3rem" className="bg-gray-200" />
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Circular (for avatars)</p>
            <Skeleton variant="circular" width="4rem" height="4rem" className="bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Animation Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Animation Types</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Pulse (default)</p>
            <Skeleton
              variant="rounded"
              width="100%"
              height="8rem"
              animation="pulse"
              className="bg-blue-200"
            />
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Wave</p>
            <Skeleton
              variant="rounded"
              width="100%"
              height="8rem"
              animation="wave"
              className="bg-purple-200"
            />
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">None (static)</p>
            <Skeleton
              variant="rounded"
              width="100%"
              height="8rem"
              animation="none"
              className="bg-gray-200"
            />
          </div>
        </div>
      </section>

      {/* SkeletonCircle Component */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">SkeletonCircle Component</h2>

        <div className="flex items-center gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Small (2rem)</p>
            <SkeletonCircle size="2rem" className="bg-gray-200" />
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Medium (4rem)</p>
            <SkeletonCircle size="4rem" className="bg-gray-200" />
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Large (6rem)</p>
            <SkeletonCircle size="6rem" className="bg-gray-200" />
          </div>
        </div>
      </section>

      {/* SkeletonText Component */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">SkeletonText Component</h2>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Single line</p>
            <SkeletonText lines={1} className="bg-gray-200" />
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Multiple lines (default 3)</p>
            <SkeletonText className="bg-gray-200" />
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Custom lines (5) with wave animation</p>
            <SkeletonText lines={5} animation="wave" className="bg-gray-200" />
          </div>
        </div>
      </section>

      {/* SkeletonCard Component */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">SkeletonCard Component</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Default card</p>
            <SkeletonCard className="bg-gray-200" />
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">No image</p>
            <SkeletonCard showImage={false} className="bg-gray-200" />
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Custom lines with wave</p>
            <SkeletonCard
              textLines={5}
              animation="wave"
              className="bg-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Real-world Example: User Profile */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Real-world Example: User Profile</h2>

        <div className="border border-gray-200 rounded-lg p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4">
            <SkeletonCircle size="5rem" className="bg-gray-200" />
            <div className="flex-1 space-y-3">
              <Skeleton variant="text" height="1.5rem" width="40%" className="bg-gray-200" />
              <Skeleton variant="text" height="1rem" width="25%" className="bg-gray-200" />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <Skeleton variant="text" height="1rem" width="20%" className="bg-gray-200" />
            <SkeletonText lines={3} className="bg-gray-200" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center space-y-2">
                <Skeleton variant="text" height="2rem" width="60%" className="bg-gray-200 mx-auto" />
                <Skeleton variant="text" height="0.875rem" width="80%" className="bg-gray-200 mx-auto" />
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <div className="space-y-2">
            <Skeleton variant="text" height="1rem" width="30%" className="bg-gray-200" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3">
                  <Skeleton variant="rounded" width="5rem" height="5rem" className="bg-gray-200" />
                  <div className="flex-1 space-y-2">
                    <Skeleton variant="text" height="1rem" width="70%" className="bg-gray-200" />
                    <SkeletonText lines={2} className="bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
