export default function RetroDots() {
  return (
    <div className="flex gap-2 p-6 bg-amber-50">
      <div className="w-3 h-3 bg-amber-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-3 h-3 bg-amber-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-3 h-3 bg-amber-600 rounded-full animate-bounce" />
    </div>
  );
}
