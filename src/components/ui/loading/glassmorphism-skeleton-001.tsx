export default function GlassmorphismSkeleton() {
  return (
    <div className="space-y-3 p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
      <div className="h-4 bg-white/20 rounded animate-pulse w-3/4" />
      <div className="h-4 bg-white/20 rounded animate-pulse w-1/2" />
      <div className="h-4 bg-white/20 rounded animate-pulse w-5/6" />
    </div>
  );
}
