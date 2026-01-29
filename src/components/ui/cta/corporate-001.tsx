export default function CorporateCTA() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Enterprise Ready
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Scale Your Business with Confidence
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Trusted by Fortune 500 companies worldwide. Our enterprise solutions deliver measurable results with industry-leading security and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                Request Demo
              </button>
              <button className="px-6 py-3 text-slate-700 font-semibold rounded-lg border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">99.9%</div>
                <div className="text-sm text-slate-500">Uptime SLA</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-slate-500">Enterprise Clients</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">SOC 2</div>
                <div className="text-sm text-slate-500">Certified</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-sm text-slate-500">Priority Support</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-400 uppercase tracking-wider">Trusted by</span>
              <div className="flex gap-6 opacity-50">
                <div className="h-6 w-16 bg-slate-300 rounded"></div>
                <div className="h-6 w-20 bg-slate-300 rounded"></div>
                <div className="h-6 w-14 bg-slate-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
