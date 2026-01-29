export default function DarkSpinner() {
  return (
    <div className="flex items-center gap-6 p-6 bg-gray-900">
      <div className="w-8 h-8 border-4 border-gray-700 border-t-white rounded-full animate-spin" />
      <div className="w-10 h-10 border-4 border-gray-700 border-t-white rounded-full animate-spin" />
      <div className="w-12 h-12 border-4 border-gray-700 border-t-white rounded-full animate-spin" />
    </div>
  );
}
