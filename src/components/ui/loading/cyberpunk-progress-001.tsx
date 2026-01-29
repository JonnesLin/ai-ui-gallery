export default function CyberpunkProgress() {
  return (
    <div className="p-6 bg-gray-900">
      <div className="w-64 h-2 bg-gray-800 border border-cyan-500/30 rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full"
          style={{ animation: "cyberpunk-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes cyberpunk-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
