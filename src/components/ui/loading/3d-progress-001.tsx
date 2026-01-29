export default function ThreeDProgress() {
  return (
    <div className="p-6 ">
      <div className="w-64 h-2 bg-indigo-100 shadow-inner rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-indigo-500 rounded-full"
          style={{ animation: "3d-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes 3d-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
