export default function GlassmorphismProgress() {
  return (
    <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
      <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-white/80 rounded-full"
          style={{ animation: "glassmorphism-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes glassmorphism-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
