export default function LuxuryProgress() {
  return (
    <div className="p-6 bg-gray-900">
      <div className="w-64 h-2 bg-amber-950 rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
          style={{ animation: "luxury-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes luxury-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
