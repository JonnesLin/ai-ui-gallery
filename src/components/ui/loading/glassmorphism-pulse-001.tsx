export default function GlassmorphismPulse() {
  return (
    <div className="flex gap-6 p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
      <div className="relative">
        <div className="w-4 h-4 bg-white/60 rounded-full" />
        <div className="absolute inset-0 bg-white/60 rounded-full animate-ping opacity-40" />
      </div>
      <div className="w-10 h-10 bg-white/60 rounded-lg animate-pulse" />
    </div>
  );
}
