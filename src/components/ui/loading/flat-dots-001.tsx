export default function FlatDots() {
  return (
    <div className="flex gap-2 p-6 ">
      <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce" />
    </div>
  );
}
