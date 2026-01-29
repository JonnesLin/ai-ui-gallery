import { useState } from 'react';
import { Alert } from './Alert';

export default function GlassmorphismAlert() {
  const [alerts, setAlerts] = useState({
    success: true,
    info: true,
    warning: true,
    error: true,
  });

  const dismiss = (type: keyof typeof alerts) => {
    setAlerts((prev) => ({ ...prev, [type]: false }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-800 p-8 md:p-12 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-4">
        {alerts.success && (
          <Alert
            type="success"
            theme="glassmorphism"
            title="Success"
            onClose={() => dismiss('success')}
          >
            Your changes have been saved successfully.
          </Alert>
        )}

        {alerts.info && (
          <Alert
            type="info"
            theme="glassmorphism"
            title="Information"
            onClose={() => dismiss('info')}
          >
            A new software update is available for download.
          </Alert>
        )}

        {alerts.warning && (
          <Alert
            type="warning"
            theme="glassmorphism"
            title="Warning"
            onClose={() => dismiss('warning')}
          >
            Your storage is almost full. Consider upgrading your plan.
          </Alert>
        )}

        {alerts.error && (
          <Alert
            type="error"
            theme="glassmorphism"
            title="Error"
            onClose={() => dismiss('error')}
          >
            There was a problem processing your request. Please try again.
          </Alert>
        )}
      </div>
    </div>
  );
}
