export default function SketchFooter() {
  const links = {
    Company: ['About', 'Careers', 'Press', 'Blog'],
    Products: ['Features', 'Pricing', 'API', 'Integrations'],
    Resources: ['Documentation', 'Guides', 'Support', 'Status'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy'],
  }

  return (
    <footer className="bg-amber-50 border-t-2 border-dashed border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 relative inline-block">
              <h3 className="text-3xl font-bold text-gray-800 relative z-10" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Brand
              </h3>
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="#374151" strokeWidth="2" strokeDasharray="4,2" />
              </svg>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mt-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Drawn with love and a slightly shaky hand.
            </p>
            <div className="mt-6 relative">
              <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 bg-white">
                <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  Get updates!
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email"
                    className="flex-1 bg-amber-50 border-2 border-gray-300 border-dashed rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-500"
                    style={{ fontFamily: 'Comic Sans MS, cursive' }}
                  />
                  <button
                    className="bg-gray-800 text-amber-50 text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors border-2 border-gray-900"
                    style={{ fontFamily: 'Comic Sans MS, cursive' }}
                  >
                    OK!
                  </button>
                </div>
              </div>
              <svg className="absolute -top-2 -right-2 w-8 h-8" viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="12" fill="none" stroke="#374151" strokeWidth="2" strokeDasharray="3,2" />
                <path d="M10,15 L14,19 L20,10" fill="none" stroke="#374151" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-gray-800 font-bold mb-4 border-b-2 border-dashed border-gray-300 pb-2 inline-block"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                {category}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-800 text-sm transition-colors flex items-center gap-2 group"
                      style={{ fontFamily: 'Comic Sans MS, cursive' }}
                    >
                      <span className="text-gray-400 group-hover:text-gray-600">~</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t-2 border-dashed border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p
              className="text-gray-500 text-sm"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              © 2024 Brand. Sketched with care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="group">
                <div className="w-10 h-10 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center text-gray-500 group-hover:border-gray-600 group-hover:text-gray-700 transition-colors bg-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center text-gray-500 group-hover:border-gray-600 group-hover:text-gray-700 transition-colors bg-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center text-gray-500 group-hover:border-gray-600 group-hover:text-gray-700 transition-colors bg-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
