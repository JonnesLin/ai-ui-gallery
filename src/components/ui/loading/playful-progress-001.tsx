export default function PlayfulProgress() {
  return (
    <div className="p-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="w-64 h-2 bg-white rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"
          style={{ animation: "playful-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes playful-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
