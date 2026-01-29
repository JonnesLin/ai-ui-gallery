export default function BrutalistPulse() {
  return (
    <div className="flex gap-6 p-6 ">
      <div className="relative">
        <div className="w-4 h-4 bg-black rounded-full" />
        <div className="absolute inset-0 bg-black rounded-full animate-ping opacity-40" />
      </div>
      <div className="w-10 h-10 bg-black rounded-lg animate-pulse" />
    </div>
  );
}
