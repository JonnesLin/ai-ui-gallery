export default function GlassmorphismCardSkeleton() {
  return (
    <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
      <div className="w-72 p-6 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
        <div className="h-40 bg-white/20 animate-pulse rounded mb-4" />
        <div className="h-4 bg-white/20 animate-pulse rounded w-3/4 mb-3" />
        <div className="h-4 bg-white/20 animate-pulse rounded w-1/2" />
      </div>
    </div>
  );
}
