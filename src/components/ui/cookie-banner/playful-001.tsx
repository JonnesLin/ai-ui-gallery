export default function PlayfulCookieBanner() {
  return (
    <div className="min-h-screen bg-amber-50 flex items-end">
      <div className="fixed bottom-4 left-4 right-4 z-50 max-w-lg mx-auto">
        <div className="bg-white rounded-2xl border-2 border-orange-200 shadow-xl shadow-orange-200/30 p-6">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="text-4xl">&#127850;</div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Cookies? Yes please!
              </h3>
              <p className="text-sm text-gray-600">
                We use cookies to make things awesome for you. No raisins, we promise!{' '}
                <a href="#privacy" className="text-orange-500 hover:text-orange-600 underline underline-offset-2">
                  Learn more
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 w-full">
              <button
                onClick={() => console.log('Declined')}
                className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-200"
              >
                No thanks
              </button>
              <button
                onClick={() => console.log('Accepted')}
                className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-colors duration-200 shadow-md shadow-orange-500/30"
              >
                Yum, accept!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
