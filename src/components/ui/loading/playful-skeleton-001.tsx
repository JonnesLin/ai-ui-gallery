export default function PlayfulSkeleton() {
  return (
    <div className="space-y-3 p-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="h-4 bg-purple-100 rounded animate-pulse w-3/4" />
      <div className="h-4 bg-purple-100 rounded animate-pulse w-1/2" />
      <div className="h-4 bg-purple-100 rounded animate-pulse w-5/6" />
    </div>
  );
}
