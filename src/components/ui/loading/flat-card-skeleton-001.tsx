export default function FlatCardSkeleton() {
  return (
    <div className="p-6 ">
      <div className="w-72 p-6 bg-teal-50 rounded-lg ">
        <div className="h-40 bg-teal-100 animate-pulse rounded mb-4" />
        <div className="h-4 bg-teal-100 animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 bg-teal-100 animate-pulse rounded w-1/2" />
      </div>
    </div>
  );
}
