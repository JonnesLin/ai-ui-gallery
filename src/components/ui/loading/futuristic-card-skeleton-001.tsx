export default function FuturisticCardSkeleton() {
  return (
    <div className="p-6 bg-slate-900">
      <div className="w-72 p-6 bg-slate-800 rounded-lg border border-violet-500/30">
        <div className="h-40 bg-slate-800 animate-pulse rounded mb-4" />
        <div className="h-4 bg-slate-800 animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 bg-slate-800 animate-pulse rounded w-1/2" />
      </div>
    </div>
  );
}
