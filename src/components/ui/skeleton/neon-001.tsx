import { Skeleton } from './Skeleton';
import { SkeletonCircle } from './SkeletonCircle';

export default function NeonSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gray-950">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4 border-2 border-pink-500 p-6 bg-black shadow-[0_0_30px_rgba(236,72,153,0.6),inset_0_0_30px_rgba(236,72,153,0.1)]">
          <SkeletonCircle
            size="4rem"
            className="border-2 border-cyan-400 bg-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
          />
          <div className="flex-1 space-y-2">
            <Skeleton
              variant="rectangular"
              height="1rem"
              width="25%"
              className="border border-yellow-400 bg-yellow-500/20 shadow-[0_0_15px_rgba(250,204,21,0.7)]"
            />
            <Skeleton
              variant="rectangular"
              height="0.75rem"
              width="16.67%"
              className="border border-green-400 bg-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.7)]"
            />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-3 border-2 border-purple-500 p-6 bg-black shadow-[0_0_30px_rgba(168,85,247,0.6),inset_0_0_30px_rgba(168,85,247,0.1)]">
          <Skeleton
            variant="rectangular"
            height="2rem"
            width="75%"
            className="border-2 border-pink-400 bg-pink-500/20 shadow-[0_0_20px_rgba(244,114,182,0.8)]"
          />
          <Skeleton
            variant="rectangular"
            height="0.75rem"
            width="100%"
            className="border border-cyan-400 bg-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.7)]"
          />
          <Skeleton
            variant="rectangular"
            height="0.75rem"
            width="83.33%"
            className="border border-cyan-400 bg-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.7)]"
          />
        </div>

        {/* Card Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-2 border-blue-500 p-6 bg-black shadow-[0_0_25px_rgba(59,130,246,0.6),inset_0_0_25px_rgba(59,130,246,0.1)] space-y-4">
              <Skeleton
                variant="rectangular"
                height="12rem"
                width="100%"
                className="border-2 border-fuchsia-400 bg-fuchsia-500/20 shadow-[0_0_25px_rgba(232,121,249,0.8)]"
              />
              <Skeleton
                variant="rectangular"
                height="1rem"
                width="75%"
                className="border border-lime-400 bg-lime-500/20 shadow-[0_0_15px_rgba(163,230,53,0.7)]"
              />
              <Skeleton
                variant="rectangular"
                height="0.75rem"
                width="100%"
                className="border border-orange-400 bg-orange-500/20 shadow-[0_0_15px_rgba(251,146,60,0.7)]"
              />
            </div>
          ))}
        </div>

        {/* List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 border border-emerald-500 p-4 bg-black shadow-[0_0_20px_rgba(16,185,129,0.6),inset_0_0_20px_rgba(16,185,129,0.1)]">
              <Skeleton
                variant="rectangular"
                width="3rem"
                height="3rem"
                className="border-2 border-rose-400 bg-rose-500/20 shadow-[0_0_20px_rgba(251,113,133,0.8)]"
              />
              <div className="flex-1 space-y-2">
                <Skeleton
                  variant="rectangular"
                  height="1rem"
                  width="33.33%"
                  className="border border-violet-400 bg-violet-500/20 shadow-[0_0_15px_rgba(139,92,246,0.7)]"
                />
                <Skeleton
                  variant="rectangular"
                  height="0.75rem"
                  width="66.67%"
                  className="border border-sky-400 bg-sky-500/20 shadow-[0_0_15px_rgba(56,189,248,0.7)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
