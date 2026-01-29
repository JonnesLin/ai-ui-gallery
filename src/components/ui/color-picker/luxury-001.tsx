import { ColorPicker } from './ColorPicker';

export default function LuxuryColorPicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-stone-900 min-h-screen">
      <h2 className="text-sm font-light text-amber-400 uppercase tracking-[0.3em]">Luxury Color Picker</h2>

      <div className="max-w-sm">
        <ColorPicker
          theme="luxury"
          label="Select Color"
          description="Choose a color for your design"
          value="#F59E0B"
          showOpacity
          showRgbInputs
          showSwatches
        />
      </div>
    </div>
  );
}
