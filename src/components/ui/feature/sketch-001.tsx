export default function SketchFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Built for speed with optimized performance.' },
    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security out of the box.' },
    { icon: '🎨', title: 'Customizable', desc: 'Tailor every aspect to your needs.' },
    { icon: '📱', title: 'Responsive', desc: 'Looks great on any device.' },
    { icon: '🔌', title: 'Integrations', desc: 'Connect with your favorite tools.' },
    { icon: '📊', title: 'Analytics', desc: 'Insights to grow your business.' },
  ]

  return (
    <section className="py-20 px-4 bg-amber-50 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h20v20H0z%22%20fill%3D%22none%22%20stroke%3D%22%23d4c4a8%22%20stroke-width%3D%220.5%22%2F%3E%3C%2Fsvg%3E')]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Everything you need to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-8 border-2 border-gray-800 shadow-[4px_4px_0px_0px_rgba(31,41,55,0.8)] hover:shadow-[2px_2px_0px_0px_rgba(31,41,55,0.8)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
              style={{
                borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                transform: i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)'
              }}
            >
              <div
                className="w-14 h-14 bg-yellow-200 border-2 border-gray-800 flex items-center justify-center text-2xl mb-5"
                style={{ borderRadius: '50% 45% 55% 45%' }}
              >
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                {f.title}
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
