export default function RetroCardSkeleton() {
  return (
    <div className="p-6 bg-amber-50">
      <div className="w-72 p-6 bg-amber-50 rounded-lg border-2 border-amber-800">
        <div className="h-40 bg-amber-100 animate-pulse rounded mb-4" />
        <div className="h-4 bg-amber-100 animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 bg-amber-100 animate-pulse rounded w-1/2" />
      </div>
    </div>
  );
}
