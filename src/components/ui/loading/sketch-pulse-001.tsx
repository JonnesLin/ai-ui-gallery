export default function SketchPulse() {
  return (
    <div className="flex gap-6 p-6 ">
      <div className="relative">
        <div className="w-4 h-4 bg-gray-500 rounded-full" />
        <div className="absolute inset-0 bg-gray-500 rounded-full animate-ping opacity-40" />
      </div>
      <div className="w-10 h-10 bg-gray-500 rounded-lg animate-pulse" />
    </div>
  );
}
