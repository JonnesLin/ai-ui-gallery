export default function ThreeDPulse() {
  return (
    <div className="flex gap-6 p-6 ">
      <div className="relative">
        <div className="w-4 h-4 bg-indigo-500 shadow-lg rounded-full" />
        <div className="absolute inset-0 bg-indigo-500 shadow-lg rounded-full animate-ping opacity-40" />
      </div>
      <div className="w-10 h-10 bg-indigo-500 shadow-lg rounded-lg animate-pulse" />
    </div>
  );
}
