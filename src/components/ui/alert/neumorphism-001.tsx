import { useState } from 'react';
import { Alert } from './Alert';

export default function NeumorphismAlert() {
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
    <div className="min-h-screen bg-[#e0e5ec] p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-6">
        {alerts.success && (
          <Alert
            type="success"
            theme="neumorphism"
            title="Success"
            onClose={() => dismiss('success')}
          >
            Your changes have been saved successfully.
          </Alert>
        )}

        {alerts.info && (
          <Alert
            type="info"
            theme="neumorphism"
            title="Information"
            onClose={() => dismiss('info')}
          >
            A new software update is available for download.
          </Alert>
        )}

        {alerts.warning && (
          <Alert
            type="warning"
            theme="neumorphism"
            title="Warning"
            onClose={() => dismiss('warning')}
          >
            Your storage is almost full. Consider upgrading your plan.
          </Alert>
        )}

        {alerts.error && (
          <Alert
            type="error"
            theme="neumorphism"
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
