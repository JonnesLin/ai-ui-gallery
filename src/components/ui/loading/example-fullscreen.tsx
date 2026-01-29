import { useState } from 'react';
import { Loading } from './Loading';

export default function ExampleFullscreen() {
  const [showBasicFullscreen, setShowBasicFullscreen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showWithLabel, setShowWithLabel] = useState(false);

  return (
    <div className="space-y-8 p-6">
      <section>
        <h2 className="text-lg font-semibold mb-6">Fullscreen Loading</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setShowBasicFullscreen(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Show Basic Fullscreen
          </button>
          <button
            onClick={() => setShowOverlay(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Show With Overlay
          </button>
          <button
            onClick={() => setShowWithLabel(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Show With Label
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-6">Inline Loading States</h2>
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <div className="flex items-center gap-3">
              <Loading variant="spinner" size="sm" theme="material" />
              <span className="text-sm text-gray-600">Processing payment...</span>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <div className="flex items-center gap-3">
              <Loading variant="dots" size="sm" theme="material" />
              <span className="text-sm text-gray-600">Uploading files...</span>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <div className="flex items-center gap-3">
              <Loading variant="bars" size="sm" theme="material" />
              <span className="text-sm text-gray-600">Analyzing data...</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-6">Card Loading States</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="border rounded-lg p-6 flex items-center justify-center h-40">
            <Loading
              variant="spinner"
              size="md"
              theme="material"
              label="Loading content..."
            />
          </div>
          <div className="border rounded-lg p-6 flex items-center justify-center h-40">
            <Loading
              variant="dots"
              size="md"
              theme="minimalist"
              label="Please wait..."
            />
          </div>
          <div className="border rounded-lg p-6 flex items-center justify-center h-40">
            <Loading
              variant="pulse"
              size="md"
              theme="material"
              label="Processing..."
            />
          </div>
        </div>
      </section>

      {showBasicFullscreen && (
        <>
          <Loading
            variant="spinner"
            size="xl"
            theme="material"
            fullScreen
          />
          <button
            onClick={() => setShowBasicFullscreen(false)}
            className="fixed top-4 right-4 z-[60] px-4 py-2 bg-white rounded shadow-lg"
          >
            Close
          </button>
        </>
      )}

      {showOverlay && (
        <>
          <Loading
            variant="dots"
            size="xl"
            theme="material"
            color="white"
            fullScreen
            overlay
          />
          <button
            onClick={() => setShowOverlay(false)}
            className="fixed top-4 right-4 z-[60] px-4 py-2 bg-white rounded shadow-lg"
          >
            Close
          </button>
        </>
      )}

      {showWithLabel && (
        <>
          <Loading
            variant="spinner"
            size="xl"
            theme="material"
            color="white"
            fullScreen
            overlay
            label="Processing your request..."
          />
          <button
            onClick={() => setShowWithLabel(false)}
            className="fixed top-4 right-4 z-[60] px-4 py-2 bg-white rounded shadow-lg"
          >
            Close
          </button>
        </>
      )}
    </div>
  );
}
