export default function FuturisticProgress() {
  return (
    <div className="p-6 bg-slate-900">
      <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-violet-500 rounded-full"
          style={{ animation: "futuristic-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes futuristic-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
