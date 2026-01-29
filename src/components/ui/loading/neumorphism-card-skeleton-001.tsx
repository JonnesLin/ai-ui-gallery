export default function NeumorphismCardSkeleton() {
  return (
    <div className="p-6 bg-gray-200">
      <div className="w-72 p-6 bg-gray-200 rounded-lg shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)]">
        <div className="h-40 bg-gray-200 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)] animate-pulse rounded mb-4" />
        <div className="h-4 bg-gray-200 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)] animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 bg-gray-200 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)] animate-pulse rounded w-1/2" />
      </div>
    </div>
  );
}
