export default function BrutalistCardSkeleton() {
  return (
    <div className="p-6 ">
      <div className="w-72 p-6 bg-white rounded-lg border-4 border-black shadow-[4px_4px_0_0_black]">
        <div className="h-40 bg-gray-300 border-2 border-black animate-pulse rounded mb-4" />
        <div className="h-4 bg-gray-300 border-2 border-black animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 bg-gray-300 border-2 border-black animate-pulse rounded w-1/2" />
      </div>
    </div>
  );
}
