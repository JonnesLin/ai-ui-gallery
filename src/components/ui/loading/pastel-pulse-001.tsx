export default function PastelPulse() {
  return (
    <div className="flex gap-6 p-6 bg-pink-50">
      <div className="relative">
        <div className="w-4 h-4 bg-pink-300 rounded-full" />
        <div className="absolute inset-0 bg-pink-300 rounded-full animate-ping opacity-40" />
      </div>
      <div className="w-10 h-10 bg-pink-300 rounded-lg animate-pulse" />
    </div>
  );
}
