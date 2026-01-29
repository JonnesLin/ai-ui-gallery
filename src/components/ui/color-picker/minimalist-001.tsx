import { ColorPicker } from './ColorPicker';

export default function MinimalistColorPicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-white min-h-screen">
      <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest">Minimalist Color Picker</h2>

      <div className="max-w-sm">
        <ColorPicker
          theme="minimalist"
          label="Select Color"
          description="Choose a color for your design"
          value="#3B82F6"
          showOpacity
          showRgbInputs
          showSwatches
        />
      </div>
    </div>
  );
}
