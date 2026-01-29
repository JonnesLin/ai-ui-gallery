export default function SketchSpinner() {
  return (
    <div className="flex items-center gap-6 p-6 ">
      <div className="w-8 h-8 border-4 border-gray-400 border-t-gray-700 border-dashed rounded-full animate-spin" />
      <div className="w-10 h-10 border-4 border-gray-400 border-t-gray-700 border-dashed rounded-full animate-spin" />
      <div className="w-12 h-12 border-4 border-gray-400 border-t-gray-700 border-dashed rounded-full animate-spin" />
    </div>
  );
}
