export default function ThreeDSkeleton() {
  return (
    <div className="space-y-3 p-6 ">
      <div className="h-4 bg-gray-200 shadow-inner rounded animate-pulse w-3/4" />
      <div className="h-4 bg-gray-200 shadow-inner rounded animate-pulse w-1/2" />
      <div className="h-4 bg-gray-200 shadow-inner rounded animate-pulse w-5/6" />
    </div>
  );
}
