import { Divider } from './Divider';

export default function GradientDivider() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-8 space-y-12">
      {/* Horizontal Gradients */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-900 mb-6">Horizontal Gradients</h2>

        <Divider mode="background" thickness="thick" className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        <Divider mode="background" thickness="thick" className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        <Divider mode="background" thickness="thick" className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
        <div className="w-full h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded-full"></div>
        <Divider mode="background" thickness="thin" className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-900 mb-6">With Text</h2>

        <Divider
          mode="background"
          thickness="thick"
          label={
            <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 uppercase tracking-wider font-bold">
              or
            </span>
          }
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        />

        <Divider
          mode="background"
          thickness="thin"
          label={
            <div className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
              <span className="text-sm text-white font-medium">Featured</span>
            </div>
          }
          className="bg-gradient-to-r from-transparent via-blue-500 to-blue-500"
        />

        <div className="flex items-center gap-4">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
          <span className="text-sm text-gray-700 font-medium px-4 py-1 bg-white border-2 border-transparent bg-clip-padding rounded-full relative">
            <span className="relative z-10">Section</span>
          </span>
          <div className="flex-1 h-0.5 bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-900 mb-6">With Icon</h2>

        <Divider
          mode="background"
          thickness="thick"
          label={
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          }
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        />

        <Divider
          mode="background"
          thickness="thin"
          label={
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.5)]">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          }
          className="bg-gradient-to-r from-transparent via-orange-500 to-orange-500"
        />
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-medium text-gray-900 mb-6">Vertical</h2>
        <div className="flex items-center justify-center gap-8 h-32">
          <div className="text-sm text-gray-700 font-medium">Item 1</div>
          <Divider mode="background" orientation="vertical" thickness="thick" className="bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
          <div className="text-sm text-gray-700 font-medium">Item 2</div>
          <Divider mode="background" orientation="vertical" thickness="thick" className="bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
          <div className="text-sm text-gray-700 font-medium">Item 3</div>
          <Divider mode="background" orientation="vertical" thickness="thick" className="bg-gradient-to-b from-orange-500 to-red-500 rounded-full" />
          <div className="text-sm text-gray-700 font-medium">Item 4</div>
        </div>
      </section>

      {/* Special Effects */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-900 mb-6">Special Effects</h2>

        <div className="w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-[0_4px_14px_rgba(139,92,246,0.4)]"></div>
        <div className="w-full h-1.5 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 rounded-full shadow-sm"></div>
        <Divider mode="background" thickness="thick" className="bg-gradient-to-r from-blue-500 via-cyan-400 via-blue-500 to-cyan-500 rounded-full" />
      </section>
    </div>
  );
}
