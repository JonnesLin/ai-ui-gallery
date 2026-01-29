export default function MaterialPulse() {
  return (
    <div className="flex gap-6 p-6 ">
      <div className="relative">
        <div className="w-4 h-4 bg-blue-600 rounded-full" />
        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-40" />
      </div>
      <div className="w-10 h-10 bg-blue-600 rounded-lg animate-pulse" />
    </div>
  );
}
