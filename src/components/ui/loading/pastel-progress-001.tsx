export default function PastelProgress() {
  return (
    <div className="p-6 bg-pink-50">
      <div className="w-64 h-2 bg-pink-100 rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-pink-400 rounded-full"
          style={{ animation: "pastel-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes pastel-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
