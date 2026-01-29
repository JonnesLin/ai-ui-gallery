export default function RetroSkeleton() {
  return (
    <div className="space-y-3 p-6 bg-amber-50">
      <div className="h-4 bg-amber-100 rounded animate-pulse w-3/4" />
      <div className="h-4 bg-amber-100 rounded animate-pulse w-1/2" />
      <div className="h-4 bg-amber-100 rounded animate-pulse w-5/6" />
    </div>
  );
}
