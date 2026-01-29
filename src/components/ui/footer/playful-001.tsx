export default function PlayfulFooter() {
  const links = {
    Company: ['About', 'Careers', 'Press', 'Blog'],
    Products: ['Features', 'Pricing', 'API', 'Integrations'],
    Resources: ['Documentation', 'Guides', 'Support', 'Status'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy'],
  }

  return (
    <footer className="bg-gradient-to-b from-orange-50 to-yellow-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-300 rounded-full opacity-50 animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-300 rounded-full opacity-50 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300 rounded-full opacity-50 animate-bounce" style={{ animationDuration: '2s', animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform">
                <span className="text-white font-black text-xl">B</span>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Brand!
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Making the web a more fun place, one pixel at a time!
            </p>
            <div className="mt-6 bg-white rounded-3xl shadow-xl p-5 transform hover:scale-105 transition-transform">
              <p className="text-gray-800 font-bold text-sm mb-3">Join the fun!</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-2.5 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white font-bold text-sm px-5 py-2.5 rounded-full hover:from-orange-500 hover:to-pink-500 transition-all transform hover:scale-105">
                  Yay!
                </button>
              </div>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-gray-800 font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full" />
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-orange-500 text-sm transition-colors hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t-2 border-dashed border-orange-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2024 Brand. Made with lots of coffee and good vibes!
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white hover:from-orange-500 hover:to-pink-500 transition-all transform hover:scale-110 hover:rotate-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white hover:from-purple-500 hover:to-blue-500 transition-all transform hover:scale-110 hover:-rotate-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-11 h-11 rounded-2xl bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white hover:from-green-500 hover:to-teal-500 transition-all transform hover:scale-110 hover:rotate-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
