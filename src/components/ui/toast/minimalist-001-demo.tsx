import { useToast, ToastContainer } from './index';

export default function MinimalistToastDemo() {
  const { toasts, addToast, removeToast } = useToast();

  const showSuccessToast = () => {
    addToast({
      type: 'success',
      theme: 'minimalist',
      title: 'Changes saved',
      description: 'Your settings have been updated.',
      position: 'top-right',
    });
  };

  const showErrorToast = () => {
    addToast({
      type: 'error',
      theme: 'minimalist',
      title: 'Upload failed',
      description: 'Please try again later.',
      position: 'top-right',
    });
  };

  const showInfoToast = () => {
    addToast({
      type: 'info',
      theme: 'minimalist',
      title: 'New update available',
      description: 'Version 2.0 is ready to install.',
      position: 'bottom-right',
    });
  };

  const showWarningToast = () => {
    addToast({
      type: 'warning',
      theme: 'minimalist',
      title: 'Low storage',
      description: 'Only 2GB remaining.',
      position: 'bottom-right',
    });
  };

  return (
    <div className="relative h-[500px] bg-white rounded-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-light text-neutral-900 mb-4">Dashboard</h2>
        <p className="text-neutral-500 mb-6">Your workspace content goes here...</p>

        <div className="space-y-2">
          <button
            onClick={showSuccessToast}
            className="block px-4 py-2 bg-neutral-900 text-white text-sm rounded hover:bg-neutral-800"
          >
            Show Success Toast
          </button>
          <button
            onClick={showErrorToast}
            className="block px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700"
          >
            Show Error Toast
          </button>
          <button
            onClick={showInfoToast}
            className="block px-4 py-2 bg-neutral-400 text-white text-sm rounded hover:bg-neutral-500"
          >
            Show Info Toast
          </button>
          <button
            onClick={showWarningToast}
            className="block px-4 py-2 bg-amber-500 text-white text-sm rounded hover:bg-amber-600"
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
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
