export default function CorporateProgress() {
  return (
    <div className="p-6 ">
      <div className="w-64 h-2 bg-blue-100 rounded-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-blue-700 rounded-full"
          style={{ animation: "corporate-progress 1.5s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes corporate-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
