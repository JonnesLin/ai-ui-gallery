export default function NeumorphismDots() {
  return (
    <div className="flex gap-2 p-6 bg-gray-200">
      <div className="w-3 h-3 bg-gray-300 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-3 h-3 bg-gray-300 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-3 h-3 bg-gray-300 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] rounded-full animate-bounce" />
    </div>
  );
}
