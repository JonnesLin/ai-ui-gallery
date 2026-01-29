import { ColorPicker } from './ColorPicker';

export default function PastelColorPicker() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-pink-50 min-h-screen">
      <h2 className="text-sm font-medium text-pink-400 uppercase tracking-widest">Pastel Color Picker</h2>

      <div className="max-w-sm">
        <ColorPicker
          theme="pastel"
          label="Select Color"
          description="Choose a soft pastel color"
          value="#F9A8D4"
          showOpacity
          showRgbInputs
          showSwatches
        />
      </div>
    </div>
  );
}
