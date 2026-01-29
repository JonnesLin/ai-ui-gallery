export default function PastelSkeleton() {
  return (
    <div className="space-y-3 p-6 bg-pink-50">
      <div className="h-4 bg-pink-100 rounded animate-pulse w-3/4" />
      <div className="h-4 bg-pink-100 rounded animate-pulse w-1/2" />
      <div className="h-4 bg-pink-100 rounded animate-pulse w-5/6" />
    </div>
  );
}
