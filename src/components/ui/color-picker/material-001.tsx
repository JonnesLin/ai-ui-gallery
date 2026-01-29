import { ColorPicker } from './ColorPicker';

export default function MaterialColorPicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-gray-50 min-h-screen">
      <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide">Material Color Picker</h2>

      <div className="max-w-sm">
        <ColorPicker
          theme="material"
          label="Select Color"
          description="Choose a color for your design"
          value="#2196F3"
          showOpacity
          showRgbInputs
          showSwatches
        />
      </div>
    </div>
  );
}
