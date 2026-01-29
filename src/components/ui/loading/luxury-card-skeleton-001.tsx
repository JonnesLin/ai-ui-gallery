export default function LuxuryCardSkeleton() {
  return (
    <div className="p-6 bg-gray-900">
      <div className="w-72 p-6 bg-gray-900 rounded-lg border border-amber-500/30">
        <div className="h-40 bg-amber-950 animate-pulse rounded mb-4" />
        <div className="h-4 bg-amber-950 animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 bg-amber-950 animate-pulse rounded w-1/2" />
      </div>
    </div>
  );
}
