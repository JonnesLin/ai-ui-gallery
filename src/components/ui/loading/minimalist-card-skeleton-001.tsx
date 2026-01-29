export default function MinimalistCardSkeleton() {
  return (
    <div className="p-6 ">
      <div className="w-72 p-6 bg-white rounded-lg border border-gray-100">
        <div className="h-40 bg-gray-100 animate-pulse rounded mb-4" />
        <div className="h-4 bg-gray-100 animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 bg-gray-100 animate-pulse rounded w-1/2" />
      </div>
    </div>
  );
}
