export default function NeumorphismSkeleton() {
  return (
    <div className="space-y-3 p-6 bg-gray-200">
      <div className="h-4 bg-gray-200 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)] rounded animate-pulse w-3/4" />
      <div className="h-4 bg-gray-200 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)] rounded animate-pulse w-1/2" />
      <div className="h-4 bg-gray-200 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)] rounded animate-pulse w-5/6" />
    </div>
  );
}
