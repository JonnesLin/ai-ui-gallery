export default function PastelSpinner() {
  return (
    <div className="flex items-center gap-6 p-6 bg-pink-50">
      <div className="w-8 h-8 border-4 border-pink-200 border-t-pink-400 rounded-full animate-spin" />
      <div className="w-10 h-10 border-4 border-pink-200 border-t-pink-400 rounded-full animate-spin" />
      <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-400 rounded-full animate-spin" />
    </div>
  );
}
