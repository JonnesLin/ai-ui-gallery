export default function CyberpunkCardSkeleton() {
  return (
    <div className="p-6 bg-gray-900">
      <div className="w-72 p-6 bg-gray-800 rounded-lg border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
        <div className="h-40 bg-gray-800 border border-cyan-500/20 animate-pulse rounded mb-4" />
        <div className="h-4 bg-gray-800 border border-cyan-500/20 animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 bg-gray-800 border border-cyan-500/20 animate-pulse rounded w-1/2" />
      </div>
    </div>
  );
}
