export default function NatureProgress() {
  return (
    <div className="p-6 bg-green-50">
      <div className="w-64 h-2 bg-green-100 rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-green-500 rounded-full"
          style={{ animation: "nature-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes nature-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
