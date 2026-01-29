import { ColorPicker } from './ColorPicker';

export default function GlassmorphismColorPicker() {
  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <h2 className="text-sm font-medium text-white/80 uppercase tracking-widest">Glassmorphism Color Picker</h2>

      <div className="max-w-sm">
        <ColorPicker
          theme="glassmorphism"
          label="Select Color"
          description="Choose a color for your design"
          value="#F472B6"
          showOpacity
          showRgbInputs
          showSwatches
        />
      </div>
    </div>
  );
}
