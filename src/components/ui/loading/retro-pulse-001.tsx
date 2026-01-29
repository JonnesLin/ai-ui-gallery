export default function RetroPulse() {
  return (
    <div className="flex gap-6 p-6 bg-amber-50">
      <div className="relative">
        <div className="w-4 h-4 bg-amber-500 rounded-full" />
        <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-40" />
      </div>
      <div className="w-10 h-10 bg-amber-500 rounded-lg animate-pulse" />
    </div>
  );
}
