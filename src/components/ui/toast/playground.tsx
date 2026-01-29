import { useState } from 'react';
import { useToast, ToastContainer } from './index';
import type { ToastType, ToastPosition } from './Toast.types';
import type { ThemeName } from '../_themes';

export default function ToastPlayground() {
  const { toasts, addToast, removeToast, clearAll } = useToast();

  const [type, setType] = useState<ToastType>('success');
  const [theme, setTheme] = useState<ThemeName>('minimalist');
  const [position, setPosition] = useState<ToastPosition>('top-right');
  const [title, setTitle] = useState('Notification');
  const [description, setDescription] = useState('This is a toast notification.');
  const [duration, setDuration] = useState(5000);
  const [closable, setClosable] = useState(true);

  const handleAddToast = () => {
    addToast({
      type,
      theme,
      title,
      description,
      duration,
      closable,
      position,
    });
  };

  const allPositions: ToastPosition[] = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ];

  return (
    <div className="relative h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="absolute inset-0 overflow-auto p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Toast Playground</h1>
          <p className="text-gray-500 mb-8">Configure and test toast notifications</p>

          <div className="space-y-6">
            {/* Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <div className="grid grid-cols-4 gap-2">
                {(['info', 'success', 'warning', 'error'] as ToastType[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      type === t
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
              <div className="grid grid-cols-3 gap-2">
                {(['minimalist', 'dark', 'gradient'] as ThemeName[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      theme === t
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
              <div className="grid grid-cols-3 gap-2">
                {allPositions.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPosition(p)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      position === p
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (ms) - 0 = never auto-close
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Closable */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="closable"
                checked={closable}
                onChange={(e) => setClosable(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="closable" className="ml-2 text-sm font-medium text-gray-700">
                Show close button
              </label>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t">
              <button
                onClick={handleAddToast}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Show Toast
              </button>
              <button
                onClick={clearAll}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Containers */}
      {allPositions.map((pos) => (
        <ToastContainer
          key={pos}
          position={pos}
          toasts={toasts[pos]}
          onClose={(id) => removeToast(id, pos)}
        />
      ))}

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
