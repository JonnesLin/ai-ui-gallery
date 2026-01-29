export default function NeonDots() {
  return (
    <div className="flex gap-2 p-6 bg-gray-900">
      <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" />
    </div>
  );
}
