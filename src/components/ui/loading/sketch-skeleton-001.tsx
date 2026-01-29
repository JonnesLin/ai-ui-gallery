export default function SketchSkeleton() {
  return (
    <div className="space-y-3 p-6 ">
      <div className="h-4 bg-gray-100 border border-dashed border-gray-300 rounded animate-pulse w-3/4" />
      <div className="h-4 bg-gray-100 border border-dashed border-gray-300 rounded animate-pulse w-1/2" />
      <div className="h-4 bg-gray-100 border border-dashed border-gray-300 rounded animate-pulse w-5/6" />
    </div>
  );
}
