import { CTA, CTATitle, CTADescription, CTAActions } from './index';

export default function MaterialCTA() {
  return (
    <CTA theme="material" layout="left" variant="simple" className="bg-gray-100">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-8 md:p-12">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div>
              <CTATitle className="text-2xl md:text-3xl font-medium text-white mb-2">
                Ready to elevate your experience?
              </CTATitle>
              <CTADescription className="text-indigo-100 text-lg mb-0 mx-0">
                Join millions who trust our platform for their daily needs.
              </CTADescription>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Secure</h3>
                <p className="text-sm text-gray-500">Bank-level encryption</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Fast</h3>
                <p className="text-sm text-gray-500">Lightning performance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Support</h3>
                <p className="text-sm text-gray-500">24/7 assistance</p>
              </div>
            </div>
          </div>

          <CTAActions className="justify-start">
            <button className="flex-1 px-6 py-3 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow hover:shadow-md">
              Get Started Now
            </button>
            <button className="flex-1 px-6 py-3 text-indigo-600 font-medium rounded border border-indigo-200 hover:bg-indigo-50 active:bg-indigo-100 transition-colors">
              Schedule Demo
            </button>
          </CTAActions>
        </div>
      </div>
    </CTA>
  );
}
