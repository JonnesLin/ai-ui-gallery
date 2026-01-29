export default function SketchResult() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6" style={{
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.03) 19px, rgba(0,0,0,0.03) 20px),
                       repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(0,0,0,0.03) 19px, rgba(0,0,0,0.03) 20px)`
    }}>
      <div className="w-full max-w-md space-y-8">
        {/* Success State */}
        <div className="bg-white border-4 border-black p-8 text-center space-y-5 relative" style={{
          borderStyle: 'solid',
          borderImage: 'repeating-linear-gradient(45deg, black 0, black 10px, transparent 10px, transparent 15px) 4',
          boxShadow: '8px 8px 0 rgba(0,0,0,0.1)'
        }}>
          <div className="w-24 h-24 mx-auto border-4 border-green-600 rounded-full flex items-center justify-center relative" style={{
            borderStyle: 'dashed'
          }}>
            <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'cursive' }}>
            Success!
          </h2>
          <p className="text-gray-700 text-lg">Task completed successfully</p>
          <button className="px-10 py-3 border-3 border-black bg-green-100 text-black font-bold text-lg relative hover:translate-x-1 hover:translate-y-1 transition-transform" style={{
            boxShadow: '4px 4px 0 black'
          }}>
            Continue
          </button>
        </div>

        {/* Error State */}
        <div className="bg-white border-4 border-black p-8 text-center space-y-5 relative" style={{
          borderStyle: 'solid',
          borderImage: 'repeating-linear-gradient(45deg, black 0, black 10px, transparent 10px, transparent 15px) 4',
          boxShadow: '8px 8px 0 rgba(0,0,0,0.1)'
        }}>
          <div className="w-24 h-24 mx-auto border-4 border-red-600 rounded-full flex items-center justify-center relative" style={{
            borderStyle: 'dashed'
          }}>
            <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'cursive' }}>
            Error
          </h2>
          <p className="text-gray-700 text-lg">Something went wrong</p>
          <div className="flex gap-4">
            <button className="flex-1 px-6 py-3 border-3 border-black bg-red-100 text-black font-bold relative hover:translate-x-1 hover:translate-y-1 transition-transform" style={{
              boxShadow: '4px 4px 0 black'
            }}>
              Retry
            </button>
            <button className="flex-1 px-6 py-3 border-3 border-black bg-gray-100 text-black font-bold relative hover:translate-x-1 hover:translate-y-1 transition-transform" style={{
              boxShadow: '4px 4px 0 black'
            }}>
              Back
            </button>
          </div>
        </div>

        {/* Warning State */}
        <div className="bg-white border-4 border-black p-8 text-center space-y-5 relative" style={{
          borderStyle: 'solid',
          borderImage: 'repeating-linear-gradient(45deg, black 0, black 10px, transparent 10px, transparent 15px) 4',
          boxShadow: '8px 8px 0 rgba(0,0,0,0.1)'
        }}>
          <div className="w-24 h-24 mx-auto border-4 border-yellow-600 flex items-center justify-center relative" style={{
            borderStyle: 'dashed',
            transform: 'rotate(45deg)'
          }}>
            <svg className="w-12 h-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{
              transform: 'rotate(-45deg)'
            }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'cursive' }}>
            Warning
          </h2>
          <p className="text-gray-700 text-lg">Please review before proceeding</p>
          <button className="px-10 py-3 border-3 border-black bg-yellow-100 text-black font-bold text-lg relative hover:translate-x-1 hover:translate-y-1 transition-transform" style={{
            boxShadow: '4px 4px 0 black'
          }}>
            Proceed
          </button>
        </div>

        {/* Info State */}
        <div className="bg-white border-4 border-black p-8 text-center space-y-5 relative" style={{
          borderStyle: 'solid',
          borderImage: 'repeating-linear-gradient(45deg, black 0, black 10px, transparent 10px, transparent 15px) 4',
          boxShadow: '8px 8px 0 rgba(0,0,0,0.1)'
        }}>
          <div className="w-24 h-24 mx-auto border-4 border-blue-600 rounded-full flex items-center justify-center relative" style={{
            borderStyle: 'dashed'
          }}>
            <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'cursive' }}>
            Info
          </h2>
          <p className="text-gray-700 text-lg">Here's something to know</p>
          <button className="px-10 py-3 border-3 border-black bg-blue-100 text-black font-bold text-lg relative hover:translate-x-1 hover:translate-y-1 transition-transform" style={{
            boxShadow: '4px 4px 0 black'
          }}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}