export default function CorporateBars() {
  return (
    <div className="p-6 ">
      <div className="flex items-end gap-1 h-10">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-2 bg-blue-700 rounded-t-sm"
            style={{
              animation: "corporate-bars 1s ease-in-out infinite",
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes corporate-bars {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
      `}</style>
    </div>
  );
}
