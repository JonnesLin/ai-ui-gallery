export default function GradientSpinner() {
  return (
    <div className="flex items-center gap-6 p-6 ">
      <div className="w-8 h-8 border-4 border-pink-200 border-t-purple-600 rounded-full animate-spin" />
      <div className="w-10 h-10 border-4 border-pink-200 border-t-purple-600 rounded-full animate-spin" />
      <div className="w-12 h-12 border-4 border-pink-200 border-t-purple-600 rounded-full animate-spin" />
    </div>
  );
}
