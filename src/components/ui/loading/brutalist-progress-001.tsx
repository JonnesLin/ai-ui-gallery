export default function BrutalistProgress() {
  return (
    <div className="p-6 ">
      <div className="w-64 h-2 bg-gray-300 border-2 border-black rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-black rounded-full"
          style={{ animation: "brutalist-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes brutalist-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
