export default function GradientCardSkeleton() {
  return (
    <div className="p-6 ">
      <div className="w-72 p-6 bg-white rounded-lg shadow-lg">
        <div className="h-40 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded mb-4" />
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded w-1/2" />
      </div>
    </div>
  );
}
