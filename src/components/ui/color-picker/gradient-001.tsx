import { ColorPicker } from './ColorPicker';

export default function GradientColorPicker() {
  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700">
      <h2 className="text-sm font-medium text-white/80 uppercase tracking-widest">Gradient Color Picker</h2>

      <div className="max-w-sm">
        <ColorPicker
          theme="gradient"
          label="Select Color"
          description="Choose a color for your design"
          value="#C084FC"
          showOpacity
          showRgbInputs
          showSwatches
        />
      </div>
    </div>
  );
}
