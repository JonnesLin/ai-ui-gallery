export default function PlayfulSpinner() {
  return (
    <div className="flex items-center gap-6 p-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="w-8 h-8 border-4 border-pink-300 border-t-purple-500 rounded-full animate-spin" />
      <div className="w-10 h-10 border-4 border-pink-300 border-t-purple-500 rounded-full animate-spin" />
      <div className="w-12 h-12 border-4 border-pink-300 border-t-purple-500 rounded-full animate-spin" />
    </div>
  );
}
