export default function FuturisticSkeleton() {
  return (
    <div className="space-y-3 p-6 bg-slate-900">
      <div className="h-4 bg-slate-800 rounded animate-pulse w-3/4" />
      <div className="h-4 bg-slate-800 rounded animate-pulse w-1/2" />
      <div className="h-4 bg-slate-800 rounded animate-pulse w-5/6" />
    </div>
  );
}
