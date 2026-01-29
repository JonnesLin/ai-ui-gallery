import { useState } from 'react';
import { Alert } from './Alert';

export default function DarkAlert() {
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
    <div className="min-h-screen bg-zinc-950 p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-4">
        {alerts.success && (
          <Alert
            type="success"
            theme="dark"
            title="Success"
            onClose={() => dismiss('success')}
          >
            Your changes have been saved successfully.
          </Alert>
        )}

        {alerts.info && (
          <Alert
            type="info"
            theme="dark"
            title="Information"
            onClose={() => dismiss('info')}
          >
            A new software update is available for download.
          </Alert>
        )}

        {alerts.warning && (
          <Alert
            type="warning"
            theme="dark"
            title="Warning"
            onClose={() => dismiss('warning')}
          >
            Your storage is almost full. Consider upgrading your plan.
          </Alert>
        )}

        {alerts.error && (
          <Alert
            type="error"
            theme="dark"
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
