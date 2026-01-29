export default function GradientBars() {
  return (
    <div className="p-6 ">
      <div className="flex items-end gap-1 h-10">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-t-sm"
            style={{
              animation: "gradient-bars 1s ease-in-out infinite",
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes gradient-bars {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
      `}</style>
    </div>
  );
}
