import { Progress } from './Progress';
import { CircularProgress } from './CircularProgress';

export default function GradientProgress() {
  return (
    <div className="min-h-screen bg-slate-900 p-8 md:p-12">
      <div className="max-w-xl mx-auto space-y-10">
        {/* Basic Gradient Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Gradient Progress</h3>
          <div className="space-y-4">
            <Progress value={25} color="primary" size="md" />
            <Progress value={50} color="success" size="md" />
            <Progress value={75} color="warning" size="md" />
          </div>
        </div>

        {/* Rainbow Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Rainbow</h3>
          <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full w-[85%] rounded-full"
              style={{
                background: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)'
              }}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Processing spectrum...</span>
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-semibold">85%</span>
          </div>
        </div>

        {/* Animated Gradient */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Animated Gradient</h3>
          <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full w-[70%] rounded-full animate-[gradientShift_3s_ease_infinite]"
              style={{
                backgroundSize: '200% 100%',
                backgroundImage: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)'
              }}
            />
          </div>
          <style>{`
            @keyframes gradientShift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
          `}</style>
        </div>

        {/* With Label Card */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest">With Label</h3>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700">
            <Progress value={65} color="primary" size="md" label="Uploading files..." showValue />
          </div>
        </div>

        {/* Status Colors */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Status Gradients</h3>
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <Progress value={100} color="success" size="sm" label="Success" showValue />
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <Progress value={70} color="warning" size="sm" label="Warning" showValue />
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <Progress value={35} color="error" size="sm" label="Error" showValue />
            </div>
          </div>
        </div>

        {/* Circular Gradient */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Circular</h3>
          <div className="flex items-center justify-around">
            <div className="relative w-28 h-28">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 112 112">
                <defs>
                  <linearGradient id="circGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f472b6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <circle cx="56" cy="56" r="48" fill="none" stroke="#334155" strokeWidth="8" />
                <circle
                  cx="56"
                  cy="56"
                  r="48"
                  fill="none"
                  stroke="url(#circGrad1)"
                  strokeWidth="8"
                  strokeDasharray="301.59"
                  strokeDashoffset="226.19"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">25%</span>
            </div>
            <div className="relative w-28 h-28">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 112 112">
                <defs>
                  <linearGradient id="circGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <circle cx="56" cy="56" r="48" fill="none" stroke="#334155" strokeWidth="8" />
                <circle
                  cx="56"
                  cy="56"
                  r="48"
                  fill="none"
                  stroke="url(#circGrad2)"
                  strokeWidth="8"
                  strokeDasharray="301.59"
                  strokeDashoffset="75.4"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">75%</span>
            </div>
          </div>
        </div>

        {/* Glow Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Glow Effect</h3>
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full w-[80%] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
              style={{ boxShadow: '0 0 20px #a855f7, 0 0 40px #d946ef' }}
            />
          </div>
        </div>

        {/* Multi-segment */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Multi-segment</h3>
          <div className="h-4 bg-slate-800 rounded-full overflow-hidden flex">
            <div className="h-full w-[30%] bg-gradient-to-r from-rose-500 to-pink-500" />
            <div className="h-full w-[25%] bg-gradient-to-r from-pink-500 to-purple-500" />
            <div className="h-full w-[20%] bg-gradient-to-r from-purple-500 to-indigo-500" />
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>Videos 30%</span>
            <span>Images 25%</span>
            <span>Documents 20%</span>
            <span>Free 25%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
