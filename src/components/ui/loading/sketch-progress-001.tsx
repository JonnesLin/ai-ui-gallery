export default function SketchProgress() {
  return (
    <div className="p-6 ">
      <div className="w-64 h-2 bg-gray-200 border border-dashed border-gray-400 rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-gray-600 rounded-full"
          style={{ animation: "sketch-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes sketch-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
