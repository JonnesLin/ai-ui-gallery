export default function NaturePulse() {
  return (
    <div className="flex gap-6 p-6 bg-green-50">
      <div className="relative">
        <div className="w-4 h-4 bg-green-400 rounded-full" />
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-40" />
      </div>
      <div className="w-10 h-10 bg-green-400 rounded-lg animate-pulse" />
    </div>
  );
}
