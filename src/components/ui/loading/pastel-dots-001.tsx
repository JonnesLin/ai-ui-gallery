export default function PastelDots() {
  return (
    <div className="flex gap-2 p-6 bg-pink-50">
      <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" />
    </div>
  );
}
