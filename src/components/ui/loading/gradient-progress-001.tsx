export default function GradientProgress() {
  return (
    <div className="p-6 ">
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"
          style={{ animation: "gradient-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes gradient-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
