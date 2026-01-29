export default function NeumorphismProgress() {
  return (
    <div className="p-6 bg-gray-200">
      <div className="w-64 h-2 bg-gray-200 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-gray-300 rounded-full"
          style={{ animation: "neumorphism-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes neumorphism-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
