import { useToast, ToastContainer } from './index';

export default function GradientToastDemo() {
  const { toasts, addToast, removeToast } = useToast();

  const showSuccessToast = () => {
    addToast({
      type: 'success',
      theme: 'gradient',
      title: 'Success!',
      description: 'Your profile has been updated.',
      position: 'top-right',
    });
  };

  const showErrorToast = () => {
    addToast({
      type: 'error',
      theme: 'gradient',
      title: 'Error',
      description: 'Connection lost. Retrying...',
      position: 'top-right',
    });
  };

  const showInfoToast = () => {
    addToast({
      type: 'info',
      theme: 'gradient',
      title: 'New Message',
      description: 'You have 3 unread messages.',
      position: 'bottom-right',
    });
  };

  const showWarningToast = () => {
    addToast({
      type: 'warning',
      theme: 'gradient',
      title: 'Warning',
      description: 'Memory usage is high.',
      position: 'bottom-right',
    });
  };

  return (
    <div className="relative h-[500px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Dashboard
        </h2>
        <p className="text-slate-500 mb-6">Your workspace content goes here...</p>

        <div className="space-y-2">
          <button
            onClick={showSuccessToast}
            className="block px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm rounded-xl hover:from-emerald-600 hover:to-teal-600"
          >
            Show Success Toast
          </button>
          <button
            onClick={showErrorToast}
            className="block px-4 py-2 bg-gradient-to-r from-red-500 to-rose-500 text-white text-sm rounded-xl hover:from-red-600 hover:to-rose-600"
          >
            Show Error Toast
          </button>
          <button
            onClick={showInfoToast}
            className="block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm rounded-xl hover:from-blue-600 hover:to-indigo-600"
          >
            Show Info Toast
          </button>
          <button
            onClick={showWarningToast}
            className="block px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm rounded-xl hover:from-amber-600 hover:to-orange-600"
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
        @keyframes gradientSlide {
          from {
            opacity: 0;
            transform: translateX(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
