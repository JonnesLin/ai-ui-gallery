import { Divider } from './Divider';

export default function FlatDivider() {
  return (
    <div className="w-full min-h-screen bg-white p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-semibold text-gray-800 mb-6 uppercase">Horizontal</h2>

        <Divider mode="background" thickness="thick" className="bg-blue-500" />
        <Divider mode="background" thickness="thick" className="bg-green-500" />
        <Divider mode="background" thickness="thick" className="bg-red-500" />
        <Divider mode="background" thickness="thick" className="bg-purple-500" />
        <Divider mode="background" thickness="thick" className="bg-orange-500" />

        {/* Multi-Color Stripe */}
        <div className="w-full h-2 flex">
          <div className="flex-1 bg-red-500"></div>
          <div className="flex-1 bg-orange-500"></div>
          <div className="flex-1 bg-yellow-500"></div>
          <div className="flex-1 bg-green-500"></div>
          <div className="flex-1 bg-blue-500"></div>
          <div className="flex-1 bg-purple-500"></div>
        </div>

        <div className="w-full h-3 bg-teal-500"></div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-semibold text-gray-800 mb-6 uppercase">With Text</h2>

        <Divider
          mode="background"
          thickness="thick"
          label={<span className="text-sm text-gray-700 font-medium uppercase">or</span>}
          className="bg-blue-500"
        />

        <Divider
          mode="background"
          thickness="thick"
          label={
            <div className="px-6 py-2 bg-green-500">
              <span className="text-sm text-white font-semibold uppercase">New</span>
            </div>
          }
          className="bg-green-500"
        />

        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-purple-500"></div>
          <div className="px-8 py-3 bg-purple-500">
            <span className="text-base text-white font-bold uppercase">Featured</span>
          </div>
          <div className="flex-1 h-2 bg-purple-500"></div>
        </div>

        <Divider
          mode="background"
          thickness="thick"
          label={
            <div className="px-6 py-2 bg-white border-2 border-orange-500">
              <span className="text-sm text-orange-500 font-semibold uppercase">Section</span>
            </div>
          }
          className="bg-orange-500"
        />
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-semibold text-gray-800 mb-6 uppercase">With Icon</h2>

        <Divider
          mode="background"
          thickness="thick"
          label={
            <div className="w-10 h-10 bg-blue-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          }
          className="bg-blue-500"
        />

        <Divider
          mode="background"
          thickness="thick"
          label={
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          }
          className="bg-green-500"
        />

        <Divider
          mode="background"
          thickness="thick"
          label={
            <div className="w-12 h-12 bg-white border-3 border-purple-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          }
          className="bg-purple-500"
        />

        <Divider
          mode="background"
          thickness="thick"
          label={
            <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          }
          className="bg-yellow-500"
        />
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-semibold text-gray-800 mb-6 uppercase">Vertical</h2>
        <div className="flex items-center justify-center gap-8 h-32 bg-gray-50 p-6">
          <div className="text-sm text-gray-700 font-medium uppercase">Item 1</div>
          <Divider mode="background" orientation="vertical" thickness="thick" className="bg-blue-500" />
          <div className="text-sm text-gray-700 font-medium uppercase">Item 2</div>
          <Divider mode="background" orientation="vertical" thickness="thick" className="bg-green-500" />
          <div className="text-sm text-gray-700 font-medium uppercase">Item 3</div>
          <Divider mode="background" orientation="vertical" thickness="thick" className="bg-red-500" />
          <div className="text-sm text-gray-700 font-medium uppercase">Item 4</div>
        </div>
      </section>

      {/* Decorative Variants */}
      <section className="space-y-8">
        <h2 className="text-sm font-semibold text-gray-800 mb-6 uppercase">Decorative</h2>

        <div className="flex gap-2">
          {['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-purple-500', 'bg-pink-500'].map((color, i) => (
            <div key={i} className={`flex-1 h-2 ${color}`}></div>
          ))}
        </div>

        <div className="flex gap-1 items-center justify-center">
          {[2, 4, 6, 8, 6, 4, 2, 4, 6, 8, 10, 8, 6, 4, 2, 4, 6, 8, 6, 4, 2].map((h, i) => (
            <div key={i} className={`w-3 bg-teal-500`} style={{ height: `${h * 2}px` }}></div>
          ))}
        </div>

        <div className="flex gap-2 justify-center">
          {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500'].map((color, i) => (
            <div key={i} className={`w-4 h-4 ${color} rounded-full`}></div>
          ))}
        </div>

        <div className="space-y-1">
          <div className="w-full h-1 bg-blue-500"></div>
          <div className="w-full h-1 bg-blue-400"></div>
          <div className="w-full h-1 bg-blue-300"></div>
        </div>
      </section>
    </div>
  );
}
