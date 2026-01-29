export default function NeonProgress() {
  return (
    <div className="p-6 bg-gray-900">
      <div className="w-64 h-2 bg-gray-800 border border-pink-500/30 rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full"
          style={{ animation: "neon-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes neon-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
