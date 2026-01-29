/**
 * Toast 组件使用示例
 *
 * 这个文件展示了在实际应用中如何使用 Toast 组件系统
 */

import { useToast, ToastContainer } from './index';

export default function ExampleUsage() {
  const { toasts, addToast, removeToast } = useToast();

  // 示例 1: 基础使用
  const basicExample = () => {
    addToast({
      type: 'success',
      theme: 'minimalist',
      title: 'Success',
      description: 'Operation completed successfully.',
    });
  };

  // 示例 2: 表单提交成功
  const handleFormSubmit = async () => {
    try {
      // 模拟 API 调用
      await new Promise((resolve) => setTimeout(resolve, 1000));

      addToast({
        type: 'success',
        theme: 'dark',
        title: 'Form submitted',
        description: 'Your data has been saved successfully.',
        position: 'top-right',
        duration: 3000,
      });
    } catch (error) {
      addToast({
        type: 'error',
        theme: 'dark',
        title: 'Submission failed',
        description: 'Please try again later.',
        position: 'top-right',
      });
    }
  };

  // 示例 3: 带动作按钮的通知
  const notificationWithAction = () => {
    addToast({
      type: 'info',
      theme: 'gradient',
      title: 'New message received',
      description: 'You have a new message from John.',
      position: 'bottom-right',
      action: (
        <button
          onClick={() => console.log('View message')}
          className="text-sm font-medium underline hover:no-underline"
        >
          View message
        </button>
      ),
    });
  };

  // 示例 4: 警告提示
  const warningExample = () => {
    addToast({
      type: 'warning',
      theme: 'minimalist',
      title: 'Session expiring soon',
      description: 'Your session will expire in 5 minutes.',
      position: 'top-center',
      duration: 10000,
      action: (
        <button
          onClick={() => console.log('Extend session')}
          className="text-sm font-medium text-amber-600 underline hover:no-underline"
        >
          Extend session
        </button>
      ),
    });
  };

  // 示例 5: 不自动关闭的错误提示
  const criticalError = () => {
    addToast({
      type: 'error',
      theme: 'dark',
      title: 'Critical Error',
      description: 'Connection to server lost. Please check your internet connection.',
      position: 'top-center',
      duration: 0, // 不自动关闭
      closable: true,
    });
  };

  // 示例 6: 加载提示（不可关闭）
  const loadingExample = () => {
    const toastId = addToast({
      type: 'info',
      theme: 'gradient',
      title: 'Processing...',
      description: 'Please wait while we process your request.',
      position: 'bottom-center',
      duration: 0,
      closable: false,
    });

    // 模拟加载完成后关闭
    setTimeout(() => {
      removeToast(toastId, 'bottom-center');
      addToast({
        type: 'success',
        theme: 'gradient',
        title: 'Processing complete',
        description: 'Your request has been processed.',
        position: 'bottom-center',
      });
    }, 3000);
  };

  // 示例 7: 多个位置的通知
  const multiPositionExample = () => {
    const positions = [
      'top-left',
      'top-center',
      'top-right',
      'bottom-left',
      'bottom-center',
      'bottom-right',
    ] as const;

    positions.forEach((pos, index) => {
      setTimeout(() => {
        addToast({
          type: 'info',
          theme: 'minimalist',
          title: `Toast at ${pos}`,
          description: `This is a toast at ${pos}`,
          position: pos,
          duration: 5000,
        });
      }, index * 500);
    });
  };

  return (
    <div className="relative h-screen bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 overflow-auto p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Toast Usage Examples</h1>
          <p className="text-gray-500 mb-8">Click buttons to see different toast examples</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Example 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Basic Usage</h3>
              <p className="text-sm text-gray-500 mb-4">Simple success notification</p>
              <button
                onClick={basicExample}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Show Basic Toast
              </button>
            </div>

            {/* Example 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Form Submission</h3>
              <p className="text-sm text-gray-500 mb-4">Success/error handling</p>
              <button
                onClick={handleFormSubmit}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                Submit Form
              </button>
            </div>

            {/* Example 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 mb-2">With Action Button</h3>
              <p className="text-sm text-gray-500 mb-4">Notification with action</p>
              <button
                onClick={notificationWithAction}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
              >
                Show Notification
              </button>
            </div>

            {/* Example 4 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Warning Message</h3>
              <p className="text-sm text-gray-500 mb-4">Session expiry warning</p>
              <button
                onClick={warningExample}
                className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm"
              >
                Show Warning
              </button>
            </div>

            {/* Example 5 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Critical Error</h3>
              <p className="text-sm text-gray-500 mb-4">Never auto-close</p>
              <button
                onClick={criticalError}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
              >
                Show Error
              </button>
            </div>

            {/* Example 6 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Loading State</h3>
              <p className="text-sm text-gray-500 mb-4">Non-closable loading</p>
              <button
                onClick={loadingExample}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
              >
                Start Processing
              </button>
            </div>

            {/* Example 7 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Multiple Positions</h3>
              <p className="text-sm text-gray-500 mb-4">Show at all positions</p>
              <button
                onClick={multiPositionExample}
                className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm"
              >
                Show All Positions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Containers */}
      {(['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'] as const).map(
        (pos) => (
          <ToastContainer
            key={pos}
            position={pos}
            toasts={toasts[pos]}
            onClose={(id) => removeToast(id, pos)}
          />
        )
      )}

      {/* Animation styles */}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes darkSlide {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientSlide {
          from { opacity: 0; transform: translateX(20px) scale(0.9); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
