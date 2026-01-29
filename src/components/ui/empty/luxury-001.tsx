import { Empty } from './Empty';

export default function LuxuryEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <Empty
        theme="luxury"
        image={
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 blur-2xl opacity-20"></div>
            <div className="relative w-full h-full border-2 border-amber-400/50 rounded-full flex items-center justify-center">
              <div className="w-5/6 h-5/6 border border-amber-500/30 rounded-full flex items-center justify-center">
                <svg
                  className="w-1/2 h-1/2 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
            </div>
          </>
        }
        title="Your Collection Awaits"
        description="Curate your exclusive selection. Begin your journey with pieces that define excellence."
        action={
          <>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-6"></div>
            <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-medium rounded-sm hover:from-amber-500 hover:to-yellow-500 transition-all shadow-[0_0_30px_rgba(251,191,36,0.2)] hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]">
              Begin Collection
            </button>
          </>
        }
      />
    </div>
  );
}
