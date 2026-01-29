export default function FlatProgress() {
  return (
    <div className="p-6 ">
      <div className="w-64 h-2 bg-teal-100 rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-teal-500 rounded-full"
          style={{ animation: "flat-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes flat-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
