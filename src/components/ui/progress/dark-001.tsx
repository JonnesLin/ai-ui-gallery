import { Progress } from './Progress';
import { CircularProgress } from './CircularProgress';

export default function DarkProgress() {
  return (
    <div className="min-h-screen bg-gray-950 p-8 md:p-12">
      <div className="max-w-xl mx-auto space-y-10">
        {/* Basic Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest">Basic Progress</h3>
          <div className="space-y-4">
            <Progress value={25} color="neutral" size="sm" />
            <Progress value={50} color="neutral" size="sm" />
            <Progress value={75} color="neutral" size="sm" />
          </div>
        </div>

        {/* With Label */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest">With Label</h3>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 space-y-4">
            <Progress value={65} color="neutral" size="md" label="Syncing data..." showValue />
          </div>
        </div>

        {/* Accent Colors */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest">Accent Colors</h3>
          <div className="space-y-4">
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
              <Progress value={80} color="primary" size="sm" label="Primary" showValue />
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
              <Progress value={100} color="success" size="sm" label="Success" showValue />
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
              <Progress value={60} color="warning" size="sm" label="Warning" showValue />
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
              <Progress value={25} color="error" size="sm" label="Error" showValue />
            </div>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest">Circular</h3>
          <div className="flex items-center justify-around">
            <CircularProgress value={25} size={96} strokeWidth={8} color="primary" showValue />
            <CircularProgress value={75} size={96} strokeWidth={8} color="success" showValue />
            <CircularProgress value={100} size={96} strokeWidth={8} color="warning" showValue />
          </div>
        </div>

        {/* Animated Stripe */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest">Animated Stripe</h3>
          <Progress value={70} color="primary" size="lg" variant="animated" />
        </div>

        {/* Segmented */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest">Segmented</h3>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className={`flex-1 h-3 rounded-sm ${i <= 5 ? 'bg-cyan-500' : 'bg-gray-800'}`}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>0</span>
            <span>62.5% complete</span>
            <span>100</span>
          </div>
        </div>

        {/* Multi-bar Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest">Storage Breakdown</h3>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden flex">
              <div className="h-full w-[40%] bg-blue-500" />
              <div className="h-full w-[20%] bg-purple-500" />
              <div className="h-full w-[15%] bg-pink-500" />
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-xs">
              <span className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Documents 40%
              </span>
              <span className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Media 20%
              </span>
              <span className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 rounded-full bg-pink-500" />
                Apps 15%
              </span>
              <span className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 rounded-full bg-gray-800" />
                Free 25%
              </span>
            </div>
          </div>
        </div>

        {/* Indeterminate */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest">Indeterminate</h3>
          <Progress color="primary" size="xs" />
        </div>
      </div>
    </div>
  )
}
