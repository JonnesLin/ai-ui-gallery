import { Empty } from './Empty';

export default function CyberpunkEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative">
        <Empty
          theme="cyberpunk"
          image={
            <>
              <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full border-4 border-cyan-400 flex items-center justify-center clip-path-polygon">
                <svg
                  className="w-1/2 h-1/2 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-pink-500 shadow-[0_0_10px_#ec4899]"></div>
            </>
          }
          title="ACCESS DENIED"
          description="No data stream detected in this sector. Initialize new protocol to proceed."
          action={
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold uppercase tracking-wider hover:from-cyan-400 hover:to-pink-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
              Initialize
            </button>
          }
        />
      </div>
    </div>
  );
}
