export default function NatureDots() {
  return (
    <div className="flex gap-2 p-6 bg-green-50">
      <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" />
    </div>
  );
}
