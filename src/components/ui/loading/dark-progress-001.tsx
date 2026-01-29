export default function DarkProgress() {
  return (
    <div className="p-6 bg-gray-900">
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-white rounded-full"
          style={{ animation: "dark-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes dark-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
