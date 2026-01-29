export default function ThreeDDots() {
  return (
    <div className="flex gap-2 p-6 ">
      <div className="w-3 h-3 bg-indigo-500 shadow-lg rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="w-3 h-3 bg-indigo-500 shadow-lg rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="w-3 h-3 bg-indigo-500 shadow-lg rounded-full animate-bounce" />
    </div>
  );
}
