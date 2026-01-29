export default function MaterialProgress() {
  return (
    <div className="p-6 ">
      <div className="w-64 h-2 bg-blue-100 rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-blue-600 rounded-full"
          style={{ animation: "material-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes material-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
