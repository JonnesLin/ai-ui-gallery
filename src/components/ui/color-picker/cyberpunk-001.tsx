import { ColorPicker } from './ColorPicker';

export default function CyberpunkColorPicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-black min-h-screen">
      <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Cyberpunk Color Picker</h2>

      <div className="max-w-sm">
        <ColorPicker
          theme="cyberpunk"
          label="Neon Color"
          description="Select your cyber enhancement color"
          value="#FF00FF"
          showOpacity
          showRgbInputs
          showSwatches
        />
      </div>
    </div>
  );
}
