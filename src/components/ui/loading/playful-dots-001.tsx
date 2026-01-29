export default function PlayfulDots() {
  return (
    <div className="flex gap-2 p-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" />
    </div>
  );
}
