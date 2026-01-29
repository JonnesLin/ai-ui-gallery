export default function NeonCardSkeleton() {
  return (
    <div className="p-6 bg-gray-900">
      <div className="w-72 p-6 bg-gray-800 rounded-lg border border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
        <div className="h-40 bg-pink-500/20 animate-pulse rounded mb-4" />
        <div className="h-4 bg-pink-500/20 animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 bg-pink-500/20 animate-pulse rounded w-1/2" />
      </div>
    </div>
  );
}
