export default function DarkCardSkeleton() {
  return (
    <div className="p-6 bg-gray-900">
      <div className="w-72 p-6 bg-gray-800 rounded-lg border border-gray-700">
        <div className="h-40 bg-gray-700 animate-pulse rounded mb-4" />
        <div className="h-4 bg-gray-700 animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 bg-gray-700 animate-pulse rounded w-1/2" />
      </div>
    </div>
  );
}
