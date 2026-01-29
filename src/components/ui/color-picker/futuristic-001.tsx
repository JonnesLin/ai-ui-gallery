import { ColorPicker } from './ColorPicker';

export default function FuturisticColorPicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-slate-950 min-h-screen">
      <h2 className="text-sm font-light text-cyan-300 uppercase tracking-[0.2em]">Futuristic Color Picker</h2>

      <div className="max-w-sm">
        <ColorPicker
          theme="futuristic"
          label="Quantum Color"
          description="Select your holographic projection color"
          value="#00FFFF"
          showOpacity
          showRgbInputs
          showSwatches
        />
      </div>
    </div>
  );
}
