import { ColorPicker } from './ColorPicker';

export default function DarkColorPicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-gray-900 min-h-screen">
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Dark Color Picker</h2>

      <div className="max-w-sm">
        <ColorPicker
          theme="dark"
          label="Select Color"
          description="Choose a color for your design"
          value="#22D3EE"
          showOpacity
          showRgbInputs
          showSwatches
        />
      </div>
    </div>
  );
}
