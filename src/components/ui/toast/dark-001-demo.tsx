import { useToast, ToastContainer } from './index';

export default function DarkToastDemo() {
  const { toasts, addToast, removeToast } = useToast();

  const showSuccessToast = () => {
    addToast({
      type: 'success',
      theme: 'dark',
      title: 'Success',
      description: 'Your changes have been saved.',
      position: 'top-right',
    });
  };

  const showErrorToast = () => {
    addToast({
      type: 'error',
      theme: 'dark',
      title: 'Error',
      description: 'Failed to process your request.',
      position: 'top-right',
    });
  };

  const showInfoToast = () => {
    addToast({
      type: 'info',
      theme: 'dark',
      title: 'Update Available',
      description: 'A new version is ready.',
      position: 'bottom-right',
    });
  };

  const showWarningToast = () => {
    addToast({
      type: 'warning',
      theme: 'dark',
      title: 'Warning',
      description: 'Your session will expire soon.',
      position: 'bottom-right',
    });
  };

  return (
    <div className="relative h-[500px] bg-zinc-950 rounded-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Dashboard</h2>
        <p className="text-zinc-400 mb-6">Your workspace content goes here...</p>

        <div className="space-y-2">
          <button
            onClick={showSuccessToast}
            className="block px-4 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700"
          >
            Show Success Toast
          </button>
          <button
            onClick={showErrorToast}
            className="block px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700"
          >
            Show Error Toast
          </button>
          <button
            onClick={showInfoToast}
            className="block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
          >
            Show Info Toast
          </button>
          <button
            onClick={showWarningToast}
            className="block px-4 py-2 bg-amber-600 text-white text-sm rounded-lg hover:bg-amber-700"
          >
            Show Warning Toast
          </button>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        toasts={toasts['top-right']}
        onClose={(id) => removeToast(id, 'top-right')}
      />
      <ToastContainer
        position="bottom-right"
        toasts={toasts['bottom-right']}
        onClose={(id) => removeToast(id, 'bottom-right')}
      />

      <style>{`
        @keyframes darkSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
