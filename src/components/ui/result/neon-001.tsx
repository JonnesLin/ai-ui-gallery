export default function NeonResult() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Success State */}
        <div className="bg-gray-900 border-2 border-green-500 rounded-2xl p-8 text-center space-y-6 relative" style={{
          boxShadow: '0 0 30px rgba(34, 197, 94, 0.5), inset 0 0 20px rgba(34, 197, 94, 0.1)'
        }}>
          <div className="w-24 h-24 mx-auto rounded-full border-4 border-green-500 bg-green-500/10 flex items-center justify-center relative" style={{
            boxShadow: '0 0 40px rgba(34, 197, 94, 0.8), inset 0 0 20px rgba(34, 197, 94, 0.3)'
          }}>
            <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{
              filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.8))'
            }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-green-500" style={{
            textShadow: '0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.6)'
          }}>
            SUCCESS
          </h2>
          <p className="text-green-400/80">Operation completed successfully</p>
          <button className="w-full py-4 bg-green-500/20 border-2 border-green-500 text-green-500 rounded-xl font-bold uppercase tracking-wider hover:bg-green-500/30 transition-all" style={{
            boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)'
          }}>
            Continue
          </button>
        </div>

        {/* Error State */}
        <div className="bg-gray-900 border-2 border-red-500 rounded-2xl p-8 text-center space-y-6 relative" style={{
          boxShadow: '0 0 30px rgba(239, 68, 68, 0.5), inset 0 0 20px rgba(239, 68, 68, 0.1)'
        }}>
          <div className="w-24 h-24 mx-auto rounded-full border-4 border-red-500 bg-red-500/10 flex items-center justify-center relative" style={{
            boxShadow: '0 0 40px rgba(239, 68, 68, 0.8), inset 0 0 20px rgba(239, 68, 68, 0.3)'
          }}>
            <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{
              filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.8))'
            }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-red-500" style={{
            textShadow: '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.6)'
          }}>
            ERROR
          </h2>
          <p className="text-red-400/80">System failure detected</p>
          <div className="flex gap-4">
            <button className="flex-1 py-4 bg-red-500/20 border-2 border-red-500 text-red-500 rounded-xl font-bold uppercase tracking-wider hover:bg-red-500/30 transition-all" style={{
              boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)'
            }}>
              Retry
            </button>
            <button className="flex-1 py-4 bg-red-500/10 border-2 border-red-500/50 text-red-500/70 rounded-xl font-bold uppercase tracking-wider hover:bg-red-500/20 transition-all">
              Back
            </button>
          </div>
        </div>

        {/* Warning State */}
        <div className="bg-gray-900 border-2 border-yellow-500 rounded-2xl p-8 text-center space-y-6 relative" style={{
          boxShadow: '0 0 30px rgba(234, 179, 8, 0.5), inset 0 0 20px rgba(234, 179, 8, 0.1)'
        }}>
          <div className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-500 bg-yellow-500/10 flex items-center justify-center relative animate-pulse" style={{
            boxShadow: '0 0 40px rgba(234, 179, 8, 0.8), inset 0 0 20px rgba(234, 179, 8, 0.3)'
          }}>
            <svg className="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{
              filter: 'drop-shadow(0 0 8px rgba(234, 179, 8, 0.8))'
            }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-yellow-500" style={{
            textShadow: '0 0 20px rgba(234, 179, 8, 0.8), 0 0 40px rgba(234, 179, 8, 0.6)'
          }}>
            WARNING
          </h2>
          <p className="text-yellow-400/80">Authorization required</p>
          <button className="w-full py-4 bg-yellow-500/20 border-2 border-yellow-500 text-yellow-500 rounded-xl font-bold uppercase tracking-wider hover:bg-yellow-500/30 transition-all" style={{
            boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)'
          }}>
            Proceed
          </button>
        </div>

        {/* Info State */}
        <div className="bg-gray-900 border-2 border-cyan-500 rounded-2xl p-8 text-center space-y-6 relative" style={{
          boxShadow: '0 0 30px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(6, 182, 212, 0.1)'
        }}>
          <div className="w-24 h-24 mx-auto rounded-full border-4 border-cyan-500 bg-cyan-500/10 flex items-center justify-center relative" style={{
            boxShadow: '0 0 40px rgba(6, 182, 212, 0.8), inset 0 0 20px rgba(6, 182, 212, 0.3)'
          }}>
            <svg className="w-12 h-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{
              filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))'
            }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-cyan-500" style={{
            textShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.6)'
          }}>
            INFO
          </h2>
          <p className="text-cyan-400/80">Data update notification</p>
          <button className="w-full py-4 bg-cyan-500/20 border-2 border-cyan-500 text-cyan-500 rounded-xl font-bold uppercase tracking-wider hover:bg-cyan-500/30 transition-all" style={{
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
          }}>
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
}