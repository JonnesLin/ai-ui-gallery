export default function FlatSkeleton() {
  return (
    <div className="space-y-3 p-6 ">
      <div className="h-4 bg-teal-100 rounded animate-pulse w-3/4" />
      <div className="h-4 bg-teal-100 rounded animate-pulse w-1/2" />
      <div className="h-4 bg-teal-100 rounded animate-pulse w-5/6" />
    </div>
  );
}
