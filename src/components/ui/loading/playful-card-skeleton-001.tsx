export default function PlayfulCardSkeleton() {
  return (
    <div className="p-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="w-72 p-6 bg-white rounded-lg shadow-xl border-2 border-purple-200 rounded-3xl">
        <div className="h-40 bg-purple-100 animate-pulse rounded mb-4" />
        <div className="h-4 bg-purple-100 animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 bg-purple-100 animate-pulse rounded w-1/2" />
      </div>
    </div>
  );
}
