export default function LuxuryCards() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Card */}
          <div className="group">
            <div className="aspect-[3/4] overflow-hidden bg-[#1a1a1a] relative">
              <img
                src="https://picsum.photos/seed/lux1/400/533"
                alt="Product"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs text-amber-400 tracking-[0.3em] uppercase">Limited Edition</span>
                <h3 className="mt-2 text-xl font-light text-white tracking-wide">Noir Elixir</h3>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-2xl font-light text-white">$2,450</span>
              <button className="px-6 py-2 border border-amber-600 text-amber-400 text-sm tracking-wider hover:bg-amber-600 hover:text-black transition-colors">
                ACQUIRE
              </button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-gradient-to-br from-[#1a1510] to-[#0c0c0c] p-8 border border-amber-900/30">
            <div className="flex items-center gap-5">
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/lux2/100/100"
                  alt="Profile"
                  className="w-20 h-20 object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-600 flex items-center justify-center">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-light text-white tracking-wider">Victoria Sterling</h3>
                <p className="text-xs text-amber-600 tracking-[0.2em] uppercase mt-1">Private Client Advisor</p>
              </div>
            </div>
            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-amber-800/50 to-transparent" />
            <p className="mt-6 text-gray-400 leading-relaxed font-light">
              Curating exceptional experiences for discerning collectors since 2008.
            </p>
            <button className="mt-6 w-full py-3 bg-amber-600 text-black text-sm tracking-wider font-medium hover:bg-amber-500 transition-colors">
              REQUEST CONSULTATION
            </button>
          </div>

          {/* Stats Card */}
          <div className="bg-[#1a1a1a] p-8 border border-gray-800">
            <span className="text-xs text-gray-500 tracking-[0.3em] uppercase">Portfolio Value</span>
            <p className="mt-4 text-4xl font-light text-white tracking-wider">$4.8M</p>
            <p className="mt-2 text-sm text-amber-600">+18.4% YTD</p>
            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Fine Art</span>
                <span className="text-white font-light">$2.1M</span>
              </div>
              <div className="h-1 bg-gray-800 overflow-hidden">
                <div className="h-full w-[44%] bg-gradient-to-r from-amber-600 to-amber-400" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Timepieces</span>
                <span className="text-white font-light">$1.5M</span>
              </div>
              <div className="h-1 bg-gray-800 overflow-hidden">
                <div className="h-full w-[31%] bg-gradient-to-r from-amber-600 to-amber-400" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Wine & Spirits</span>
                <span className="text-white font-light">$1.2M</span>
              </div>
              <div className="h-1 bg-gray-800 overflow-hidden">
                <div className="h-full w-[25%] bg-gradient-to-r from-amber-600 to-amber-400" />
              </div>
            </div>
          </div>

          {/* Event Card */}
          <div className="lg:col-span-2 relative overflow-hidden">
            <img
              src="https://picsum.photos/seed/lux3/800/400"
              alt="Event"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="relative p-8 md:p-12 h-full min-h-[320px] flex flex-col justify-center">
              <span className="text-xs text-amber-400 tracking-[0.3em] uppercase">Exclusive Invitation</span>
              <h3 className="mt-4 text-3xl font-light text-white tracking-wide">
                Private Viewing
              </h3>
              <p className="mt-3 text-gray-400 max-w-md leading-relaxed">
                An intimate evening showcasing the newly acquired Impressionist collection. Champagne reception at 7 PM.
              </p>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-400">
                <span>March 15, 2026</span>
                <span>The Grand Gallery</span>
                <span>Black Tie</span>
              </div>
              <button className="mt-6 w-fit px-8 py-3 bg-amber-600 text-black text-sm tracking-wider font-medium hover:bg-amber-500 transition-colors">
                RSVP
              </button>
            </div>
          </div>

          {/* Watch Card */}
          <div className="bg-[#1a1a1a] p-6 border border-gray-800 group">
            <div className="aspect-square bg-black flex items-center justify-center overflow-hidden">
              <img
                src="https://picsum.photos/seed/lux4/400/400"
                alt="Watch"
                className="w-3/4 h-3/4 object-contain transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="mt-6 flex items-start justify-between">
              <div>
                <span className="text-xs text-gray-500 tracking-[0.2em] uppercase">Timepiece</span>
                <h3 className="mt-1 text-lg font-light text-white tracking-wide">Royal Oak</h3>
                <p className="text-sm text-gray-500 mt-1">Ref. 15500ST</p>
              </div>
              <span className="text-xl text-amber-400 font-light">$42,500</span>
            </div>
          </div>

          {/* Membership Card */}
          <div
            className="p-8 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1a1510 0%, #0c0c0c 50%, #1a1510 100%)'
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div>
                <span className="text-xs text-amber-400 tracking-[0.3em] uppercase">Exclusive</span>
                <h3 className="text-lg font-light text-white tracking-wide">Black Card</h3>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                'Priority access to all auctions',
                'Personal concierge service',
                'Private viewings worldwide',
                'Complimentary insurance',
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-gray-400">
                  <span className="w-1 h-1 bg-amber-600 rounded-full" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <span className="text-xs text-gray-500">Annual Membership</span>
              <p className="text-2xl font-light text-white mt-1">$25,000</p>
            </div>

            <button className="mt-6 w-full py-3 border border-amber-600 text-amber-400 text-sm tracking-wider hover:bg-amber-600 hover:text-black transition-colors">
              APPLY FOR MEMBERSHIP
            </button>
          </div>

          {/* Quote Card */}
          <div className="bg-[#1a1a1a] p-8 border border-gray-800 flex flex-col justify-center">
            <svg className="w-8 h-8 text-amber-600/50 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
            <p className="text-xl font-light text-white leading-relaxed">
              The bitterness of poor quality remains long after the sweetness of low price is forgotten.
            </p>
            <div className="mt-6 h-px bg-gray-800" />
            <p className="mt-4 text-xs text-amber-600 tracking-[0.3em] uppercase">Benjamin Franklin</p>
          </div>

          {/* Contact Card */}
          <div className="bg-gradient-to-br from-amber-950/50 to-[#0c0c0c] p-8 border border-amber-900/30">
            <span className="text-xs text-amber-400 tracking-[0.3em] uppercase">Private Inquiries</span>
            <h3 className="mt-4 text-xl font-light text-white tracking-wide">
              Schedule a Personal Consultation
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Our specialists are available to discuss your collection objectives in complete confidence.
            </p>
            <div className="mt-6 space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-black/50 border border-gray-800 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-amber-800"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-black/50 border border-gray-800 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-amber-800"
              />
            </div>
            <button className="mt-6 w-full py-3 bg-amber-600 text-black text-sm tracking-wider font-medium hover:bg-amber-500 transition-colors">
              REQUEST APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
