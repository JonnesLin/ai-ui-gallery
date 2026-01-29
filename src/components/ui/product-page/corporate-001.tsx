export default function CorporateProductPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="aspect-square bg-white border border-slate-200 rounded-sm"></div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-blue-600"></div>
                <span className="text-sm text-slate-600 uppercase tracking-wider">Business Solutions</span>
              </div>
              <h1 className="text-4xl font-semibold text-slate-900 mb-4">
                Enterprise Workstation Pro
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                Professional-grade computing solution designed for modern business environments.
                Engineered for reliability and performance.
              </p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-slate-900">$2,499</span>
              <span className="text-slate-500">+ VAT</span>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm text-slate-700 font-medium mb-3 block uppercase tracking-wide">Configuration</label>
                <div className="space-y-2">
                  <button className="w-full px-6 py-4 bg-white border-2 border-blue-600 text-left rounded-sm">
                    <div className="font-semibold text-slate-900">Standard Configuration</div>
                    <div className="text-sm text-slate-600">Intel i7 / 16GB RAM / 512GB SSD</div>
                  </button>
                  <button className="w-full px-6 py-4 bg-white border border-slate-200 text-left rounded-sm hover:border-slate-300">
                    <div className="font-semibold text-slate-900">Advanced Configuration</div>
                    <div className="text-sm text-slate-600">Intel i9 / 32GB RAM / 1TB SSD</div>
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-700 font-medium mb-3 block uppercase tracking-wide">Support Plan</label>
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-3 bg-white border border-slate-300 text-sm font-medium text-slate-700 rounded-sm">
                    1 Year
                  </button>
                  <button className="flex-1 px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-sm">
                    3 Years
                  </button>
                  <button className="flex-1 px-4 py-3 bg-white border border-slate-300 text-sm font-medium text-slate-700 rounded-sm">
                    5 Years
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-4 bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors">
                Request Quote
              </button>
              <button className="px-6 py-4 border border-slate-300 text-slate-700 font-semibold rounded-sm hover:bg-slate-50">
                Contact Sales
              </button>
            </div>

            <div className="flex gap-6 pt-4 border-t border-slate-200">
              <div className="text-sm text-slate-600">
                <div className="font-semibold text-slate-900 mb-1">Volume Discounts</div>
                <div>Available for orders of 10+</div>
              </div>
              <div className="text-sm text-slate-600">
                <div className="font-semibold text-slate-900 mb-1">Delivery</div>
                <div>5-7 business days</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-12 mb-20">
          <div className="flex gap-12 mb-10 border-b border-slate-200">
            <button className="pb-4 border-b-2 border-blue-600 font-semibold text-slate-900">
              Specifications
            </button>
            <button className="pb-4 text-slate-600">Case Studies</button>
            <button className="pb-4 text-slate-600">Support</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 text-sm">
            <div className="flex justify-between py-3 border-b border-slate-100">
              <span className="text-slate-600">Processor</span>
              <span className="text-slate-900 font-medium">Intel Core i7-13700K</span>
            </div>
            <div className="flex justify-between py-3 border-b border-slate-100">
              <span className="text-slate-600">Memory</span>
              <span className="text-slate-900 font-medium">16GB DDR5</span>
            </div>
            <div className="flex justify-between py-3 border-b border-slate-100">
              <span className="text-slate-600">Storage</span>
              <span className="text-slate-900 font-medium">512GB NVMe SSD</span>
            </div>
            <div className="flex justify-between py-3 border-b border-slate-100">
              <span className="text-slate-600">Graphics</span>
              <span className="text-slate-900 font-medium">Integrated UHD 770</span>
            </div>
            <div className="flex justify-between py-3 border-b border-slate-100">
              <span className="text-slate-600">Warranty</span>
              <span className="text-slate-900 font-medium">3 Years On-Site</span>
            </div>
            <div className="flex justify-between py-3 border-b border-slate-100">
              <span className="text-slate-600">Certification</span>
              <span className="text-slate-900 font-medium">ISO 9001, Energy Star</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white border border-slate-200 hover:border-slate-300 transition-colors">
                <div className="aspect-square bg-slate-50 border-b border-slate-200"></div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">Workstation Model {i}</h3>
                  <p className="text-slate-600 text-sm mb-3">Professional grade</p>
                  <p className="text-slate-900 font-semibold">From $1,999</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}