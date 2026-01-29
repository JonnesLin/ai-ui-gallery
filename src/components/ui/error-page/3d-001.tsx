export default function ThreeDErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-4 perspective-1000">
      <style>{`
        @keyframes rotate3d {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          100% { transform: rotateY(360deg) rotateX(360deg); }
        }
        @keyframes float3d {
          0%, 100% { transform: translateY(0px) translateZ(0px); }
          50% { transform: translateY(-20px) translateZ(20px); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-3d {
          transform-style: preserve-3d;
        }
      `}</style>

      <div className="text-center max-w-3xl">
        <div className="mb-12 transform-3d animate-[float3d_4s_ease-in-out_infinite]">
          <div className="relative inline-block transform-3d">
            <div className="text-[12rem] font-black text-white leading-none relative" style={{
              textShadow: `
                1px 1px 0 #e879f9,
                2px 2px 0 #e879f9,
                3px 3px 0 #d946ef,
                4px 4px 0 #d946ef,
                5px 5px 0 #c026d3,
                6px 6px 0 #c026d3,
                7px 7px 0 #a21caf,
                8px 8px 0 #a21caf,
                9px 9px 0 #86198f,
                10px 10px 30px rgba(0,0,0,0.5)
              `
            }}>
              404
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl -z-10 transform-3d" style={{
              transform: 'translateZ(-50px)'
            }}></div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 mb-10 shadow-2xl transform-3d" style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1)'
        }}>
          <div className="mb-6">
            <div className="inline-block bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl p-4 mb-6 shadow-lg transform-3d hover:scale-110 transition-transform" style={{
              boxShadow: '0 10px 25px rgba(236, 72, 153, 0.5)'
            }}>
              <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">
            Lost in the 3D Space
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
            This page exists in another dimension.
            Our reality anchors couldn't locate it in the current space-time continuum.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {['X', 'Y', 'Z'].map((axis, i) => (
              <div key={axis} className="bg-white/5 border border-white/20 rounded-lg p-4 backdrop-blur-sm transform-3d hover:scale-105 transition-transform" style={{
                boxShadow: 'inset 0 2px 10px rgba(255, 255, 255, 0.1)'
              }}>
                <div className="text-pink-400 text-sm mb-1">AXIS {axis}</div>
                <div className="text-white font-bold">ERROR</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-6 justify-center flex-wrap">
          <button className="px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl shadow-lg transform-3d hover:scale-110 hover:shadow-2xl transition-all" style={{
            boxShadow: '0 10px 30px rgba(236, 72, 153, 0.5)'
          }}>
            Return to Reality
          </button>
          <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 transform-3d hover:scale-110 hover:bg-white/20 transition-all">
            Recalibrate
          </button>
        </div>
      </div>
    </div>
  );
}
