import { Progress } from './Progress';
import { CircularProgress } from './CircularProgress';

export default function MinimalistProgress() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-12">
      <div className="max-w-xl mx-auto space-y-12">
        {/* Basic Linear Progress */}
        <div className="space-y-4">
          <span className="text-xs tracking-widest text-gray-400 uppercase">Linear Progress</span>
          <div className="space-y-4">
            <Progress value={25} color="neutral" size="xs" />
            <Progress value={50} color="neutral" size="xs" />
            <Progress value={75} color="neutral" size="xs" />
            <Progress value={100} color="neutral" size="xs" />
          </div>
        </div>

        {/* With Labels */}
        <div className="space-y-6">
          <span className="text-xs tracking-widest text-gray-400 uppercase">With Labels</span>
          <div className="space-y-6">
            <Progress value={25} color="neutral" size="xs" label="Uploading" showValue />
            <Progress value={65} color="neutral" size="xs" label="Processing" showValue />
            <Progress value={100} color="neutral" size="xs" label="Complete" showValue />
          </div>
        </div>

        {/* Thickness Variants */}
        <div className="space-y-4">
          <span className="text-xs tracking-widest text-gray-400 uppercase">Thickness</span>
          <div className="space-y-4">
            <Progress value={60} color="neutral" size="xs" />
            <Progress value={60} color="neutral" size="sm" />
            <Progress value={60} color="neutral" size="md" />
          </div>
        </div>

        {/* Circular Progress */}
        <div className="space-y-4">
          <span className="text-xs tracking-widest text-gray-400 uppercase">Circular</span>
          <div className="flex items-center gap-12">
            <CircularProgress value={25} size={64} strokeWidth={1} color="neutral" showValue />
            <CircularProgress value={60} size={64} strokeWidth={1} color="neutral" showValue />
            <CircularProgress value={100} size={64} strokeWidth={1} color="neutral" showValue />
          </div>
        </div>

        {/* Task Progress */}
        <div className="space-y-4">
          <span className="text-xs tracking-widest text-gray-400 uppercase">Task Progress</span>
          <div className="border-t border-gray-100 pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-gray-900">Design System</span>
              <span className="text-xs text-gray-400">4 of 8 tasks</span>
            </div>
            <Progress value={4} max={8} color="neutral" size="xs" />
          </div>
        </div>

        {/* Steps Progress */}
        <div className="space-y-4">
          <span className="text-xs tracking-widest text-gray-400 uppercase">Steps</span>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-900" />
            <div className="w-2 h-2 border border-gray-900 bg-gray-900" />
            <div className="flex-1 h-px bg-gray-900" />
            <div className="w-2 h-2 border border-gray-900 bg-gray-900" />
            <div className="flex-1 h-px bg-gray-900" />
            <div className="w-2 h-2 border border-gray-900" />
            <div className="flex-1 h-px bg-gray-100" />
            <div className="w-2 h-2 border border-gray-200" />
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>Details</span>
            <span>Payment</span>
            <span>Review</span>
            <span>Complete</span>
          </div>
        </div>

        {/* Indeterminate */}
        <div className="space-y-4">
          <span className="text-xs tracking-widest text-gray-400 uppercase">Indeterminate</span>
          <Progress color="neutral" size="xs" />
        </div>
      </div>
    </div>
  )
}
