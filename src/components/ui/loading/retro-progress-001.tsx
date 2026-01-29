export default function RetroProgress() {
  return (
    <div className="p-6 bg-amber-50">
      <div className="w-64 h-2 bg-amber-200 rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-amber-600 rounded-full"
          style={{ animation: "retro-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes retro-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
