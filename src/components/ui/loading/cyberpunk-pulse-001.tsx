export default function CyberpunkPulse() {
  return (
    <div className="flex gap-6 p-6 bg-gray-900">
      <div className="relative">
        <div className="w-4 h-4 bg-cyan-400 rounded-full" />
        <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-40" />
      </div>
      <div className="w-10 h-10 bg-cyan-400 rounded-lg animate-pulse" />
    </div>
  );
}
